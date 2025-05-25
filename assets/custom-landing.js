//products grid display
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

  //grid layover creation
  const card = document.querySelector(".card");
  document.querySelectorAll(".clickable").forEach((el, index) => {
    el.addEventListener("click", () => {
      console.log(data.products.slice(0, 6));

      const product = data.products[index];
      card.innerHTML = `
        <div class="close">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="top-card">
          <img
            src="${product.images[0].src}"
            alt="${product.title}"
          />
          <div class="top-right">
            <span id="prod-title">${product.title}</span>
            <span id="prod-price">${product.variants[0].price} €</span>
            ${product.body_html}
          </div>
        </div>
        <div class="middle-card">
          <div class="colors">Color</div>
          <div class="color-btns">
              <button style="border-left: 7px solid ${product.options[1].values[0]} !important;">${product.options[1].values[0]}</button>
              <button style="border-left: 7px solid ${product.options[1].values[1]} !important;">${product.options[1].values[1]}</button>
          </div>

          <div class="sizes">Size</div>
          <select name="Choose your size" class="size-btn" onfocus='this.size=3;'>
              <option style="text-align: left !important;" disabled selected hidden>Choose your size</option>
              <option id="${product.options[0].values[0]}">${product.options[0].values[0]}</option>
              <option id="${product.options[0].values[1]}">${product.options[0].values[1]}</option>
              <option id="${product.options[0].values[2]}">${product.options[0].values[2]}</option>
              <option id="${product.options[0].values[3]}">${product.options[0].values[3]}</option>
          </select>
      </div>
      `;
      document.querySelector(".fa-xmark").addEventListener("click", close);
      document.querySelector(".product-details").style.display = "block";
      document.querySelector(".grey-bg").style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  function close() {
    document.querySelector(".product-details").style.display = "none";
    document.querySelector(".grey-bg").style.display = "none";
    document.body.style.overflow = "auto";
  }
});
