// Floating random effect
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-grid img");

  images.forEach(img => {
    const delay = Math.random() * 5;
    img.style.animationDelay = `${delay}s`;
  });

  // Smooth scroll for button
  const btn = document.querySelector(".scroll-btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#gallery").scrollIntoView({ behavior: "smooth" });
  });
});
