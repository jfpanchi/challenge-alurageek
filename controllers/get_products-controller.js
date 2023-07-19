import { productServices } from "../services/product-service.js";

const CreateItemTable = (imagen,titulo, precio, id) => {
    const linea = document.createElement("div");
    linea.className = 'products__item';
    const contenido = `
    
        <img class="item__img" src="${imagen}" alt="">
        <h3 class="item__title">${titulo}</h3>
        <p class="item__price">$ ${precio}</p>
        <a classs="item__link" href="#">Ver Producto</a>
        <a classs="item__link" href="update-product.html?id=${id}">Editar</a>
        <button class="btn-delete" type="button" id=${id}>Eliminar</button>
    `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
      const id = btn.id;
      productServices
        .deleteProduct(id)
        .then((res) => {})
        .catch((err) => console.log(err));
    });
    return linea;
  };
  
  const table = document.querySelector("#products");



const getProducts = async () => {
    try {
      const listProducts = await productServices.toListProducts();
  
      listProducts.forEach(({ imagen, titulo, precio, id }) => {
        const newLine = CreateItemTable(imagen, titulo, precio, id);
        table.appendChild(newLine);
      });
      
    } catch (error) {
      console.log(error);
      
    }
  };
  
getProducts();