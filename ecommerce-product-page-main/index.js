const navMenu = document.querySelector(".mobile-navigation");
const navHamburger = document.querySelector(".hamburger");
const navClose = document.querySelector(".close-nav");
const navOverlay = document.querySelector(".nav-overlay");

// mobile menu

navHamburger.addEventListener("click", () => {
  navMenu.classList.add("mobile-navigation-open");
  navOverlay.classList.add("nav-overlay-open");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("mobile-navigation-open");
  navOverlay.classList.remove("nav-overlay-open");
});

//carousel functions

function goLeft() {
  document.querySelector(".image-carousel-container").scrollLeft -= 250;
}

function goRight() {
  document.querySelector(".image-carousel-container").scrollLeft += 250;
}

// cart display functions

const cartDisplay = document.querySelector(".cart-display");
const cartDisplayLine = document.querySelector(".cart-display-line");
const cartIcon = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
  cartDisplay.classList.toggle("cart-display-open");
  cartDisplayLine.classList.toggle("cart-display-line-open");
});
