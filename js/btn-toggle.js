/**
 * Toggle-Angebote mit Slide- und Fade-Animation
 * Matched Posts mit Buttons und positioniert sie dahinter
 */

document.addEventListener("DOMContentLoaded", initializeOffers);

function initializeOffers() {
  const angebotItems = document.querySelectorAll(".angebot-item");
  const buttons = document.querySelectorAll(
    ".container .wp-block-button__link, .container .wp-block-buttons a",
  );

  angebotItems.forEach((item) => setupOffer(item, buttons));
}

function setupOffer(item, buttons) {
  const itemTitle = (item.dataset.title || "").trim().toLowerCase();
  const matchedButton = findMatchingButton(buttons, itemTitle);

  if (!matchedButton) return;

  hideHeading(item);
  repositionItem(item, matchedButton);
  setupToggleListener(matchedButton, item);
}

// Sucht den Button, dessen Text mit dem Titel des Angebots übereinstimmt
function findMatchingButton(buttons, itemTitle) {
  for (const btn of buttons) {
    if (btn.textContent.trim().toLowerCase() === itemTitle) {
      return btn;
    }
  }
  return null;
}

// titel verstecken, da er ja schon im Button steht
function hideHeading(item) {
  const heading = item.querySelector("h1, h2, h3, h4, h5, h6");
  if (heading) heading.style.display = "none";
}

// Positioniert das Angebot direkt hinter dem Button
function repositionItem(item, button) {
  const wrapper = button.closest(".wp-block-buttons") || button.parentElement;
  wrapper.insertAdjacentElement("afterend", item);
}

function setupToggleListener(button, item) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    item.style.display !== "none"
      ? closeItem(item, button)
      : openItem(item, button);
  });
}

// Animation: Item schließen
function closeItem(item, button) {
  item.style.maxHeight = item.scrollHeight + "px";
  item.style.overflow = "hidden";
  item.style.transition = "max-height 0.4s ease, opacity 0.4s ease";
  item.style.opacity = "1";

  requestAnimationFrame(() => {
    item.style.maxHeight = "0";
    item.style.opacity = "0";
  });

  item.addEventListener(
    "transitionend",
    function resetStyles() {
      item.style.display = "none";
      item.style.maxHeight = "";
      item.style.opacity = "";
      item.style.overflow = "";
    },
    { once: true },
  );

  button.classList.remove("is-active");
}

// Animation: Item öffnen
function openItem(item, button) {
  item.style.display = "block";
  item.style.maxHeight = "0";
  item.style.overflow = "hidden";
  item.style.opacity = "0";
  item.style.transition = "max-height 0.4s ease, opacity 0.4s ease";

  requestAnimationFrame(() => {
    item.style.maxHeight = item.scrollHeight + "px";
    item.style.opacity = "1";
  });

  item.addEventListener(
    "transitionend",
    function resetStyles() {
      item.style.maxHeight = "";
      item.style.overflow = "";
    },
    { once: true },
  );

  button.classList.add("is-active");
}
