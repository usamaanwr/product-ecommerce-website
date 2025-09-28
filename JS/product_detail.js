const detailurl = `https://fakestoreapi.com/products`;
const productDetail = document.getElementById("product_detail");
document.addEventListener("DOMContentLoaded", async () =>{
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    console.log(productId);
    if (productId) {
        try {
            const product_data = await fetch(`${detailurl}/${productId}`);
            const detail_data = await product_data.json()
            console.log(detail_data);
            
            productDetail.innerHTML = `<div class="product_detail"">
  <img src="${detail_data.image}" class="card-img-top" alt="...">
  <hr>
  <div class="card-body">
    <h5 class="card-title">Price =${detail_data.price}</h5>
    <h5 class="card-title">${detail_data.category}</h5>
    <p class="card-text">S${detail_data.description}</p>
    <h5>Title</h5>
    <p class="card-text">S${detail_data.title}</p>
    <div class ="rating_detail">
<p>Rating ${detail_data.rating.rate}</p>
<p>Order ${detail_data.rating.count}</p>
</div>
<div class = "product_btn">
 <button id="addcard" onclick="savecard()">Add to Card</button>
<button>buy Now</button>
</div>
  </div>
</div>`
        } catch (error) {
            console.error(error);
            
        }
    }
})

