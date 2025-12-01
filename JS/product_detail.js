  const singalProductUrl = `https://fakestoreapi.com/products`;
  const singalProductCarts = document.getElementById("product_detail");

  document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    // console.log(productId);
    try {
      if (productId) {
        
        const singalCarts = await fetch(`${singalProductUrl}/${productId}`);
        const cartsData = await singalCarts.json();
        // console.log(cartsData);
        singalProductCarts.innerHTML = `<div class="singal_product_detail carts-id = ${cartsData.id}">
        <img src="${cartsData.image}" class="card-img-top" alt="...">
        <hr>
        <div class="card-body">
        <h5 class="card-title">Price =${cartsData.price}</h5>
        <h5 class="card-title">${cartsData.category}</h5>
        <p class="card-text">S${cartsData.description}</p>
        <h5>Title</h5>
        <p class="card-text">S${cartsData.title}</p>
        <div class ="rating_detail">
        <p>Rating ${cartsData.rating.rate}</p>
        <p>Order ${cartsData.rating.count}</p>
        </div>
        <div class = "product_btn">
        <button id="addtocart">Add to Cart</button>
        <button id = "buyNow">buy Now</button>
        </div>
      </div>
      </div>`;
      const addtoCart = document.getElementById("addtocart");
      addtoCart.addEventListener("click", () => {
        try {
          const currentUser = JSON.parse(localStorage.getItem("currentUser"));
          if (currentUser) {
            let cartdetail = JSON.parse(localStorage.getItem("cart")) || [];
            cartdetail.push(cartsData);
            console.log(cartdetail);
            
            localStorage.setItem("cart", JSON.stringify(cartdetail));
          } else {
            window.location.href = `login.html`;
          }
        } catch (error) {
          console.error(error);
        }
      });
    }
    } catch (error) {
      console.error(error);
    }
  });

// document.addEventListener("DOMContentLoaded", async () => {
//   const params = new URLSearchParams(window.location.search);
//   const productId = params.get("id");
//   console.log(productId);
//   if (productId) {
//     try {
//       const product_data = await fetch(`${singalProductUrl}/${productId}`);
//       const productObj = await product_data.json();
//       console.log(productObj);

//       productDetail.innerHTML = `<div class="singal_product_detail carts-id = ${productObj.id}">
//       <img src="${productObj.image}" class="card-img-top" alt="...">
//       <hr>
//       <div class="card-body">
//       <h5 class="card-title">Price =${productObj.price}</h5>
//       <h5 class="card-title">${productObj.category}</h5>
//       <p class="card-text">S${productObj.description}</p>
//       <h5>Title</h5>
//       <p class="card-text">S${productObj.title}</p>
//       <div class ="rating_detail">
//       <p>Rating ${productObj.rating.rate}</p>
//       <p>Order ${productObj.rating.count}</p>
//       </div>
//       <div class = "product_btn">
//       <button id="addtocart">Add to Cart</button>
//       <button id = "buyNow">buy Now</button>
//       </div>
//     </div>
//     </div>`;

//     const addtocart = document.getElementById("addtocart");
//     addtocart.addEventListener("click" ,async (e) => {
//       e.preventDefault();
//       const userId = localStorage.getItem("userId")
//       if (!userId) {
//         alert("Please register or login first!")
//         window.location.href = `/HTML/register.html`
//         return
//       }
// try {
// const cartBody  =
// { userId:1 , products: [{ productId: productObj.id ,  quantity: 1}] };
// const response = await fetch('https://fakestoreapi.com/carts', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(cartBody)
// })
// const cartData = await response.json()
// console.log(cartData);

// } catch (error) {
//   console.error(error)
//   return error
// }
//     })
//     } catch (error) {
//       console.error(error);
//     }
//   }
// });
//       window.location.href = "/HTML/addtocart.html";
