import { productServices } from "../services/product-service.js";

const CreateItemTable = (imagen,titulo, precio, id) => {
    const linea = document.createElement("div");
    linea.className = 'products__item';
    const contenido = `
    
        <img class="item__img" src="${imagen}" alt="">
        <h3 class="item__title">${titulo}</h3>
        <p class="item__price">$ ${precio}</p>
        <a classs="item__link" href="#">Ver Producto</a>
    `;
    linea.innerHTML = contenido;
    return linea;
  };
  
  const table = document.querySelector("#products");



const getProducts = async () => {
    try {
      const url = new URL(window.location);
      const categoria = url.searchParams.get("categoria");
      const textCategoria = document.querySelector('#category');
      
      const listProducts = await productServices.toListProducts();
    
      if(categoria == null){
        listProducts.forEach(({ imagen, titulo, precio, id }) => {
          const newLine = CreateItemTable(imagen, titulo, precio, id);
          table.appendChild(newLine);
        });
      }

      textCategoria.textContent = categoria.toLocaleUpperCase();
      listProducts.filter(producto => producto.categoria === categoria)
      .forEach(({ imagen, titulo, precio, id }) => {
        const newLine = CreateItemTable(imagen, titulo, precio, id);
        table.appendChild(newLine);
      });
  
      
    } catch (error) {
      console.log(error);
      
    }
  };
  
getProducts();