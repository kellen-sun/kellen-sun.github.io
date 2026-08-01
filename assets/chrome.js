(function () {
  var path = window.location.pathname.replace(/\/index\.html$/, "/");
  var isRoot = path === "/" || path === "";

  var themeSvg =
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<circle class="sun" cx="12" cy="12" r="4" fill="currentColor"></circle>' +
    '<g class="rays">' +
    '<line class="ray" x1="12" y1="2.5" x2="12" y2="5"></line>' +
    '<line class="ray" x1="12" y1="19" x2="12" y2="21.5"></line>' +
    '<line class="ray" x1="2.5" y1="12" x2="5" y2="12"></line>' +
    '<line class="ray" x1="19" y1="12" x2="21.5" y2="12"></line>' +
    '<line class="ray" x1="4.8" y1="4.8" x2="6.6" y2="6.6"></line>' +
    '<line class="ray" x1="17.4" y1="17.4" x2="19.2" y2="19.2"></line>' +
    '<line class="ray" x1="4.8" y1="19.2" x2="6.6" y2="17.4"></line>' +
    '<line class="ray" x1="17.4" y1="6.6" x2="19.2" y2="4.8"></line>' +
    "</g>" +
    '<path class="moon" fill="currentColor" d="M14.3 3.2a8.2 8.2 0 1 0 6.5 14.1A7 7 0 0 1 14.3 3.2z"></path>' +
    "</svg>";

  var homeSvg =
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-8.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>' +
    "</svg>";

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  function wireReveal(corner, control) {
    var hideTimer = null;

    function show() {
      clearTimeout(hideTimer);
      control.classList.add("visible");
    }

    function hideSoon() {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        if (!control.matches(":hover") && !corner.matches(":hover")) {
          control.classList.remove("visible");
        }
      }, 350);
    }

    corner.addEventListener("mouseenter", show);
    corner.addEventListener("mouseleave", hideSoon);
    control.addEventListener("mouseenter", show);
    control.addEventListener("mouseleave", hideSoon);
  }

  // Home (skip on root)
  if (!isRoot) {
    var cornerTl = el('<div class="corner-tl" aria-hidden="true"></div>');
    var homeLink = el('<a class="home-link" href="/" aria-label="Home" title="Home"></a>');
    homeLink.innerHTML = homeSvg;
    document.body.prepend(homeLink);
    document.body.prepend(cornerTl);
    wireReveal(cornerTl, homeLink);
  }

  // Theme toggle
  var cornerTr = el('<div class="corner-tr" aria-hidden="true"></div>');
  var toggle = el('<button class="theme-toggle" type="button" aria-label="Toggle dark mode" title="Toggle theme"></button>');
  toggle.innerHTML = themeSvg;
  document.body.prepend(toggle);
  document.body.prepend(cornerTr);
  wireReveal(cornerTr, toggle);

  var themeClicks = 0;
  var themeQuotes = [
    "Drink some water.",
    "Stand up and stretch.",
    "Enjoy some sunshine.",
    "Take a deep breath."
  ];

  var orbit = null;
  var quoteEl = null;

  if (isRoot) {
    orbit = el('<div class="orbit" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>');
    quoteEl = el('<p class="theme-quote"></p>');
    document.body.appendChild(orbit);
    document.body.appendChild(quoteEl);
  }

  toggle.addEventListener("click", function () {
    var dark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");

    if (!isRoot) return;

    themeClicks += 1;
    if (themeClicks < 7) return;
    themeClicks = 0;

    toggle.classList.remove("burst");
    void toggle.offsetWidth;
    toggle.classList.add("burst");

    orbit.classList.remove("play");
    void orbit.offsetWidth;
    orbit.classList.add("play");

    quoteEl.textContent = themeQuotes[Math.floor(Math.random() * themeQuotes.length)];
    quoteEl.classList.add("show");
    setTimeout(function () {
      quoteEl.classList.remove("show");
    }, 3200);
  });
})();
