  const fakeStoreApiUrl = `https://fakestoreapi.com/products`;
  const product_container = document.getElementById("product_container");
  const signalProductDetail = document.getElementById("productDetail");

  document.addEventListener("DOMContentLoaded" ,async () => {
    try {
      
      const productCarts = await fetch(`${fakeStoreApiUrl}`);
      const productData = await productCarts.json();
      console.log(productData);

      productData.map((value)=>{
        product_container.innerHTML += `<div class="card_item" data-id="${value.id}">
     <div class="cardsBody">
     <img src="${value.image}" alt="">
   <p>$ ${value.price}</p>
   <p>${value.category}</p>
   <div class ="rating">
   <p>Rating ${value.rating.rate}</p>
   <p>Order ${value.rating.count}</p>
   </div>
     </div>
   </div>`

   const cardClick = document.querySelectorAll(".card_item")
   cardClick.forEach((carts)=>{
    carts.addEventListener("click" , async () => {
     const cartsId = carts.getAttribute("data-id");
     console.log(cartsId);
      window.location.href = `HTML/product_detail.html?id=${cartsId}`
    })
   })
      })
    } catch (error) {
      console.error(error.message);
      return error
      
    }
  })
  // document.addEventListener("DOMContentLoaded", async () => {
  //   try {
  // const product_carts = await fetch(`${fakeStoreApiUrl}`);
  // const product_data = await product_carts.json()
  // // console.log(product_data);
  
  // product_data.map((value) =>{
  //   product_container.innerHTML += `<div class="card_item" data-id="${value.id}">
  //   <div class="cardsBody">
  //   <img src="${value.image}" alt="">
  // <p>$ ${value.price}</p>
  // <p>${value.category}</p>
  // <div class ="rating">
  // <p>Rating ${value.rating.rate}</p>
  // <p>Order ${value.rating.count}</p>
  // </div>
  //   </div>
  // </div>`;
  // const cardClick = document.querySelectorAll(".card_item");
  // cardClick.forEach((carts)=>{
  //   carts.addEventListener("click", async (e)=>{
  //       e.preventDefault();
  //     const cartId = carts.getAttribute("data-id")
  //     // console.log(cartId);
  //     window.location.href = `/HTML/product_detail.html?id=${cartId}`
  //   })
  // })

  // })
  //   } catch (error) {
  //     console.error(error);
  //     return error;
  //   }
  // });

