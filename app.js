const url = `https://fakestoreapi.com/products`;
const prouduct_container = document.getElementById("prouduct_container");
const productDetail = document.getElementById("productDetail");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const product_data = await fetch(`${url}`);
    const data = await product_data.json();
    console.log(data);
    data.map((value) => {
      prouduct_container.innerHTML += `<div class="card" data-id="${value.id}">
  <img src="${value.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">$ ${value.price}</h5>
    <h5 class="card-title">${value.category}</h5>
    <p class="card-text">${value.description}</p>
    <p class="card_text_second">${value.title}</p>
    <div class = "cards_btn">
    <a href="#" class="btn btn-primary">Add to Card</a>
    <a href="#" class="btn btn-primary">Buy Now</a>
    </div>
    <div class = "rating_count">
    <p>Rating: ${value.rating.rate}</p>
    <p>Orders: ${value.rating.count}</p>
    </div>
  </div>
  </div>`;
});
 try {
     prouduct_container.addEventListener("click", async (e) => {
  e.preventDefault();
if (prouduct_container === value.id) {
  
  productDetail.innerHTML+=   window.location.href = `singleproduct.html?id=${value.id}`;
}

  
});
 } catch (error) {
  console.error(error);
  
 }

  } catch (error) {
    console.error(error);
  }
});

// async function singleproduct() {
//   const productsingal = await fetch(`${url}/1`)
//   const productdata = await productsingal.json();


//   console.log(productdata);
  
// }

// singleproduct();