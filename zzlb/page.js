(function () {
  var claimEl = document.getElementById("claim");
  var boardEl = document.getElementById("board");

  function savedName() {
    return localStorage.getItem(ZIGZAG_LB_NAME_KEY) || "";
  }

  function showClaimed(name) {
    claimEl.innerHTML =
      '<p class="you">you are <strong></strong>. times sync from this browser when you beat your record.</p>';
    claimEl.querySelector("strong").textContent = name;
  }

  function showClaimForm(message) {
    claimEl.innerHTML =
      '<form>' +
      '<input type="text" name="name" maxlength="20" autocomplete="nickname" placeholder="username" required>' +
      "<button type=\"submit\">claim</button>" +
      (message ? '<p class="error"></p>' : "") +
      "</form>";
    if (message) {
      claimEl.querySelector(".error").textContent = message;
    }
    claimEl.querySelector("form").addEventListener("submit", onClaim);
  }

  function renderBoard(rows) {
    var mine = nameKey(savedName());
    if (!rows.length) {
      boardEl.innerHTML = '<p class="status">no times yet.</p>';
      return;
    }
    var html = "<ol>";
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var isMine = mine && nameKey(row.name) === mine;
      html +=
        '<li' +
        (isMine ? ' class="mine"' : "") +
        '><span class="rank">' +
        (i + 1) +
        '</span><span class="name"></span><span class="time">' +
        zigzagLbFormatTime(row.seconds) +
        "</span></li>";
    }
    html += "</ol>";
    boardEl.innerHTML = html;
    var names = boardEl.querySelectorAll(".name");
    for (var j = 0; j < names.length; j++) {
      names[j].textContent = rows[j].name;
    }
  }

  function nameKey(name) {
    return String(name || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function loadBoard() {
    if (!zigzagLbConfigured()) {
      boardEl.innerHTML =
        '<p class="status">sheet is not connected yet. claim is disabled until the apps script url is set.</p>';
      return Promise.resolve();
    }
    boardEl.innerHTML = '<p class="status">loading…</p>';
    return zigzagLbRequest({ action: "list" })
      .then(function (data) {
        if (!data || !data.ok) {
          throw new Error((data && data.error) || "could not load");
        }
        renderBoard(data.rows || []);
      })
      .catch(function () {
        boardEl.innerHTML = '<p class="status">could not load the board.</p>';
      });
  }

  function onClaim(event) {
    event.preventDefault();
    if (!zigzagLbConfigured()) return;
    var input = claimEl.querySelector("input");
    var name = input.value.replace(/\s+/g, " ").trim();
    var token = zigzagLbNewToken();
    var button = claimEl.querySelector("button");
    button.disabled = true;
    zigzagLbRequest({ action: "claim", name: name, token: token })
      .then(function (data) {
        if (!data || !data.ok) {
          var err = (data && data.error) || "could not claim";
          if (err === "taken") {
            showClaimForm("that name is taken");
            return;
          }
          showClaimForm(err);
          return;
        }
        localStorage.setItem(ZIGZAG_LB_NAME_KEY, data.name || name);
        localStorage.setItem(ZIGZAG_LB_TOKEN_KEY, token);
        showClaimed(data.name || name);
        var record = Number(localStorage.getItem("zigzagRecord") || 0);
        return zigzagLbSubmitRecord(record).then(loadBoard);
      })
      .catch(function () {
        showClaimForm("could not reach the leaderboard");
      });
  }

  var name = savedName();
  if (!zigzagLbConfigured()) {
    claimEl.innerHTML = "";
  } else if (name) {
    showClaimed(name);
  } else {
    showClaimForm();
  }
  loadBoard();
})();
