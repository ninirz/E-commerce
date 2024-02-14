// ItemList.js
import React from 'react';
import Item from './Item';
import './Item.css'; 

export default function ItemList({ productos }) {
  return (
    <div className="item-list">
      {productos.map(producto => (
        <Item producto={producto} key={producto.id} /> 
      ))}
    </div>
  );
}