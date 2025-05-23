document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementsByClassName("row")[0];
  const response = await fetch("/products.json");
  const data = await response.json();
let images = document.getElementsByid("img1");
  const html = data.products.map(product => `
    <div class="col">
      <img src="${product.images[0].src}" alt="${product.title}" />
    </div>
  `).join("");

  container.innerHTML = html;
});
