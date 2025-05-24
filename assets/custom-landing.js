document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementsByClassName("row")[0];
  const response = await fetch("/products.json");
  const data = await response.json();
  let i = 0;
  const content = data.products
    .slice(0, 6)
    .map(
      (product) =>
        `<div class="col">
          <div class="img-wrapper">
           <img src="${product.images[0].src}" alt="${product.title}" />
           <div class="clickable" id="clickable${i}">+</div>
          </div>
        </div>`
    )
    .join("");
  container.innerHTML = content;
  const card = document.querySelector(".card");
  document.querySelectorAll(".clickable").forEach((el, index) => {
    el.addEventListener("click", () => {
      console.log(data.products.slice(0, 6));

      const product = data.products[index];
      card.innerHTML=`
        <div class="top-card">
        <i class="fa-solid fa-xmark"></i>
          <img
            src="${product.images[0].src}"
            alt="${product.title}"
          />
          <div class="top-right">
            <span>${product.title}</span>
            <span>${product.variants[0].price} $</span>
            ${product.body_html}
          </div>
        </div>
      `;
      document.querySelector(".product-details").style.display="block";
    });
  });
});
