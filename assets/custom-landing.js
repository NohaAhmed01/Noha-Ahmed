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
  document.querySelectorAll(".clickable").forEach((el) => {
  el.addEventListener("click", () => {
    const upperGrid= data.products
    .slice(0, 6)
    .map(
      (product) =>
        `   
      <div class="card">
        <div class="top-card">
          <img
            src=""
            alt=""
          />
          <div class="top-right">
            <span>Green trench coat</span>
            <span>980.00$</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, unde.</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");
    document.querySelectorAll(".product-details").innerHTML = upperGrid;
  });
});
});
