/* =====================================================================
   HISTOSENTIENCE — behaviour
   You normally only need to edit js/content.js.
   ===================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  var IMG = "images/";
  var DESKTOP = { w: 1920, h: 1080 };
  var MOBILE = { w: 390, h: 960 };

  var state = { mobile: false, u: 1, lang: "en" };
  var positioned = [];   // { el, pos: {desktop, mobile} }
  var floaters = [];     // { el, ax, ay, px, py, fx, fy, scope }

  /* ------------------------------------------------------------ language */
  var LANGS = S.languages || ["en"];
  // tr(): picks the current language from { en: …, fr: … }, falls back to English
  function tr(v) {
    if (v && typeof v === "object" && !Array.isArray(v) && ("en" in v || "fr" in v || "nl" in v || "hr" in v)) {
      return v[state.lang] != null ? v[state.lang] : v.en;
    }
    return v;
  }
  function ui(key) { return tr((S.ui || {})[key]) || key; }
  function pickLanguage() {
    var saved = null;
    try { saved = localStorage.getItem("histo-lang"); } catch (e) {}
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var nav = (navigator.languages || [navigator.language || ""]).map(function (l) { return String(l).slice(0, 2).toLowerCase(); });
    for (var i = 0; i < nav.length; i++) if (LANGS.indexOf(nav[i]) > -1) return nav[i];
    return S.defaultLanguage || "en";
  }
  function setLanguage(l) {
    if (l === state.lang) return;
    state.lang = l;
    try { localStorage.setItem("histo-lang", l); } catch (e) {}
    applyLanguage();
  }
  function langName(l) { return (S.languageNames || {})[l] || l.toUpperCase(); }
  function langButton(l) {
    var b = h("button", "lang" + (l === state.lang ? " active" : ""), langName(l));
    b.setAttribute("lang", l);
    b.addEventListener("click", function (e) { e.stopPropagation(); setLanguage(l); });
    return b;
  }
  // homepage: plain list in the corner
  function langSwitch(cls) {
    var wrap = h("nav", "lang-switch small " + (cls || ""));
    wrap.setAttribute("aria-label", "Language");
    LANGS.forEach(function (l) { wrap.appendChild(langButton(l)); });
    return wrap;
  }
  // other pages: current language, click to unfold the others
  function langMenu() {
    var wrap = h("nav", "lang-menu small");
    wrap.setAttribute("aria-label", "Language");
    var cur = h("button", "lang-current", langName(state.lang) + '<span class="caret"></span>');
    cur.setAttribute("aria-expanded", "false");
    var list = h("div", "lang-list");
    LANGS.forEach(function (l) { if (l !== state.lang) list.appendChild(langButton(l)); });
    cur.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = wrap.classList.toggle("open");
      cur.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function () { wrap.classList.remove("open"); });
    wrap.appendChild(cur); wrap.appendChild(list);
    return wrap;
  }
  function applyLanguage() {
    document.documentElement.lang = state.lang;
    // rebuild homepage + open page in the new language
    document.getElementById("home-stage").innerHTML = "";
    positioned = []; floaters = [];
    buildHome();
    var sw = document.getElementById("sheet-lang");
    sw.innerHTML = ""; sw.appendChild(langMenu());
    document.querySelector(".close").setAttribute("aria-label", ui("back"));
    layout();
    var scroll = document.getElementById("sheet-scroll"), top = scroll.scrollTop;
    openSheet.relang = true; route(); openSheet.relang = false;
    scroll.scrollTop = top;
  }

  /* ------------------------------------------------------------ helpers */
  function h(tag, cls, html) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (html != null) el.innerHTML = html;
    return el;
  }
  function place(el, pos, isImg) {
    el.classList.add("pos");
    positioned.push({ el: el, pos: pos, img: !!isImg });
    if (isImg) { var im = el.querySelector("img"); if (im) im.addEventListener("load", function () { layout(); }); }
    return el;
  }
  function rand(seed) { var x = Math.sin(seed * 9301 + 49297) * 233280; return x - Math.floor(x); }
  function addFloat(el, i, strength, scope, yScale) {
    if (yScale == null) yScale = 0.8;
    el.classList.add("float");
    floaters.push({
      el: el, scope: scope,
      ax: (0.5 + rand(i + 1)) * strength * (rand(i + 7) > .5 ? 1 : -1),
      ay: (0.5 + rand(i + 3)) * strength * yScale * (rand(i + 9) > .5 ? 1 : -1),
      px: 17 + rand(i + 11) * 16, py: 21 + rand(i + 13) * 18,
      fx: rand(i + 17) * 6.28, fy: rand(i + 19) * 6.28
    });
  }
  function byId(id) { for (var i = 0; i < S.performances.length; i++) if (S.performances[i].id === id) return S.performances[i]; return null; }
  function link(el, id) {
    el.classList.add("home-link");
    el.addEventListener("click", function () { location.hash = id; });
    el.setAttribute("role", "link"); el.tabIndex = 0;
    el.addEventListener("keydown", function (e) { if (e.key === "Enter") location.hash = id; });
    return el;
  }

  /* ------------------------------------------------------------ homepage */
  function buildHome() {
    var stage = document.getElementById("home-stage");
    var n = 0;

    // 0. extra faded photos, deepest layer
    S.performances.forEach(function (p) {
      (p.home.extra || []).forEach(function (b) {
        var el = h("div", "img-back extra" + (b.pretextured ? " pretextured" : ""));
        el.appendChild(Object.assign(new Image(), { src: IMG + b.src, alt: "" }));
        stage.appendChild(link(place(el, b, true), p.id));
      });
    });

    // 1. images seen through the paper
    S.performances.forEach(function (p) {
      var b = p.home.back;
      if (!b) return;
      var el = h("div", "img-back" + (b.pretextured ? " pretextured" : b.texture ? " " + b.texture : ""));
      el.appendChild(Object.assign(new Image(), { src: IMG + b.src, alt: "" }));
      stage.appendChild(link(place(el, b, true), p.id));
    });

    // 2. grain sheet over them
    stage.appendChild(h("div", "veil"));

    // 3. images on top of the paper
    S.performances.forEach(function (p) {
      var f = p.home.front;
      if (!f) return;
      var el = h("div", "img-front" + (f.pretextured ? " pretextured" : ""));
      el.appendChild(Object.assign(new Image(), { src: IMG + f.src, alt: p.title + " — " + p.artists }));
      stage.appendChild(link(place(el, f, true), p.id));
    });

    // 4. floating titles + dates
    S.performances.forEach(function (p) {
      var tb = p.home.titleBlock;
      var t = h("div", "title-block " + (tb.layout || "inline"));
      t.appendChild(h("span", "t big", p.titleDisplay || p.title));
      var artists = tr(p.artists);
      t.appendChild(h("span", "a small", tb.layout === "stack" ? artists : artists.replace(" & ", " &<br>")));
      stage.appendChild(link(place(t, tb), p.id));
      addFloat(t, n++, 34, "home");

      var d = h("div", "date-block small");
      d.textContent = p.date + "\n" + tr(p.times).join("\n") + "\n\n" + tr(p.location);
      stage.appendChild(link(place(d, p.home.dateBlock), p.id));
      addFloat(d, n++, 30, "home");
    });

    // 5. hover veil + title
    var vt = h("div", "veil-top", '<div class="paper-base"></div><div class="paper-light"></div>');
    stage.appendChild(vt);

    var hoverWords = ui("about");
    var title = h("button", "site-title big",
      '<span class="hover">' + hoverWords + ' </span>' + S.title + '<span class="dot"></span>');
    title.setAttribute("aria-label", hoverWords + " " + S.title);
    stage.appendChild(place(title, S.titlePosition));
    title.addEventListener("mouseenter", function () { document.body.classList.add("title-hover"); });
    title.addEventListener("mouseleave", function () { document.body.classList.remove("title-hover"); });
    title.addEventListener("focus", function () { document.body.classList.add("title-hover"); });
    title.addEventListener("blur", function () { document.body.classList.remove("title-hover"); });
    title.addEventListener("click", function () { location.hash = "about"; });

    // 6. language switch
    stage.appendChild(langSwitch("home-lang"));
  }

  /* ------------------------------------------------------------ sheets */
  var sheetPositioned = [];
  function sPlace(el, desk, fixed) {
    el.classList.add("pos");
    if (fixed) el.classList.add("is-fixed");
    sheetPositioned.push({ el: el, pos: { desktop: desk }, fixed: !!fixed });
    return el;
  }

  function buildAbout(stage) {
    var A = S.about;
    var wrap = h("div", "about");

    // 1. programme + practical notes
    var top = h("header", "about-top");
    var prog = h("div", "about-program");
    prog.appendChild(h("span", "label small", ui("program")));
    var list = h("div", "program");
    S.performances.forEach(function (p, i) {
      var a = h("a", "program-line big",
        '<span class="pd">' + p.date + '</span> <span class="pa">' + tr(p.artists) + '</span> <span class="pt">' + (p.titleDisplay || p.title) + "</span>");
      a.href = "#" + p.id;
      list.appendChild(a);
      addFloat(a, 40 + i, 9, "sheet", 0.06);
    });
    prog.appendChild(list);
    top.appendChild(prog);
    if (A.notes && A.notes.length) {
      var notes = h("div", "about-notes");
      A.notes.forEach(function (x) { notes.appendChild(h("p", "small", keepCase(tr(x)))); });
      top.appendChild(notes);
    }
    wrap.appendChild(top);

    // 2. the quote, as an epigraph
    var q = h("figure", "about-quote");
    q.appendChild(h("blockquote", "", tr(A.quote)));
    q.appendChild(h("figcaption", "", "— " + tr(A.quoteSource)));
    wrap.appendChild(q);

    // 3. the text, in a central reading column
    wrap.appendChild(h("div", "about-intro", '<p><span class="lead">' + tr(A.introLead) + "</span> " + tr(A.intro) + "</p>"));

    // 4. credits along the bottom
    var info = h("footer", "about-info");
    var loc = h("div", "block");
    loc.appendChild(h("span", "label small", ui("locations")));
    loc.appendChild(h("div", "loc", A.locations.map(function (l) {
      return typeof l === "string" ? l : '<a href="' + l.url + '" target="_blank" rel="noopener">' + l.name + "</a>";
    }).join("<br>")));
    info.appendChild(loc);
    A.blocks.forEach(function (b) {
      var bl = h("div", "block");
      bl.appendChild(h("span", "label small", tr(b.label)));
      bl.appendChild(h("div", "small", tr(b.text)));
      info.appendChild(bl);
    });
    wrap.appendChild(info);
    stage.appendChild(wrap);
  }

  // keeps "au JUS" written as "au JUS" even inside uppercase text
  function keepCase(text) {
    return String(text).replace(/au JUS/g, '<span class="keep-case">au JUS</span>');
  }

  function jittered(pos, amount) {
    if (!amount) return pos;
    return { x: pos.x + (Math.random() * 2 - 1) * amount, y: Math.max(0, pos.y + (Math.random() * 2 - 1) * amount), w: pos.w };
  }

  function buildPerformance(stage, p) {
    var P = p.page;

    if (P.colour) {
      var c = h("div", "perf-colour" + (P.colour.pretextured ? " pretextured" : ""));
      c.appendChild(Object.assign(new Image(), { src: IMG + P.colour.src, alt: p.title + " — " + p.artists }));
      stage.appendChild(sPlace(c, jittered(P.colour.desktop, P.jitter)));
    }

    var ip = P.infoPosition || { x: 925, y: 100 };
    var right = 1860;
    if (P.faded && P.faded.desktop.y < 520 && P.faded.desktop.x > ip.x) right = P.faded.desktop.x - 40;
    right = P.infoWidth ? ip.x + P.infoWidth : Math.min(right, ip.x + 880);
    var info = h("div", "perf-info");
    info.appendChild(h("div", "big", [p.date].concat(tr(P.timesPage || p.timesPage || p.times)).join("<br>")));
    if (tr(p.location)) info.appendChild(h("div", "small", venueLink(tr(p.location))));
    if (tr(S.afterTalkNote)) info.appendChild(h("div", "small", tr(S.afterTalkNote)));
    if (tr(p.registration)) info.appendChild(h("div", "small", tr(p.registration)));
    if (tr(p.duration)) info.appendChild(h("div", "small", ui("duration") + ": " + tr(p.duration)));
    stage.appendChild(sPlace(info, { x: ip.x, y: ip.y, w: right - ip.x }));

    if (P.faded) {
      var f = h("div", "perf-faded" + (P.faded.alreadyFaded ? "" : " make-faded") + (P.faded.darkPhoto ? " dark-photo" : ""));
      f.appendChild(Object.assign(new Image(), { src: IMG + P.faded.src, alt: "" }));
      stage.appendChild(sPlace(f, jittered(P.faded.desktop, P.jitter), P.faded.scrolls !== true));
    }

    (P.extra || []).forEach(function (x) {
      var e = h("div", "perf-faded perf-extra");
      e.appendChild(Object.assign(new Image(), { src: IMG + x.src, alt: "" }));
      stage.appendChild(sPlace(e, x.desktop, x.scrolls !== true));
    });

    var t = h("div", "perf-text small");
    t.style.marginLeft = "calc(" + (P.textLeft != null ? P.textLeft : 33) + " * var(--u))";
    t.style.marginTop = "calc(" + (P.textTop || 660) + " * var(--u))";
    t.style.width = "calc(" + (P.textWidth || 1300) + " * var(--u))";
    t.dataset.flow = "1";
    var paras = tr(P.description).slice();
    var html = "";
    if (P.descriptionStartsWithTitle) {
      html += '<p><span class="lead">' + p.title + "</span> " + paras.shift() + "</p>";
    } else {
      html += '<span class="lead-line"><span class="lead">' + p.title + '</span><span class="who">' + tr(p.artists) + "</span></span>";
    }
    paras.forEach(function (x) { html += "<p>" + x + "</p>"; });
    var credits = tr(P.credits);
    if (credits && credits.length) {
      html += '<div class="credits"><h3>' + ui("credits") + "</h3>" + credits.map(function (x) { return "<p>" + x + "</p>"; }).join("") + "</div>";
    }
    if (P.bios && P.bios.length) {
      html += '<details class="bios"><summary>' + ui("bio") + '<span class="sign"></span></summary><div class="bios-body">';
      P.bios.forEach(function (b) { html += '<p><strong class="bio-name">' + tr(b.name) + "</strong> " + tr(b.text) + "</p>"; });
      html += "</div></details>";
    }
    t.innerHTML = html;
    stage.appendChild(t);
    // click an image to see it larger
    var pics = [];
    [P.colour, P.faded].concat(P.extra || []).forEach(function (img) { if (img) pics.push(IMG + (img.full || img.src)); });
    stage.querySelectorAll(".perf-colour, .perf-faded").forEach(function (el, i) {
      el.classList.add("zoomable");
      el.setAttribute("role", "button"); el.tabIndex = 0;
      el.setAttribute("aria-label", ui("enlarge"));
      el.addEventListener("click", function () { openLightbox(pics, i); });
      el.addEventListener("keydown", function (e) { if (e.key === "Enter") openLightbox(pics, i); });
    });

    var lead = t.querySelector(".lead");
    if (lead) addFloat(lead, 60 + S.performances.indexOf(p), 14, "sheet", 0.35);
  }

  function venueLink(text) {
    var L = S.venueLinks || {};
    Object.keys(L).forEach(function (name) {
      var i = text.toUpperCase().indexOf(name.toUpperCase());
      if (i > -1) text = text.slice(0, i) + '<a class="keep-case" href="' + L[name] + '" target="_blank" rel="noopener">' + text.slice(i, i + name.length) + "</a>" + text.slice(i + name.length);
    });
    return text;
  }

  /* ------------------------------------------------------------ lightbox */
  var lb = { el: null, img: null, list: [], i: 0 };
  function openLightbox(list, i) {
    if (!lb.el) {
      lb.el = h("div", "lightbox", '<div class="lb-paper"></div><button class="lb-close" aria-label="Close">X</button><img alt="">');
      lb.img = lb.el.querySelector("img");
      lb.el.addEventListener("click", function (e) {
        if (e.target === lb.img && lb.list.length > 1) { showLb(lb.i + 1); return; }
        closeLightbox();
      });
      document.body.appendChild(lb.el);
    }
    clearTimeout(lbTimer); lb.el.classList.remove("closing");
    lb.list = list; showLb(i);
    requestAnimationFrame(function () { lb.el.classList.add("open"); });
  }
  function showLb(i) {
    lb.i = (i + lb.list.length) % lb.list.length;
    lb.img.src = lb.list[lb.i];
    lb.img.style.cursor = lb.list.length > 1 ? "e-resize" : "zoom-out";
  }
  var lbTimer;
  function closeLightbox() {
    if (!lb.el || !lb.el.classList.contains("open")) return;
    lb.el.classList.remove("open");
    if (reduce) return;
    lb.el.classList.add("closing");
    clearTimeout(lbTimer);
    lbTimer = setTimeout(function () { lb.el.classList.remove("closing"); }, 1300);
  }
  function lightboxOpen() { return lb.el && lb.el.classList.contains("open"); }

  function openSheet(kind, perf) {
    clearTimeout(closeTimer);
    document.documentElement.classList.remove("closing");
    var stage = document.getElementById("sheet-stage");
    var sh0 = document.getElementById("sheet");
    var key0 = kind === "about" ? "about" : perf.id;
    if (sh0.classList.contains("open") && sh0.dataset.page && sh0.dataset.page !== key0 && !openSheet.relang) {
      // keep a copy of the current page underneath while the new one turns over it
      var old = document.getElementById("sheet-under");
      if (old) old.remove();
      var under = sh0.cloneNode(true);
      under.id = "sheet-under";
      under.removeAttribute("aria-hidden");
      under.setAttribute("aria-hidden", "true");
      var sc0 = document.getElementById("sheet-scroll").scrollTop;
      sh0.parentNode.insertBefore(under, sh0);
      under.querySelector(".sheet-scroll").scrollTop = sc0;
      setTimeout(function () { under.remove(); }, 1600);
    }
    var biosOpen = !!stage.querySelector(".bios[open]");
    stage.innerHTML = "";
    sheetPositioned = [];
    floaters = floaters.filter(function (f) { return f.scope !== "sheet"; });
    if (kind === "about") buildAbout(stage); else buildPerformance(stage, perf);
    if (biosOpen && stage.querySelector(".bios")) stage.querySelector(".bios").open = true;
    layout();
    var sheet = document.getElementById("sheet");
    var wasOpen = sheet.classList.contains("open");
    var sameKey = (kind === "about" ? "about" : perf.id);
    var root = document.documentElement;
    if (wasOpen && sheet.dataset.page && sheet.dataset.page !== sameKey && !openSheet.relang) {
      root.classList.remove("flip"); void root.offsetWidth; root.classList.add("flip");
      turning();
    } else if (!wasOpen) {
      turning();
    }
    sheet.dataset.page = sameKey;
    sheet.classList.add("open");
    root.classList.add("sheet-open");
    sheet.setAttribute("aria-hidden", "false");
    document.getElementById("sheet-scroll").scrollTop = 0;
    document.body.classList.remove("title-hover");
    document.title = (kind === "about" ? ui("about") + " " + S.title : perf.title + " — " + S.title);
  }
  /* page-turn sound (file in /sound, settings in content.js) */
  var turnSound = null;
  function playTurn() {
    if (S.sound === false || reduce) return;
    try {
      if (!turnSound) { turnSound = new Audio(S.soundFile || "sound/page-turn.mp3"); turnSound.preload = "auto"; }
      turnSound.volume = S.soundVolume == null ? 0.3 : S.soundVolume;
      turnSound.currentTime = 0;
      var pr = turnSound.play();
      if (pr && pr.catch) pr.catch(function () {});   // browsers block sound before the first click
    } catch (e) {}
  }
  var turnTimer;
  function turning() {
    var root = document.documentElement;
    root.classList.add("sheet-moving");
    playTurn();
    clearTimeout(turnTimer);
    turnTimer = setTimeout(function () { root.classList.remove("sheet-moving", "flip"); }, 1650);
  }
  var closeTimer;
  function closeSheet() {
    closeLightbox();
    var sh = document.getElementById("sheet"), root = document.documentElement;
    sh.dataset.page = "";
    if (!sh.classList.contains("open")) { root.classList.remove("sheet-open"); return; }
    if (reduce) { root.classList.remove("sheet-open"); finishClose(); return; }
    // wipe the page away from the bottom up, then reset the side-to-side turn silently
    root.classList.add("closing");
    clearTimeout(closeTimer);
    closeTimer = setTimeout(function () {
      root.classList.add("no-turn-anim");
      root.classList.remove("sheet-open");
      finishClose();
      void root.offsetWidth;
      root.classList.remove("closing", "no-turn-anim");
    }, 1300);
    document.title = "HISTOSENTIENCE — 08–10.12.2026, St Gilles";
    sh.setAttribute("aria-hidden", "true");
  }
  function finishClose() {
    var sheet = document.getElementById("sheet");
    sheet.classList.remove("open");
    sheet.setAttribute("aria-hidden", "true");
    document.title = "HISTOSENTIENCE — 08–10.12.2026, St Gilles";
  }

  function route() {
    var id = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    if (!id) return closeSheet();
    if (id === "about") return openSheet("about");
    var p = byId(id);
    if (p) openSheet("perf", p); else closeSheet();
  }

  /* ------------------------------------------------------------ layout */
  function layout() {
    var vw = window.innerWidth, vh = window.innerHeight;
    state.mobile = vw < 760 || vw / vh < 0.85;
    document.documentElement.classList.toggle("is-mobile", state.mobile);
    var frame = state.mobile ? MOBILE : DESKTOP;
    var u = state.mobile ? Math.min(vw / frame.w, vh / frame.h) : Math.min(vw / frame.w, vh / frame.h);
    if (state.mobile) u = Math.max(u, vw / frame.w * 0.86);   // keep phones readable
    state.u = u;
    document.documentElement.style.setProperty("--u", u + "px");
    var SC = S.scale || {};
    var ts = state.mobile ? 1 : (SC.text || 1), ik = state.mobile ? 1 : (SC.homeImages || 1);
    document.documentElement.style.setProperty("--ts", ts);

    var st = document.getElementById("home-stage");
    var W = frame.w * u, H = frame.h * u;
    st.style.width = W + "px"; st.style.height = H + "px";
    st.style.left = (vw - W) / 2 + "px";
    st.style.top = Math.max(0, (vh - H) / 2) + "px";

    positioned.forEach(function (o) {
      if (state.mobile && o.pos.mobile === false) { o.el.style.display = "none"; return; }
      o.el.style.display = "";
      var p = state.mobile ? (o.pos.mobile || o.pos.desktop) : o.pos.desktop;
      if (o.img && ik !== 1 && p && p.w) {
        // shrink image around its own centre
        var im = o.el.querySelector("img"), ratio = im && im.naturalWidth ? im.naturalHeight / im.naturalWidth : 1;
        var hgt = p.w * ratio;
        p = { x: p.x + p.w * (1 - ik) / 2, y: p.y + hgt * (1 - ik) / 2, w: p.w * ik };
      }
      apply(o.el, p, u);
    });

    // sheets use the desktop canvas (on phones they become a simple flowing page)
    var su = state.mobile ? u : Math.min(vw / DESKTOP.w, vh / DESKTOP.h);
    var ss = document.getElementById("sheet-stage");
    ss.style.width = DESKTOP.w * su + "px";
    ss.style.minHeight = state.mobile ? "" : DESKTOP.h * su + "px";
    sheetPositioned.forEach(function (o) {
      apply(o.el, o.pos.desktop, su);
      if (o.fixed && !state.mobile) o.el.style.left = ss.offsetLeft + o.pos.desktop.x * su + "px";   // stays put while text scrolls
    });
  }
  function apply(el, p, u) {
    if (!p) return;
    el.style.left = p.x * u + "px";
    el.style.top = p.y * u + "px";
    if (p.w) el.style.width = p.w * u + "px";
  }

  /* ------------------------------------------------------------ floating */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function tick(ms) {
    var t = ms / 1000, k = (S.floatStrength == null ? 1 : S.floatStrength) * state.u * (state.mobile ? 0.45 : 1);
    for (var i = 0; i < floaters.length; i++) {
      var f = floaters[i];
      var dx = f.ax * k * Math.sin(t * 6.283 / f.px + f.fx);
      var dy = f.ay * k * Math.sin(t * 6.283 / f.py + f.fy);
      f.el.style.transform = "translate(" + dx.toFixed(2) + "px," + dy.toFixed(2) + "px)";
    }
    requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------ opening: paper dissolves */
  // The homepage opens with its images seen through a sheet of paper (like the
  // Instagram cover); the paper then dissolves grain by grain, so the prints
  // slowly come back. Settings: S.intro in content.js.
  function introVeil() {
    var I = S.intro || {};
    if (I.enabled === false || reduce) return;
    var v = document.createElement("div");
    v.className = "intro-veil";
    v.style.opacity = I.opacity == null ? 0.86 : I.opacity;
    v.style.transitionDuration = (I.duration == null ? 8 : I.duration) + "s";
    document.getElementById("home").appendChild(v);
    setTimeout(function () {
      v.style.opacity = 0;
      setTimeout(function () { v.remove(); }, (I.duration == null ? 8 : I.duration) * 1000 + 200);
    }, (I.hold == null ? 1 : I.hold) * 1000);
  }

  /* ------------------------------------------------------------ start */
  state.lang = pickLanguage();
  document.documentElement.lang = state.lang;
  document.getElementById("sheet-lang").appendChild(langMenu());
  buildHome();
  layout();
  introVeil();
  route();
  window.addEventListener("resize", layout);
  window.addEventListener("hashchange", route);
  document.addEventListener("keydown", function (e) {
    if (lightboxOpen()) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showLb(lb.i + 1);
      if (e.key === "ArrowLeft") showLb(lb.i - 1);
      return;
    }
    if (e.key === "Escape" && location.hash) location.hash = "";
  });
  if (!reduce) requestAnimationFrame(tick);
})();
