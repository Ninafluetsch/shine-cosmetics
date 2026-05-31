document.addEventListener("DOMContentLoaded", function () {
  const svgContainer = document.querySelector(".svg-scroll-background");
  if (!svgContainer) return;

  const paths = svgContainer.querySelectorAll("svg path");
  const scrollDuration = 400; // Dauer für jeden Pfad (endScroll - startScroll)

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
});
