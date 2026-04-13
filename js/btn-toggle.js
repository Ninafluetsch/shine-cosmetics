/**
 * Angebot Toggle Script
 *
 * 1. Liest alle .angebot-item Elemente (Posts) und deren data-title
 * 2. Sucht den passenden Button im Page-Content via Titel-Matching
 * 3. Verschiebt jeden Post direkt nach seinen Button im DOM
 * 4. Toggle bei Klick mit Slide+Fade Animation
 */

document.addEventListener("DOMContentLoaded", function () {
  const angebotItems = document.querySelectorAll(".angebot-item");
  const buttons = document.querySelectorAll(
    ".container .wp-block-button__link, .container .wp-block-buttons a",
  );

  angebotItems.forEach(function (item) {
    const itemTitle = (item.dataset.title || "").trim().toLowerCase();

    // Passenden Button suchen (nur exakte Übereinstimmung)
    let matchedBtn = null;
    let matchedBtnWrapper = null;

    buttons.forEach(function (btn) {
      const btnText = btn.textContent.trim().toLowerCase();
      if (btnText === itemTitle) {
        matchedBtn = btn;
        const parent = btn.closest(".wp-block-buttons") || btn.parentElement;
        matchedBtnWrapper = parent;
      }
    });

    if (!matchedBtn || !matchedBtnWrapper) return;

    // Post direkt nach dem Button-Wrapper einfügen
    matchedBtnWrapper.insertAdjacentElement("afterend", item);

    // Toggle Click
    matchedBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const isOpen = item.style.display !== "none";

      if (isOpen) {
        // Schliessen
        item.style.maxHeight = item.scrollHeight + "px";
        item.style.overflow = "hidden";
        item.style.transition = "max-height 0.4s ease, opacity 0.4s ease";
        item.style.opacity = "1";

        requestAnimationFrame(() => {
          item.style.maxHeight = "0";
          item.style.opacity = "0";
        });

        item.addEventListener("transitionend", function handler() {
          item.style.display = "none";
          item.style.maxHeight = "";
          item.style.opacity = "";
          item.style.overflow = "";
          item.removeEventListener("transitionend", handler);
        });

        matchedBtn.classList.remove("is-open");
      } else {
        // Öffnen
        item.style.display = "block";
        item.style.maxHeight = "0";
        item.style.overflow = "hidden";
        item.style.opacity = "0";
        item.style.transition = "max-height 0.4s ease, opacity 0.4s ease";

        requestAnimationFrame(() => {
          item.style.maxHeight = item.scrollHeight + "px";
          item.style.opacity = "1";
        });

        item.addEventListener("transitionend", function handler() {
          item.style.maxHeight = "";
          item.style.overflow = "";
          item.removeEventListener("transitionend", handler);
        });

        matchedBtn.classList.add("is-open");
      }
    });
  });
});
