
let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const cartButton = document.querySelector(
  '[aria-label="Shopping cart"]'
);

// Add-to-cart functionality
document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;

    const originalText = button.textContent;
    button.textContent = "Added ✓";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 1000);
  });
});

// Show current cart count
cartButton.addEventListener("click", () => {
  alert(`You have ${cartCount} item(s) in your cart.`);
});

// Newsletter demo
const newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", event => {
  event.preventDefault();

  const emailInput = newsletterForm.querySelector(
    'input[type="email"]'
  );

  if (emailInput.checkValidity()) {
    alert(
      "Thank you for your interest! " +
      "This demo is not connected to a newsletter service."
    );

    newsletterForm.reset();
  }
});
