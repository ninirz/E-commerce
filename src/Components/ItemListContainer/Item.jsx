import React from 'react';
import { Link } from 'react-router-dom'; // Agrega esta línea para importar Link
import './Item.css';

export default function Item({ producto }) {
  return (
    <div className="item-card">
      <img src="/1.png" alt={producto.name} />
      <h2>{producto.name}</h2>
      <p>{producto.description}</p>
      <h1>{producto.price}</h1>
      <Link to={`/categoria/${producto.category}/${producto.id}`}
        > Ver Producto </Link>
    </div>
  );
}
