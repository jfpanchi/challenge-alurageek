import { productServices } from "../services/product-service.js";

const inputSearch = document.querySelector("#search");
const titleSearch = document.querySelector("#search-title");
const btnSearchmobil = document.querySelector(".search--movil");
titleSearch.style.display = "none";

let onViewSearch = false;

btnSearchmobil.addEventListener("click", (event)=> {
    const componentSearch = document.querySelector(".search");
    const componentLogo = document.querySelector(".logo");
    const componentLogin = document.querySelector(".nav__login");


    if(onViewSearch){
        componentLogo.style.display = 'block';
        componentLogin.style.display = 'block';
        componentSearch.style.display = 'none';
    } else {
        componentSearch.style.display = 'flex';
        inputSearch.style.width = '100%';
        componentLogo.style.display = 'none';
        componentLogin.style.display = 'none';
    }
    onViewSearch = !onViewSearch;
})

inputSearch.addEventListener("keyup", (event) => {
  clearTable();
  if (event.target.value.length > 0) {
    titleSearch.style.display = "";
    getSearchProducts();
  } else {
    titleSearch.style.display = "none";
  }
});

const CreateItemTable = (imagen, titulo, precio, id) => {
  const linea = document.createElement("div");
  linea.className = "products__item";
  const contenido = `
    
        <img class="item__img" src="${imagen}" alt="">
        <h3 class="item__title">${titulo}</h3>
        <p class="item__price">$ ${precio}</p>
        <a classs="item__link" href="product.html?id=${id}">Ver Producto</a>
    `;
  linea.innerHTML = contenido;
  return linea;
};

const table = document.querySelector("#products");

const getSearchProducts = async () => {
  try {
    const valueSearch = inputSearch.value.toLocaleUpperCase();
    const listProducts = await productServices.toListProducts();

    listProducts
      .filter((producto) =>
        producto.titulo.toLocaleUpperCase().includes(valueSearch)
      )
      .forEach(({ imagen, titulo, precio, id }) => {
        const newLine = CreateItemTable(imagen, titulo, precio, id);
        table.appendChild(newLine);
      });
  } catch (error) {
    console.log(error);
  }
};

const clearTable = () => {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
};
