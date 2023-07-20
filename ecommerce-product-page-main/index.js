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

const cartItems = [];

const emptyText = document.querySelector(".empty-text");
const cartDisplay = document.querySelector(".cart-display");
const cartDisplayLine = document.querySelector(".cart-display-line");
const cartIcon = document.querySelector(".cart");

const itemImage = document.querySelector(".item-image");
const itemName = document.querySelector(".item-name");
const itemQuantity = document.querySelector(".item-quantity");
const itemPrice = document.querySelector(".item-price");
const itemTotal = document.querySelector(".item-total");
const itemDelete = document.querySelector(".item-delete");

cartIcon.addEventListener("click", () => {
  if (cartItems.length === 0) {
    emptyText.style.display = "flex";
  } else {
    emptyText.style.display = "none";
    const cartItemsList = document.querySelector(".cart-items-container");
    // cartItemsList.innerHTML = "";

    cartItems.forEach((item) => {
      itemImage.src = item.image;
      itemImage.alt = item.name;

      itemName.textContent = item.name;

      itemQuantity.textContent = item.quantity;

      itemPrice.textContent = item.price.currency + item.price.value;

      itemTotal.textContent = calculateTotal();

      itemDelete.src = "images/icon-delete.svg";

      cartItemsList.appendChild(itemImage);
      cartItemsList.appendChild(itemName);

      cartItemsList.appendChild(itemPrice);
      cartItemsList.appendChild(itemQuantity);
      cartItemsList.appendChild(itemTotal);
      cartItemsList.appendChild(itemDelete);
    });
  }
  cartDisplay.classList.toggle("cart-display-open");
  cartDisplayLine.classList.toggle("cart-display-line-open");
});

// Add to cart button function

function calculateTotal() {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price.value * Number(quantity.innerHTML);
  });
  return "$" + total;
}

const addToCartButton = document.querySelector(".add-to-cart-button");

addToCartButton.addEventListener("click", () => {
  cartItems.push({
    image: (src = "images/image-product-1.jpg"),
    name: "Fall Limited Edition Sneakers",
    price: {
      currency: "$",
      value: 125.0,
    },
    quantity: "x" + quantity.innerHTML,
  });
});

console.log(cartItems);

// plus and minus function

const quantity = document.querySelector(".quantity");
const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");

plusButton.addEventListener("click", () => {
  quantity.innerHTML++;
});

minusButton.addEventListener("click", () => {
  if (quantity.innerHTML > 1) {
    quantity.innerHTML--;
  }
});
