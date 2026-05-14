document.addEventListener("DOMContentLoaded", function () {
  const svgContainer = document.querySelector(".svg-scroll");
  if (!svgContainer) return;

  const paths = svgContainer.querySelectorAll("svg path");

  paths.forEach(function (path) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });

  const startScroll = 0; // px, ab wann Animation
  const endScroll = 1000; // px, wann sie endet

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

  const svgBg = document.querySelector(".svg-bg");
  if (!svgBg) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Starte  Animation
          startSvgAnimation();
          observer.disconnect();
        }
      });
    },
    {
      root: null,
      threshold: 0.1, // 10% sichtbar
    },
  );

  observer.observe(svgBg);
});
