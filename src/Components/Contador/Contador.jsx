import React, { useState, useEffect } from 'react';
import './Contador.css';

const Counter = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1);

    const increase = () => {
        if (counter < stock) {
            setCounter(prevCounter => prevCounter + 1);
        }
    };

    const decrease = () => {
        if (counter > 1) {
            setCounter(prevCounter => prevCounter - 1);
        }
    };

    const addToCart = () => {
        if (onAdd) {
            onAdd(counter);
        }
    };

    useEffect(() => {
        if (stock === 0) {
            setCounter(0);
        } else {
            setCounter(1);
        }
    }, [stock]);

    return (
        <div className="counter-container">
            <div className="increase-decrease">
                <button className='borderRadius' onClick={decrease} disabled={counter <= 1}> - </button>
                <h2 className='counter'>{counter}</h2>
                <button className='borderRadius' onClick={increase} disabled={counter >= stock}> + </button>
            </div>
            <div className="add-to-cart">
                <button className='borderRadius' onClick={addToCart} disabled={stock === 0}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Counter;
