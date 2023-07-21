const toListProducts = () => {
  return fetch('https://alurageek-backend-jsonserver.vercel.app/producto').then( (res)=> res.json())
};

const createProduct = (imagen, nombre, categoria, precio, descripcion) => {
   return fetch('https://alurageek-backend-jsonserver.vercel.app/producto',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, titulo: nombre, categoria, precio, descripcion, id: uuid.v4()})
    })
}

const deleteProduct = (id) => {
    return fetch(`https://alurageek-backend-jsonserver.vercel.app/producto/${id}`,{
        method: 'DELETE',
    }).then((res) => res.json())
    .catch((error) => console.log(error));
}

const detailProduct = (id) => {
    return fetch(`https://alurageek-backend-jsonserver.vercel.app/producto/${id}`).then(resp => 
        resp.json()
    ) 
}

const updateProduct = (imagen, nombre, categoria, precio, descripcion, id) => {
    return fetch(`https://alurageek-backend-jsonserver.vercel.app/producto/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen,titulo: nombre, categoria, precio, descripcion,id})
    })
}

export const productServices = {
    toListProducts,
    createProduct,
    deleteProduct,
    detailProduct,
    updateProduct
};