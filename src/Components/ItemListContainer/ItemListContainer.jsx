<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosJson from "../../db/dbProducts.json";

function asyMock(categoryId){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(categoryId == undefined) resolve(productosJson);
      else {
        const productosF = productosJson.filter((item) => {
          return item.category === categoryId;
        })
        resolve(productosF);
      }
    }, 200)
  })
}

function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    asyMock(categoryId).then((res) => setProductos(res)); 
  }, [categoryId]); 

  return (
    <div>
      <h1>Productos</h1>
      <div>
        {productos.map((item) => ( // Aquí debes utilizar productos en lugar de productosJson
          <div key={item.id}> {/* Asegúrate de que key esté dentro del bucle de mapeo */}
            <h2>{item.name}</h2>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
=======
import React from 'react'

function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
    </div>
  )
}

export default ItemListContainer
>>>>>>> 592a95975c4054401e95f125686b33d24b70bd89
