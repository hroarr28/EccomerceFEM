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

const checkoutButton = document.querySelector(".checkout-button");
const cartItemsContainer = document.querySelector(".cart-items-container");
const cartItem = document.querySelector(".cart-item");
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
    cartItemsContainer.style.display = "none";
    checkoutButton.style.display = "none";
  } else {
    emptyText.style.display = "none";
    cartItemsContainer.style.display = "flex";
    checkoutButton.style.display = "flex";

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

      //   cartItemsList.appendChild(itemImage);
      //   cartItemsList.appendChild(itemName);

      //   cartItemsList.appendChild(itemPrice);
      //   cartItemsList.appendChild(itemQuantity);
      //   cartItemsList.appendChild(itemTotal);
      //   cartItemsList.appendChild(itemDelete);
    });
  }
  cartDisplay.classList.toggle("cart-display-open");
  cartDisplayLine.classList.toggle("cart-display-line-open");
});

// Add to cart button function

function calculateTotal() {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price.value * String(item.quantity).replace("x", "");
  });
  return "$" + total;
}

const addToCartButton = document.querySelector(".add-to-cart-button");
const quantityTally = 0;
addToCartButton.addEventListener("click", () => {
  cartItems.push({
    id: 1,
    image: (src = "images/image-product-1.jpg"),
    name: "Fall Limited Edition Sneakers",
    price: {
      currency: "$",
      value: 125.0,
    },
    quantity: "x" + quantity.innerHTML,
  });
  quantity.innerHTML = 0;

  // quantity on cart display

  const headerQuantity = document.querySelector(".header-quantity");

  let totalQuantity = 0;
  cartItems.forEach((item) => {
    totalQuantity = String(item.quantity);
    totalQuantity = totalQuantity.replace("x", "");
  });
  headerQuantity.textContent = totalQuantity;
});

// cart delete function

const cartDelete = document.querySelector(".item-delete");
const headerQuantity = document.querySelector(".header-quantity");

cartDelete.addEventListener("click", () => {
  const cartItemIndex = cartItems.findIndex((item) => item.id === 1);
  if (cartItemIndex > -1) {
    cartItems.splice(cartItemIndex, 1);
  }

  // Calculate the total quantity after deleting the item
  let totalQuantity = 0;
  cartItems.forEach((item) => {
    totalQuantity += parseInt(item.quantity.replace("x", ""));
  });

  // Update the header quantity with the new total
  headerQuantity.textContent = totalQuantity;

  // Hide the cart display if there are no items left
  if (cartItems.length === 0) {
    cartItemsContainer.style.display = "none";
    checkoutButton.style.display = "none";
    headerQuantity.style.display = "none";
  }
});

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
