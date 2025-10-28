const singalProductUrl = `https://fakestoreapi.com/products`;
const productDetail = document.getElementById("product_detail");
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  // console.log(productId);
  if (productId) {
    try {
      const product_data = await fetch(`${singalProductUrl}/${productId}`);
      const productObj = await product_data.json();
      console.log(productObj);

      productDetail.innerHTML = `<div class="singal_product_detail carts-id = ${productObj.id}">
      <img src="${productObj.image}" class="card-img-top" alt="...">
      <hr>
      <div class="card-body">
      <h5 class="card-title">Price =${productObj.price}</h5>
      <h5 class="card-title">${productObj.category}</h5>
      <p class="card-text">S${productObj.description}</p>
      <h5>Title</h5>
      <p class="card-text">S${productObj.title}</p>
      <div class ="rating_detail">
      <p>Rating ${productObj.rating.rate}</p>
      <p>Order ${productObj.rating.count}</p>
      </div>
      <div class = "product_btn">
      <button id="addtocart">Add to Cart</button>
      <button id = "buyNow">buy Now</button>
      </div>
    </div>
    </div>`;
    
    const addtocart = document.getElementById("addtocart");
    addtocart.addEventListener("click" ,async (e) => {
      e.preventDefault();
    if (productId) {
      
      window.location.href = `/HTML/addtocart.html`
    }
    })
    } catch (error) {
      console.error(error);
    }
  }
});
