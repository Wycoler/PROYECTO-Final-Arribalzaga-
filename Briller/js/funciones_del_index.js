document.addEventListener("DOMContentLoaded", () => {

    var productosContainer = document.querySelector("#productos-container");
  
    
    fetch("https://dummyjson.com/products?limit=20")
      .then((response) => response.json())
      .then((data) => {
        var productos = data.products;
  
        productosContainer.innerHTML = "";
  
        productos.forEach((product) => {
          const cardDiv = document.createElement("div");
          cardDiv.className = "col-md-4";
  
          cardDiv.innerHTML = `
            <div class="card mt-3">
              <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: cover;">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text fw-bold"></p>
                <button class="btn btn-success mt-auto">Agregar</button>
              </div>
            </div>
          `;
  
          const botonAgregar = cardDiv.querySelector("button");
          botonAgregar.addEventListener("click", () => {
            agregarAlCarrito(product);
          });
  
          productosContainer.appendChild(cardDiv);
        });
      })
      .catch((error) => console.log("Error de conexión", error));
  }
);
  
  function agregarAlCarrito(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} fue agregado al carrito correctamente!`);
   }
  
 

  
  
  