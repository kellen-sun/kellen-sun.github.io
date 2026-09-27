var ZIGZAG_LB_URL = "https://script.google.com/macros/s/AKfycbyVZK8e4KYnyXo_GkdhdofjUuyRm3WumLDWGNw7KAan750u09xidfTuUz_FuTgNyWykDg/exec";

var ZIGZAG_LB_NAME_KEY = "zigzagPlayerName";
var ZIGZAG_LB_TOKEN_KEY = "zigzagPlayerToken";

function zigzagLbConfigured() {
  return Boolean(ZIGZAG_LB_URL);
}

function zigzagLbRequest(payload) {
  if (!ZIGZAG_LB_URL) {
    return Promise.reject(new Error("leaderboard is not configured"));
  }
  return fetch(ZIGZAG_LB_URL, {
    method: "POST",
    redirect: "follow",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  }).then(function (res) {
    if (!res.ok) {
      throw new Error("leaderboard request failed");
    }
    return res.json();
  });
}

function zigzagLbFormatTime(seconds) {
  if (seconds == null || !isFinite(seconds) || seconds <= 0) {
    return "—";
  }
  var minutes = Math.floor(seconds / 60);
  var rest = Math.floor(seconds - minutes * 60);
  return String(minutes).padStart(2, "0") + ":" + String(rest).padStart(2, "0");
}

function zigzagLbNewToken() {
  if (window.crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "t" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function zigzagLbSubmitRecord(seconds) {
  var name = localStorage.getItem(ZIGZAG_LB_NAME_KEY);
  var token = localStorage.getItem(ZIGZAG_LB_TOKEN_KEY);
  if (!zigzagLbConfigured() || !name || !token) {
    return Promise.resolve();
  }
  var value = Number(seconds);
  if (!isFinite(value) || value <= 0) {
    return Promise.resolve();
  }
  return zigzagLbRequest({
    action: "score",
    name: name,
    token: token,
    seconds: value,
  }).catch(function () {});
}
