document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnails img");

  let currentIndex = 0;
  let autoSlide = true;
  const intervalTime = 7000;

  function showImage(index) {
    thumbnails.forEach(t => t.classList.remove("active"));
    thumbnails[index].classList.add("active");
    mainImage.src = thumbnails[index].dataset.full;
    currentIndex = index;
  }

  // Click en miniaturas
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      autoSlide = false;
      showImage(index);
    });
  });

  // Rotación automática
  setInterval(() => {
    if (autoSlide && thumbnails.length > 1) {
      let next = (currentIndex + 1) % thumbnails.length;
      showImage(next);
    }
  }, intervalTime);

  // Inicial
  showImage(0);
});
