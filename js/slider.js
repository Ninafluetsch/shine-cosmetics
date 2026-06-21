document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector("#impressionen .wp-block-gallery");
  if (!gallery) return;

  const slides = Array.from(gallery.querySelectorAll(".wp-block-image"));
  if (slides.length === 0) return;

  const visibleCount = 3; // Anzahl gleichzeitig sichtbarer Bilder
  const gap = 16; // px, muss mit dem gap im CSS übereinstimmen
  let current = 0; // Index des aktuell ersten sichtbaren Bildes

  // Gallery als Slider-Container vorbereiten
  gallery.style.position = "relative";
  gallery.style.overflow = "hidden";

  // Breite eines einzelnen Slides berechnen (abhängig von Container-Breite)
  function getSlideWidth() {
    return (gallery.offsetWidth - gap * (visibleCount - 1)) / visibleCount;
  }

  // Alle Slides an ihre aktuelle Position schieben
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

  // Springt zu einem bestimmten Slide-Index (mit Wrap-Around)
  function goTo(index) {
    current = ((index % slides.length) + slides.length) % slides.length;
    positionSlides();
    updateDots();
  }

  // Pfeil-Buttons erstellen und in Gallery einfügen
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

  // Dots (Positions-Anzeige) erstellen
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

  // Aktiven Dot markieren
  function updateDots() {
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  // Initiale Positionierung
  positionSlides();
});
