/**
 * Navigation-Menü Toggle und Fokusmanagement
 */

(function () {
  const siteNavigation = document.getElementById("site-navigation");
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = siteNavigation?.getElementsByTagName("ul")[0];

  if (!siteNavigation || !menuToggle || !menu) return;

  menu.classList.add("nav-menu");

  // Toggle-Button für Mobile-Menü
  menuToggle.addEventListener("click", toggleMenu);

  // Menü schließen beim Klick außerhalb
  document.addEventListener("click", closeMenuOnOutside);

  // Fokus- und Touch-Handler für Menü-Links
  const links = menu.getElementsByTagName("a");
  const submenuLinks = menu.querySelectorAll(
    ".menu-item-has-children > a, .page_item_has_children > a",
  );

  links.forEach((link) => {
    link.addEventListener("focus", handleLinkFocus, true);
    link.addEventListener("blur", handleLinkFocus, true);
  });

  submenuLinks.forEach((link) => {
    link.addEventListener("touchstart", handleLinkFocus, false);
  });

  function toggleMenu() {
    siteNavigation.classList.toggle("toggled");
    const isOpen = siteNavigation.classList.contains("toggled");
    menuToggle.setAttribute("aria-expanded", isOpen);
  }

  function closeMenuOnOutside(event) {
    const isClickInside =
      siteNavigation.contains(event.target) ||
      menuToggle.contains(event.target);

    if (!isClickInside && siteNavigation.classList.contains("toggled")) {
      siteNavigation.classList.remove("toggled");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  }

  function handleLinkFocus(event) {
    if (event.type === "focus" || event.type === "blur") {
      let element = this;
      while (!element.classList.contains("nav-menu")) {
        if (element.tagName.toLowerCase() === "li") {
          element.classList.toggle("focus");
        }
        element = element.parentNode;
      }
    }

    if (event.type === "touchstart") {
      event.preventDefault();
      const menuItem = this.parentNode;
      Array.from(menuItem.parentNode.children).forEach((child) => {
        child.classList.toggle("focus", child === menuItem);
      });
    }
  }
})();
