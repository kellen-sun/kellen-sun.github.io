/**
 * Bound to the zigzag leaderboard spreadsheet.
 *
 * Setup:
 * 1. Create a Google Sheet.
 * 2. Extensions → Apps Script, paste this file, Save.
 * 3. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the /exec URL into zzlb/api.js (ZIGZAG_LB_URL).
 * 5. After later edits: Deploy → Manage deployments → pencil → New version.
 */

var SHEET_NAME = "Scores";

function doGet(e) {
  return handle_(e ? e.parameter : {});
}

function doPost(e) {
  var data = {};
  if (e && e.postData && e.postData.contents) {
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      data = (e && e.parameter) || {};
    }
  } else {
    data = (e && e.parameter) || {};
  }
  return handle_(data);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function handle_(data) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var action = data && data.action;
    if (action === "list") return json_(list_());
    if (action === "claim") return json_(claim_(data));
    if (action === "score") return json_(score_(data));
    return json_({ ok: false, error: "unknown action" });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(["name", "seconds", "token", "updated"]);
  }
  return sh;
}

function normalizeName_(name) {
  if (typeof name !== "string") return "";
  return name.replace(/\s+/g, " ").trim();
}

function nameKey_(name) {
  return normalizeName_(name).toLowerCase();
}

function validName_(name) {
  var n = normalizeName_(name);
  if (n.length < 2 || n.length > 20) return false;
  return /^[A-Za-z0-9]+([ A-Za-z0-9._-]*[A-Za-z0-9])?$/.test(n);
}

function validToken_(token) {
  return typeof token === "string" && /^[A-Za-z0-9_-]{8,80}$/.test(token);
}

function allRows_(sh) {
  var values = sh.getDataRange().getValues();
  var rows = [];
  for (var i = 1; i < values.length; i++) {
    var name = values[i][0];
    if (!name) continue;
    rows.push({
      row: i + 1,
      name: String(name),
      seconds: values[i][1] === "" || values[i][1] == null ? null : Number(values[i][1]),
      token: String(values[i][2] || ""),
    });
  }
  return rows;
}

function findByName_(rows, name) {
  var key = nameKey_(name);
  for (var i = 0; i < rows.length; i++) {
    if (nameKey_(rows[i].name) === key) return rows[i];
  }
  return null;
}

function list_() {
  var rows = allRows_(sheet_());
  var out = rows.map(function (r) {
    return { name: r.name, seconds: r.seconds };
  });
  out.sort(function (a, b) {
    var as = a.seconds == null ? -1 : a.seconds;
    var bs = b.seconds == null ? -1 : b.seconds;
    return bs - as;
  });
  return { ok: true, rows: out };
}

function claim_(data) {
  var name = normalizeName_(data && data.name);
  var token = data && data.token;
  if (!validName_(name)) {
    return { ok: false, error: "name must be 2–20 letters, numbers, spaces, . _ -" };
  }
  if (!validToken_(token)) {
    return { ok: false, error: "bad token" };
  }
  var sh = sheet_();
  var existing = findByName_(allRows_(sh), name);
  if (existing) {
    if (existing.token === token) {
      return { ok: true, name: existing.name, claimed: false };
    }
    return { ok: false, error: "taken" };
  }
  sh.appendRow([name, "", token, new Date().toISOString()]);
  return { ok: true, name: name, claimed: true };
}

function score_(data) {
  var name = normalizeName_(data && data.name);
  var token = data && data.token;
  var seconds = Number(data && data.seconds);
  if (!validName_(name) || !validToken_(token) || !isFinite(seconds) || seconds < 0) {
    return { ok: false, error: "bad score" };
  }
  var sh = sheet_();
  var existing = findByName_(allRows_(sh), name);
  if (!existing || existing.token !== token) {
    return { ok: false, error: "unknown player" };
  }
  var next = existing.seconds == null ? seconds : Math.max(existing.seconds, seconds);
  sh.getRange(existing.row, 2, 1, 3).setValues([[next, existing.token, new Date().toISOString()]]);
  return { ok: true, seconds: next };
}
