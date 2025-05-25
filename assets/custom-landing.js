//products grid display
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementsByClassName("row")[0];
  const response = await fetch("/products.json");
  const data = await response.json();
  let i = 0;

  
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
  const tcard = document.querySelector(".top");
  const bcard = document.querySelector(".bottom");
  document.querySelectorAll(".clickable").forEach((el, index) => {
    el.addEventListener("click", () => {
      console.log(data.products.slice(0, 6));

      const product = data.products[index];
      tcard.innerHTML = `
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
        <button class="cbtn" onclick="changeBtnColor()"
          style="border-left: 7px solid ${product.options[1].values[1]} !important;"
        >
          ${product.options[1].values[1]}
        </button>
      </div>
      `

      document.querySelector(".fa-xmark").addEventListener("click", close);
      document.querySelector(".product-details").style.display = "block";
      document.querySelector(".grey-bg").style.display = "block";
      document.body.style.overflow = "hidden";

    });
  });


  const dropdown = document.querySelector(".custom-dropdown");
  const selected = dropdown.querySelector(".selected");
  const placeholder = dropdown.querySelector(".placeholder");
  const options = dropdown.querySelectorAll(".dropdown-options li");

  selected.addEventListener("click", () => {
         dropdown.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      placeholder.textContent = option.textContent;
      dropdown.classList.remove("open");
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });

  const colorBtns = document.querySelectorAll(".cbtn");
  
  const items = Array.from(document.getElementsByTagName("button"));
items.forEach( ( button, index ) =>
    {
        button.addEventListener("click", () =>
        {
            if(index===1||index===2)
            console.log(`You clicked on button index ${index}`);
            
        });
    });
  function changeBtnColor(){
    colorBtns[0].style.backgroundColor="#000";
    colorBtns[0].style.color="#fff";
  }
  function close() {
    document.querySelector(".product-details").style.display = "none";
    document.querySelector(".grey-bg").style.display = "none";
    document.body.style.overflow = "auto";
  }
});
