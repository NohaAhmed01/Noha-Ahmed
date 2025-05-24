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
  document.querySelectorAll(".clickable").forEach((el) => {
    el.addEventListener("click", () => {
      card.innerHTML=`
        <div class="top-card">
          <img
            src="${data.products[i++].images[0].src}"
            alt="{data.products[i++].title}"
          />
          <div class="top-right">
            <span>{data.products[i++].title}</span>
            <span>price to add</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, unde.</p>
          </div>
        </div>
      `;
      document.querySelector(".product-details").style.display="block";
    });
  });
});
