document.addEventListener("DOMContentLoaded", function () {
  const angebotSection = document.getElementById("angebot");
  const containers = angebotSection.querySelectorAll(".container");

  containers.forEach((container) => {
    const children = Array.from(container.children);
    let currentBlock = null;

    children.forEach((child) => {
      if (child.tagName === "H1") {
        const number = parseInt(child.textContent.trim());
        if (!isNaN(number)) {
          currentBlock = document.createElement("div");
          currentBlock.className = "block-wrapper";
          currentBlock.classList.add(
            number % 2 === 0 ? "angebot-even" : "angebot-odd",
          );
          container.insertBefore(currentBlock, child);

          // ← NEU: data-svg-section vom nächsten angebot-item übernehmen
          const nextItem = Array.from(container.children).find((el) =>
            el.classList.contains("angebot-item"),
          );
          if (nextItem) {
            currentBlock.dataset.svgSection = nextItem.dataset.svgSection;
          }
        }
      }

      if (child.classList && child.classList.contains("angebot-item")) {
        container.insertBefore(child, currentBlock.nextSibling);
        return;
      }

      if (currentBlock && child !== currentBlock) {
        currentBlock.appendChild(child);
      }
    });
  });
});
