document.addEventListener("DOMContentLoaded", function () {
  const angebotSection = document.getElementById("angebot");
  const containers = angebotSection.querySelectorAll(".container");

  containers.forEach((container) => {
    const children = Array.from(container.children);
    let currentBlock = null;
    let blockNumber = null;

    children.forEach((child) => {
      if (child.tagName === "H1") {
        const number = parseInt(child.textContent.trim());

        if (!isNaN(number)) {
          // Neuer Block für diese Zahl
          currentBlock = document.createElement("div");
          currentBlock.className = "block-wrapper";
          blockNumber = number;

          // Klasse basierend auf gerade/ungerade
          if (number % 2 === 0) {
            currentBlock.classList.add("angebot-even");
          } else {
            currentBlock.classList.add("angebot-odd");
          }

          container.insertBefore(currentBlock, child);
        }
      }

      // Füge Element zum aktuellen Block hinzu
      if (currentBlock && child !== currentBlock) {
        currentBlock.appendChild(child);
      }
    });
  });
});
