document.addEventListener("DOMContentLoaded", function () {
  const svgContainer = document.querySelector(".svg-scroll-background");
  if (!svgContainer) return;

  const paths = svgContainer.querySelectorAll("svg path");
  const scrollDuration = 550;

  paths.forEach(function (path, index) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Speichere die scroll-werte für jeden Pfad
    path.dataset.startScroll = 400 + index * scrollDuration;
    path.dataset.endScroll = 1000 + index * scrollDuration;
  });

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    paths.forEach(function (path) {
      const startScroll = parseInt(path.dataset.startScroll);
      const endScroll = parseInt(path.dataset.endScroll);

      let progress = (scrollY - startScroll) / (endScroll - startScroll);
      progress = Math.max(0, Math.min(progress, 1));

      const length = path.getTotalLength();
      const drawLength = length * progress;
      path.style.strokeDashoffset = length - drawLength;
    });
  });
  // ✅ NEU: Recalculate scroll positions basierend auf aktueller Content-Höhe
  function updateScrollPositions() {
    let currentScroll = 400; // Start-Position (gleich wie oben)
    const svgSectionIds = ["face", "body", "legs", "hand-feet"];

    svgSectionIds.forEach((sectionId) => {
      const path = document.getElementById(sectionId);
      const section = document.querySelector(
        `[data-svg-section="${sectionId}"]`,
      );

      if (path) {
        // Berechne die Höhe des Content-Blocks
        const height = section ? section.offsetHeight : 0;

        // ✅ Update die Scroll-Werte dynamisch
        path.dataset.startScroll = currentScroll;
        path.dataset.endScroll = currentScroll + scrollDuration;

        console.log(
          `📍 ${sectionId}: scroll ${currentScroll} - ${path.dataset.endScroll}, height: ${height}px`,
        );

        currentScroll = parseInt(path.dataset.endScroll) + height;
      }
    });
  }
});
