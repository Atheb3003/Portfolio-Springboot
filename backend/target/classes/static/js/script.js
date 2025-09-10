// Slider
const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  index = (i + slides.length) % slides.length;
  slides[index].classList.add('active');
  document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}
document.querySelector('.next').addEventListener('click', () => showSlide(index + 1));
document.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
setInterval(() => showSlide(index + 1), 6000);

// Filtros
const filterButtons = document.querySelectorAll(".filters button");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filters button.active")?.classList.remove("active");
    button.classList.add("active");
    const selected = button.dataset.filter;
    projectCards.forEach(card => {
      const tags = card.dataset.tags.split(" ");
      card.style.display = (selected === "all" || tags.includes(selected)) ? "block" : "none";
    });
  });
});

// Animación al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => el.classList.add('visible'));
});

// Menu hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
