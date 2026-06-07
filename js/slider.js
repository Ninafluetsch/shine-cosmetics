document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector("#impressionen .wp-block-gallery");
  if (!gallery) return;

  const slides = Array.from(gallery.querySelectorAll(".wp-block-image"));
  if (slides.length === 0) return;

  const visibleCount = 3;
  const gap = 16; // px, gleich wie gap im CSS
  let current = 0;

  // Gallery als Slider-Container vorbereiten
  gallery.style.position = "relative";
  gallery.style.overflow = "hidden";

  // Slide-Breite berechnen
  function getSlideWidth() {
    return (gallery.offsetWidth - gap * (visibleCount - 1)) / visibleCount;
  }

  // Slides positionieren
  function positionSlides() {
    const slideWidth = getSlideWidth();
    slides.forEach((slide, i) => {
      slide.style.position = "absolute";
      slide.style.top = "0";
      slide.style.width = slideWidth + "px";
      slide.style.transition = "transform 0.4s ease";
      const offset = (i - current) * (slideWidth + gap);
      slide.style.transform = `translateX(${offset}px)`;
    });
    gallery.style.height = slides[0].offsetHeight + "px";
  }

  function goTo(index) {
    current = ((index % slides.length) + slides.length) % slides.length;
    positionSlides();
    updateDots();
  }

  // Pfeile erstellen – direkt im gallery Container
  const prevBtn = document.createElement("button");
  prevBtn.className = "slider-btn prev";
  prevBtn.innerHTML = "<";
  prevBtn.setAttribute("aria-label", "Vorheriges Bild");

  const nextBtn = document.createElement("button");
  nextBtn.className = "slider-btn next";
  nextBtn.innerHTML = ">";
  nextBtn.setAttribute("aria-label", "Nächstes Bild");

  gallery.appendChild(prevBtn);
  gallery.appendChild(nextBtn);

  // Dots erstellen
  const dotsWrapper = document.createElement("div");
  dotsWrapper.className = "slider-dots";
  const dotCount = slides.length - visibleCount + 1;
  const dots = Array.from({ length: dotCount }, (_, i) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Position ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrapper.appendChild(dot);
    return dot;
  });
  gallery.parentNode.insertBefore(dotsWrapper, gallery.nextSibling);

  function updateDots() {
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  // Touch-Support
  let touchStartX = 0;
  gallery.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });
  gallery.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goTo(current + 1) : goTo(current - 1);
    }
  });

  // Initial + Resize
  positionSlides();
  window.addEventListener("resize", positionSlides);
});
