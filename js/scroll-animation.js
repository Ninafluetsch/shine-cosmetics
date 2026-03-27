document.addEventListener("DOMContentLoaded", function () {
  const svgContainer = document.querySelector(".svg-scroll");
  if (!svgContainer) return;

  const paths = svgContainer.querySelectorAll("svg path");

  paths.forEach(function (path) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });

  const startScroll = 200; // px, ab wann Animation startet
  const endScroll = 600; // px, wann sie endet

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    let progress = (scrollY - startScroll) / (endScroll - startScroll);
    progress = Math.max(0, Math.min(progress, 1)); // Begrenzen auf 0–1

    paths.forEach(function (path) {
      const length = path.getTotalLength();
      const drawLength = length * progress;
      path.style.strokeDashoffset = length - drawLength;
    });
  });
});
