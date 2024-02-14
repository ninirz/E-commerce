// ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosJson from "../../db/dbProducts.json";
import ItemList from './ItemList';

function asyncMock(categoryId){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(categoryId === undefined) resolve(productosJson);
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
    asyncMock(categoryId).then((res) => setProductos(res)); 
  }, [categoryId]);

  return (
    <div>
      <h1>Productos</h1>
      <section className='item-list-container'>
        <ItemList productos={productos}/>
      </section>
    </div>
  );
}

export default ItemListContainer;