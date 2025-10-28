  const fakeStoreApiUrl = `https://fakestoreapi.com/products`;
  const product_container = document.getElementById("product_container");
  const signalProductDetail = document.getElementById("productDetail");
  document.addEventListener("DOMContentLoaded", async () => {
    try {
  const product_carts = await fetch(`${fakeStoreApiUrl}`);
  const product_data = await product_carts.json()
  // console.log(product_data);
  
  product_data.map((value) =>{
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
  </div>`;
  const cardClick = document.querySelectorAll(".card_item");
  cardClick.forEach((carts)=>{
    carts.addEventListener("click", async (e)=>{
        e.preventDefault();
      const cartId = carts.getAttribute("data-id")
      // console.log(cartId);
      window.location.href = `/HTML/product_detail.html?id=${cartId}`
    })
  })

  })
    } catch (error) {
      console.error(error);
      return error;
    }
  });
// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const product_cards = await fetch(`${url}`);
//     const cards_data = await product_cards.json();
//     console.log(cards_data);

//     //show cards-data
//     cards_data.map((value) => {
//       product_container.innerHTML += `<div class="card_item" data-id="${value.id}">
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
//     });
//     const cardClick = document.querySelectorAll(".card_item");

//     cardClick.forEach((cards) => {
//       cards.addEventListener("click", async (e) => {
//         e.preventDefault();
//         const cardId = cards.getAttribute("data-id");
//         console.log(cardId);
//         window.location.href = `/HTML/product_detail.html?id=${cardId}`;
//       });
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const updateproducturl = await fetch(`${url}/{id}`);
//     const upbdatedata = await updateproducturl.json();
//     console.log(upbdatedata);
//   } catch (error) {
//     console.error(error);
//   }
// });
// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const allcards = await fetch(`https://fakestoreapi.com/carts`);
//     const allcards_data = await allcards.json();
//     console.log(allcards_data);

//     allcards_data.map((item) =>{
//       allcarts.innerHTML += `<div class="card-body">
//     <h5 class="card-title">${item.date}</h5>
//     <h5 class="card-title">${item.id}</h5>
//     <h5 class="card-title">${item.products[0].productId}</h5>
//     <h5 class="card-title">${item.products[1].quantity}</h5>

// </div>`
//     })
//   } catch (error) {}
// });
// // document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const product_data = await fetch(`${url}`);
//     const data = await product_data.json();
//     // console.log(data);
//     data.map((value) => {
//       prouduct_container.innerHTML += `<div class="card-item" data-id="${value.id}">
//   <img src="${value.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">$ ${value.price}</h5>
//     <h5 class="card-title">${value.category}</h5>
//     <p class="card-text">${value.description}</p>
//     <p class="card_text_second">${value.title}</p>
//     <div class = "cards_btn">
//     <a href="#" class="btn btn-primary">Add to Card</a>
//     <a href="#" class="btn btn-primary">Buy Now</a>
//     </div>
//     <div class = "rating_count">
//     <p>Rating: ${value.rating.rate}</p>
//     <p>Orders: ${value.rating.count}</p>
//     </div>
//   </div>
//   </div>`;
// })
// const productsCard = document.querySelectorAll(".card-item");
// // console.log(productsCard);

// productsCard.forEach(card => {
//   card.addEventListener("click" , (e)=>{
//     e.preventDefault();
//     console.log(productsCard);

//         const cardId = card.getAttribute("data-id")
//       window.location.href = `./HTML/product_detail.html?id=${cardId}`
//         console.log(cardId);

//   })
// });

//   } catch (error) {
//     console.error(error);
//   }
// });
