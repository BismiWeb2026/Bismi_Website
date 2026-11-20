/* ==========================================================
   Bismi Educational Trust | main.js
   1. Contact details from config.js (phones, WhatsApp, branches, social)
   2. Navigation: mobile menu, header shadow, active section link
   3. Awards carousel: auto-slide, pause, dots, arrows, swipe, keyboard
   4. Motion: scroll reveals and counting statistics
   5. Region cards and college filtering from colleges.js
   ========================================================== */

(function () {
  "use strict";

  const config = window.BISMI_CONFIG || {};
  const collegeData = typeof colleges !== "undefined" && Array.isArray(colleges) ? colleges : [];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Helpers ---------- */

  // Keeps only digits and the leading plus, so tel: and wa.me links are valid
  function cleanPhone(number) {
    return String(number || "").replace(/[^\d+]/g, "");
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /* ---------- 1. Contact details ---------- */

  function buildWhatsAppUrl() {
    const wa = config.whatsapp || {};
    const base = wa.url || "https://wa.me/";
    const message = wa.message ? "?text=" + encodeURIComponent(wa.message) : "";
    return base + message;
  }

  function renderWhatsAppLinks() {
    const url = buildWhatsAppUrl();
    document.querySelectorAll("[data-whatsapp-link]").forEach(function (link) {
      link.href = url;
    });
  }

  function renderPhones() {
    const list = document.getElementById("phones");
    if (!list || !Array.isArray(config.phones)) return;

    config.phones.forEach(function (phone) {
      const item = el("li");
      const link = el("a");
      link.href = "tel:" + cleanPhone(phone.number);
      link.setAttribute("aria-label", "Call " + (phone.label || "") + " " + phone.number);
      link.append(el("span", "phone-label", phone.label || ""), el("span", "phone-number", phone.number || ""));
      item.appendChild(link);
      list.appendChild(item);
    });
  }

  function renderMainBranch() {
    const container = document.getElementById("main-branch");
    const branch = config.mainBranch;
    if (!container || !branch) return;

    const card = el("article", "branch-card main-branch");
    card.appendChild(el("span", "branch-tag", "Head office"));
    card.appendChild(el("h3", null, branch.name));
    card.appendChild(el("address", null, branch.address));

    const links = el("div", "branch-links");

    const phoneLink = el("a", null, "Call " + branch.phone);
    phoneLink.href = "tel:" + cleanPhone(branch.phone);

    const mapsLink = el("a", null, "Get directions");
    mapsLink.href = branch.mapsUrl;
    mapsLink.target = "_blank";
    mapsLink.rel = "noopener";
    mapsLink.setAttribute("aria-label", "Get directions to " + branch.name + " (opens in a new tab)");

    links.append(phoneLink, mapsLink);
    card.appendChild(links);
    container.appendChild(card);
  }

  function renderBranchPlaces() {
    const list = document.getElementById("branch-places");
    if (!list) return;

    const places = Array.isArray(config.branchPlaces) ? config.branchPlaces : [];
    if (places.length === 0) {
      list.appendChild(el("li", "places-empty", "Branch locations will be listed here."));
      return;
    }
    places.forEach(function (place) {
      list.appendChild(el("li", null, place));
    });
  }

  // Icons are drawn inline. Elements with class "cut" are knocked out and take the badge colour.
  const SOCIAL_ICONS = {
    WhatsApp:
      '<path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.8-1.3A9.5 9.5 0 1 0 12 2.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<path d="M8.9 7.6c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.4.5c.5 1 1.3 1.8 2.3 2.3l.5-.4c.2-.1.4-.2.6-.1l1.6.7c.3.1.4.3.3.6-.1.9-.6 1.5-1.4 1.6-.8.1-1.7 0-2.8-.5-2-.9-3.5-2.5-4.3-4.4-.4-1-.5-1.9-.4-2.6z" fill="currentColor"/>',
    Instagram:
      '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/>',
    Facebook:
      '<path fill="currentColor" d="M13.5 21.5v-7.6h2.6l.4-3h-3V8.9c0-.9.3-1.5 1.5-1.5h1.6V4.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.9v3h2.6v7.6z"/>',
    YouTube:
      '<rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/>' +
      '<path class="cut" d="M10 9.2v5.6l4.8-2.8z"/>',
    Pinterest:
      '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<path fill="currentColor" d="M12.6 6.6c-2.9 0-4.4 2-4.4 3.7 0 1 .4 1.9 1.2 2.2.1.1.3 0 .3-.1l.1-.5c0-.2 0-.2-.1-.3-.3-.4-.5-.9-.5-1.5 0-1.9 1.4-3.6 3.7-3.6 2 0 3.1 1.2 3.1 2.9 0 2.2-1 4-2.4 4-.8 0-1.4-.7-1.2-1.5.2-1 .7-2.1.7-2.8 0-.6-.3-1.2-1.1-1.2-.9 0-1.6.9-1.6 2.2 0 .8.3 1.4.3 1.4l-1.1 4.6c-.3 1.3 0 2.9 0 3.1h.1c.1-.1 1.1-1.4 1.4-2.7l.5-2.1c.3.5 1 .9 1.8.9 2.4 0 4-2.2 4-5.1 0-2.3-2-4.4-4.9-4.4z"/>',
    LinkedIn:
      '<rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor"/>' +
      '<rect class="cut" x="5.6" y="9.2" width="2.6" height="9.2"/>' +
      '<circle class="cut" cx="6.9" cy="6.1" r="1.5"/>' +
      '<path class="cut" d="M11.2 9.2h2.5v1.3c.4-.7 1.2-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4v5h-2.6v-4.5c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4v4.6h-2.6z"/>'
  };

  function socialIcon(name) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("class", "social-icon");
    svg.innerHTML = SOCIAL_ICONS[name] || "";
    return svg;
  }

  function renderSocial() {
    const list = document.getElementById("social");
    if (!list) return;

    const platforms = [{ name: "WhatsApp", url: buildWhatsAppUrl() }]
      .concat(Array.isArray(config.social) ? config.social : []);

    platforms.forEach(function (platform) {
      const item = el("li");
      const link = el("a", "social-link");
      link.href = platform.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.title = platform.name;
      link.setAttribute("aria-label", platform.name + " (opens in a new tab)");
      link.appendChild(socialIcon(platform.name));
      item.appendChild(link);
      list.appendChild(item);
    });
  }

  /* ---------- 2. Navigation ---------- */

  function setupNavigation() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");

    // Header gains a soft shadow once the page has scrolled
    function onScroll() {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (!toggle || !nav) return;

    function openNav(open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      openNav(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { openNav(false); });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        openNav(false);
        toggle.focus();
      }
    });
  }

  // Highlights the menu link for the section currently in view
  function setupActiveLink() {
    if (!("IntersectionObserver" in window)) return;

    const links = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
    const map = {};
    links.forEach(function (link) { map[link.getAttribute("href").slice(1)] = link; });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) { link.classList.remove("is-active"); });
        const link = map[entry.target.id];
        if (link) link.classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    Object.keys(map).forEach(function (id) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ---------- 3. Awards carousel ---------- */

  function setupCarousel() {
    const root = document.getElementById("awards-carousel");
    if (!root) return;

    const items = Array.isArray(config.awards) ? config.awards : [];
    const section = root.closest("section");
    if (items.length === 0) {
      if (section) section.hidden = true;
      return;
    }

    const viewport = root.querySelector(".carousel-viewport");
    const track = root.querySelector(".carousel-track");
    const dotsWrap = root.querySelector(".carousel-dots");
    const prev = root.querySelector(".carousel-prev");
    const next = root.querySelector(".carousel-next");
    const controls = root.querySelector(".carousel-controls");

    // Build slides and dots from config.awards
    items.forEach(function (item, i) {
      const slide = el("figure", "carousel-slide");
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "slide");
      slide.setAttribute("aria-label", (i + 1) + " of " + items.length);

      const frame = el("div", "award-frame");
      const img = el("img");
      img.alt = item.title || "Award or appreciation";
      img.loading = "lazy";
      // If the image file is missing, show a placeholder instead of a broken picture
      img.onerror = function () { slide.classList.add("is-missing"); };
      img.src = item.src;

      const placeholder = el("span", "award-placeholder", "Award image to be added");
      frame.append(img, placeholder);

      const caption = el("figcaption", "award-caption");
      caption.append(el("strong", null, item.title || ""), el("span", null, item.detail || ""));

      slide.append(frame, caption);
      track.appendChild(slide);

      const dot = el("button", "carousel-dot");
      dot.type = "button";
      dot.setAttribute("aria-label", "Show award " + (i + 1));
      dot.addEventListener("click", function () { goTo(i); restart(); });
      dotsWrap.appendChild(dot);
    });

    const slides = Array.from(track.children);
    const dots = Array.from(dotsWrap.children);
    let index = 0;
    let timer = null;
    let hovered = false;
    const interval = Number(config.awardsIntervalMs) || 5000;

    function goTo(i) {
      index = (i + items.length) % items.length;
      track.style.transform = "translateX(" + (-index * 100) + "%)";
      slides.forEach(function (slide, n) {
        slide.setAttribute("aria-hidden", String(n !== index));
      });
      dots.forEach(function (dot, n) {
        dot.setAttribute("aria-current", String(n === index));
      });
    }

    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    function start() {
      if (reduceMotion || items.length < 2 || hovered) return;
      stop();
      timer = setInterval(function () { goTo(index + 1); }, interval);
    }

    function restart() {
      stop();
      start();
    }

    // Single award: no need for arrows, dots or autoplay
    if (items.length < 2) {
      if (controls) controls.hidden = true;
      goTo(0);
      return;
    }

    prev.addEventListener("click", function () { goTo(index - 1); restart(); });
    next.addEventListener("click", function () { goTo(index + 1); restart(); });

    // Pause while the visitor is interacting with the carousel
    root.addEventListener("mouseenter", function () { hovered = true; stop(); });
    root.addEventListener("mouseleave", function () { hovered = false; start(); });
    root.addEventListener("focusin", function () { hovered = true; stop(); });
    root.addEventListener("focusout", function (event) {
      if (!root.contains(event.relatedTarget)) { hovered = false; start(); }
    });

    // Arrow keys when the viewport is focused
    viewport.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { goTo(index + 1); restart(); }
      if (event.key === "ArrowLeft") { goTo(index - 1); restart(); }
    });

    // Swipe on touch screens
    let touchStartX = null;
    viewport.addEventListener("touchstart", function (event) {
      touchStartX = event.touches[0].clientX;
    }, { passive: true });
    viewport.addEventListener("touchend", function (event) {
      if (touchStartX === null) return;
      const dx = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(dx) > 40) {
        goTo(dx < 0 ? index + 1 : index - 1);
        restart();
      }
    }, { passive: true });

    goTo(0);
    start();
  }

  /* ---------- 4. Motion: reveal on scroll and counting numbers ---------- */

  function setupReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const selector = [
      ".section-head", ".card", ".region-card", ".country-grid li", ".branch-card",
      ".branch-places", ".support", ".mission", ".stat", ".founder-photo",
      ".founder-text", ".contact-panel", ".social-list li", ".carousel", ".split > *"
    ].join(",");

    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(function (target, i) {
      target.classList.add("reveal");
      target.style.transitionDelay = (i % 3) * 90 + "ms";
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    targets.forEach(function (target) { observer.observe(target); });
  }

  function setupCounters() {
    const numbers = Array.from(document.querySelectorAll("[data-count]"));
    if (numbers.length === 0 || reduceMotion || !("IntersectionObserver" in window)) return;

    function countUp(node) {
      const target = Number(node.dataset.count) || 0;
      const suffix = node.dataset.suffix || "";
      const duration = 1500;
      const startTime = performance.now();

      node.textContent = "0" + suffix;

      function frame(now) {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
        if (progress < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    numbers.forEach(function (node) { observer.observe(node); });
  }

  /* ---------- 5. Region cards and college filtering ---------- */

  // Region names in the order they first appear in colleges.js
  function getRegions() {
    const seen = [];
    collegeData.forEach(function (college) {
      if (college.region && seen.indexOf(college.region) === -1) seen.push(college.region);
    });
    return seen;
  }

  function countLabel(count) {
    return count + (count === 1 ? " college" : " colleges");
  }

  function renderRegionCards() {
    const grid = document.getElementById("region-grid");
    if (!grid) return;

    getRegions().forEach(function (region) {
      const count = collegeData.filter(function (c) { return c.region === region; }).length;

      const button = el("button", "region-card");
      button.type = "button";
      button.dataset.region = region;
      button.setAttribute("aria-label", region + ", " + countLabel(count) + ". Show colleges.");
      button.append(el("h3", null, region), el("p", "region-count", countLabel(count)));

      button.addEventListener("click", function () { showRegion(region); });
      grid.appendChild(button);
    });
  }

  function showRegion(region) {
    const regionView = document.getElementById("region-view");
    const collegeView = document.getElementById("college-view");
    const title = document.getElementById("region-title");
    const count = document.getElementById("region-count");
    const list = document.getElementById("college-list");
    if (!regionView || !collegeView || !title || !count || !list) return;

    const matches = collegeData.filter(function (c) { return c.region === region; });

    title.textContent = region;
    count.textContent = countLabel(matches.length) + " in this region";

    list.innerHTML = "";
    matches.forEach(function (college) {
      const item = el("li");
      item.append(el("span", "college-name", college.name), el("span", "college-location", college.location));
      list.appendChild(item);
    });

    regionView.hidden = true;
    collegeView.hidden = false;
    collegeView.scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" });
    title.focus({ preventScroll: true });
  }

  function showRegionSelection() {
    const regionView = document.getElementById("region-view");
    const collegeView = document.getElementById("college-view");
    if (!regionView || !collegeView) return;

    collegeView.hidden = true;
    regionView.hidden = false;

    const firstCard = regionView.querySelector(".region-card");
    if (firstCard) firstCard.focus({ preventScroll: true });
  }

  function setupColleges() {
    const total = document.getElementById("total-colleges");
    if (total) total.textContent = collegeData.length;

    renderRegionCards();

    const back = document.getElementById("back-to-regions");
    if (back) back.addEventListener("click", showRegionSelection);
  }

  /* ---------- Footer ---------- */

  function setYear() {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------- Start ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    renderWhatsAppLinks();
    renderPhones();
    renderMainBranch();
    renderBranchPlaces();
    renderSocial();
    setupNavigation();
    setupActiveLink();
    setupCarousel();
    setupColleges();
    setupReveal();
    setupCounters();
    setYear();
  });
})();
