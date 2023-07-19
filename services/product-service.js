const toListProducts = () => {
  return fetch('http://localhost:3000/producto').then( (res)=> res.json())
};

const createProduct = (imagen, nombre, categoria, precio, descripcion) => {
   return fetch('http://localhost:3000/producto',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, titulo: nombre, categoria, precio, descripcion, id: uuid.v4()})
    })
}

const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: 'DELETE'
    })
}

const detailProduct = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then(resp => 
        resp.json()
    ) 
}

const updateProduct = (imagen, nombre, categoria, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
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