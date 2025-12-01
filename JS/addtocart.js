const cartContainer =document.getElementById("cartContainer");
document.addEventListener("click" ,async () => {
    let cartdetail = JSON.parse(localStorage.getItem("cart"))||[];
    console.log(cartdetail);
    
    if (cartdetail.length === 0) {
        cartContainer.innerHTML = "<h2>No item In cart</h2>"
        return
    }
    
    cartContainer.innerHTML = ""; 
    
    cartdetail.forEach(item => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" width="100">
                <h3>${item.title}</h3>
                <p>Price: $${item.price}</p>
                <p>Product ID: ${item.id}</p>
            </div>
            <hr>
        `;
    }); 
})