// document.addEventListener("DOMContentLoaded", async () => {
//   const container = document.getElementById("custom-products");
//   const response = await fetch("/products.json");
//   const data = await response.json();

//   const html = data.products.map(product => `
//     <div class="product-card">
//       <img src="${product.images[0].src}" alt="${product.title}" />
//       <h3>${product.title}</h3>
//       <p>${product.variants[0].price} USD</p>
//     </div>
//   `).join("");

//   container.innerHTML = html;
// });
