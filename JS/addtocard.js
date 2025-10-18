const cartContainer = document.getElementById("cartContainer");

document.addEventListener("DOMContentLoaded", () => {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartData.length === 0) {
    addtocarddetail.innerHTML = "<h2>No items in cart 😕</h2>";
    return;
  }

  // Show cart items
  cartContainer.innerHTML = cartData.map((item) => `
    <div class="cart_item">
      <img src="${item.image}" width="100" alt="">
      <h3>${item.title}</h3>
      <p>Price: $${item.price}</p>
      <p>Category: ${item.category}</p>
    </div>
    <hr>
  `).join("");
});
