// Toto — Medical Donation Drive site
// Handles: scrollspy on the floating pill nav, copy-to-clipboard buttons, and
// a gentle fade-in as sections enter view.

(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll(".section, .footer"));
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".pill-tab"));

  function setActive(id) {
    tabs.forEach(function (tab) {
      tab.classList.toggle("active", tab.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );
    sections.forEach(function (section) { revealObserver.observe(section); });

    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (section) { spyObserver.observe(section); });
  } else {
    sections.forEach(function (section) { section.classList.add("in-view"); });
  }

  document.querySelectorAll("[data-copy-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var row = btn.closest(".copy-row");
      var valueEl = row ? row.querySelector("[data-copy-value]") : null;
      var value = valueEl ? valueEl.getAttribute("data-copy-value") : "";

      function showCopied() {
        var original = btn.textContent;
        btn.textContent = "Copied";
        btn.classList.add("copied");
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 1500);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(showCopied).catch(function () {
          window.prompt("Copy this value:", value);
        });
      } else {
        window.prompt("Copy this value:", value);
      }
    });
  });
})();
