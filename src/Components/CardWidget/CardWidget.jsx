import React from 'react';
import { IoMdCart } from 'react-icons/io';
import './CardWidget.css'; // Asegúrate de tener tus estilos CSS personalizados

function CardWidget({ count }) {
  return (
    <div className='card-widget'>
      <button>
        <div className='cart-icon'>
          <IoMdCart size={20}/>
          {count > 0 && <span className='badge'>{count}</span>}
        </div>
      </button>
    </div>
  );
}

export default CardWidget;
