document.addEventListener("DOMContentLoaded", function () {
  const svgContainer = document.querySelector(".svg-scroll-background");
  if (!svgContainer) return;

  const paths = svgContainer.querySelectorAll("svg path");

  paths.forEach(function (path) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });

  const startScroll = 50;
  const endScroll = 50 + 1500;

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    let progress = (scrollY - startScroll) / (endScroll - startScroll);
    progress = Math.max(0, Math.min(progress, 1));

    paths.forEach(function (path) {
      const length = path.getTotalLength();
      const drawLength = length * progress;
      path.style.strokeDashoffset = length - drawLength;
    });
  });
});
