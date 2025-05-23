document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementsByClassName("row")[0];
  const response = await fetch("/products.json");
  const data = await response.json();

  const html = data.products.slice(3,9).map(product => `
    <div class="col">
      <img src="${product.images[0].src}" alt="${product.title}" />
    </div>
  `).join("");

  container.innerHTML = html;
});
