function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      // Hide all first
      products.forEach((product) => {
        product.style.display = "none";
      });

      // Show only products that match the filter
      products.forEach((product) => {
        if (product.classList.contains(filter)) {
          product.style.display = "block";
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".recent-slider .slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 100;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${offset}%)`;
    });
  }

  // Initialize
  showSlide(currentIndex);

  // Auto-slide every 3s
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 3000);
});
