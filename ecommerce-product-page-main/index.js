const navMenu = document.querySelector(".mobile-navigation");
const navHamburger = document.querySelector(".hamburger");
const navClose = document.querySelector(".close-nav");
const navOverlay = document.querySelector(".nav-overlay");

navHamburger.addEventListener("click", () => {
  navMenu.classList.add("mobile-navigation-open");
  navOverlay.classList.add("nav-overlay-open");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("mobile-navigation-open");
  navOverlay.classList.remove("nav-overlay-open");
});

function goLeft() {
  document.querySelector(".image-carousel-container").scrollLeft -= 250;
}

function goRight() {
  document.querySelector(".image-carousel-container").scrollLeft += 250;
}
