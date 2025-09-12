// static/js/script.js
document.addEventListener('DOMContentLoaded', () => {

  /* ===========================
     SLIDER / CARROUSEL (si existe)
     =========================== */
  (function initSlider() {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    if (!slidesContainer || slides.length === 0) return; // nada que hacer

    let index = 0;
    let intervalId = null;
    let autoSlide = true;
    const intervalTime = 6000;

    function showSlide(i) {
      if (slides.length === 0) return;
      slides.forEach(sl => sl.classList.remove('active'));
      index = (i + slides.length) % slides.length;
      slides[index].classList.add('active');
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    // Prev / Next (si existen botones - pueden no estar)
    document.querySelectorAll('.next').forEach(btn => btn.addEventListener('click', () => {
      showSlide(index + 1);
      pauseAuto(); // interacción manual pausa/reinicia según quieras
    }));
    document.querySelectorAll('.prev').forEach(btn => btn.addEventListener('click', () => {
      showSlide(index - 1);
      pauseAuto();
    }));

    // Si se hace click en cualquier slide, pausar auto (opcional)
    slides.forEach(s => s.addEventListener('click', () => pauseAuto()));

    function startAuto() {
      if (intervalId) return;
      intervalId = setInterval(() => {
        if (autoSlide && slides.length > 1) showSlide(index + 1);
      }, intervalTime);
    }
    function stopAuto() {
      autoSlide = false;
      if (intervalId) { clearInterval(intervalId); intervalId = null; }
    }
    function pauseAuto() {
      // decide: aquí paramos definitivamente el auto-slide tras interacción
      stopAuto();
    }

    // Inicializa
    showSlide(0);
    startAuto();

  })();


  /* ===========================
     FILTROS DE PROYECTOS (si existe)
     =========================== */
  (function initFilters() {
    const filterButtons = document.querySelectorAll(".filters button");
    const projectCards = document.querySelectorAll(".project-card");
    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        document.querySelector(".filters button.active")?.classList.remove("active");
        button.classList.add("active");
        const selected = button.dataset.filter;
        projectCards.forEach(card => {
          const tags = (card.dataset.tags || "").split(" ").filter(Boolean);
          card.style.display = (selected === "all" || tags.includes(selected)) ? "block" : "none";
        });
      });
    });
  })();


  /* ===========================
     REVEAL ANIMATIONS (si hay elementos)
     =========================== */
  (function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    // simple: al cargar marcamos visible
    reveals.forEach(el => el.classList.add('visible'));
    // (Si quieres, aquí podrías usar IntersectionObserver en vez de marcar todo visible de golpe)
  })();


  /* ===========================
     MENU HAMBURGUESA (si existe)
     =========================== */
  (function initMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (!menuToggle || !navLinks) return;
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  })();

}); // DOMContentLoaded
