import React from 'react'
import { BsCartFill } from "react-icons/bs";

function CardWidget(props) {
  return (
    <div className='container'>
        <button>
        <BsCartFill/> {props.price}
        </button> 
    </div>
  )
}

export default CardWidget