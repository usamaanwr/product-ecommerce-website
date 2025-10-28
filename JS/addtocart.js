const cartContainer = document.getElementById("cartContainer");

document.addEventListener("DOMContentLoaded" ,async (e) => {
  try {
    
     
     const cartDatashow  = await fetch(`https://fakestoreapi.com/carts`,{
       method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(
    
  )
     })
const cartsDetailshow = await cartDatashow.json()
console.log(cartsDetailshow );
  } catch (error) {
    console.error(error);
    return error
  }
})