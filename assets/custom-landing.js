document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementsByClassName("row")[0];
  const response = await fetch("/products.json");
  const data = await response.json();

  const content = data.products
    .slice(0, 6)
    .map(
      (product) =>
        `<div class="col">
        <img src = "${product.images[0].src}" alt="${product.title}"/>
        <div class="clickable">+</div>
        </div>`
    )
    .join("");
    container.innerHTML = content;
});
