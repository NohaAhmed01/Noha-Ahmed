//products grid display
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementsByClassName("row")[0];
  const response = await fetch("/products.json");
  const data = await response.json();
  let i = 0;
  // const colorBtns = document.querySelectorAll(".cbtn");
  
  //grid creation
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
      <img src="${product.images[0].src}" alt="${product.title}" />
      <div class="top-right">
        <span id="prod-title">${product.title}</span>
        <span id="prod-price">${product.variants[0].price} €</span>
        ${product.body_html}
      </div>
    </div>
     <div class="middle-card">
      <div class="colors">Color</div>
      <div class="color-btns">
        <button class="cbtn"
          style="border-left: 7px solid ${product.options[1].values[0]} !important;"
        >
          ${product.options[1].values[0]}
        </button>
        <button class="cbtn"
          style="border-left: 7px solid ${product.options[1].values[1]} !important;"
        >
          ${product.options[1].values[1]}
        </button>
      </div>

      <div class="sizes">Size</div>

      <div class="custom-dropdown">
        <div class="selected">
          <span class="placeholder">Choose your size</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <ul class="dropdown-options">
          <li>${product.options[0].values[0]}</li>
          <li>${product.options[0].values[1]}</li>
          <li>${product.options[0].values[2]}</li>
          <li>${product.options[0].values[3]}</li>
        </ul>
      </div>
    </div>
      `;
      document.querySelector(".fa-xmark").addEventListener("click", close);
      document.querySelector(".product-details").style.display = "block";
      document.querySelector(".grey-bg").style.display = "block";
      document.body.style.overflow = "hidden";
      // colorBtns[0].innerHTML=product.options[1].values[0];
      // colorBtns[1].innerHTML=product.options[1].values[1];
      // colorBtns.style.borderLeft="7px solid ${product.options[1].values[0]}"

    });
  });


 
 while(!dropdown);
  const dropdown = document.querySelector(".custom-dropdown");
  //const selected = dropdown.querySelector(".selected");
  const placeholder = dropdown.querySelector(".placeholder");
  const options = dropdown.querySelectorAll(".dropdown-options li");

  placeholder.addEventListener("click", () => {
          options.style.display="block";
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      placeholder.textContent = option.textContent;
     options.style.display="block";
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });

  function close() {
    document.querySelector(".product-details").style.display = "none";
    document.querySelector(".grey-bg").style.display = "none";
    document.body.style.overflow = "auto";
  }
});
