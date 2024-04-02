import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';
import { ImBook } from "react-icons/im";
import { TbTrashX } from "react-icons/tb";

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    let totalPrice = 0;

    if (cart.length === 0) {
        return (
            <div >
                <h1 className='emptyCart'>There are no items in the cart</h1>
            </div>
        );
    }
    
    return (
        <div>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => {
                        const { id, title, price, quantity} = item;
                        const itemTotalPrice = price * quantity;
                        totalPrice = totalPrice + itemTotalPrice;
                        return (
                            <tr key={id}>
                                <td>
                                    <div className='buyProduct'>
                                        <h3><u>{title}</u></h3>
                                    </div>
                                </td>
                                <td>{quantity}</td>
                                <td>${itemTotalPrice}</td>
                                <td>
                                    <button className='delete-button' onClick={() => removeItem(id)}>
                                        <TbTrashX size={25} className='black' />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="total-container">
                <h2>Total: ${totalPrice}</h2>
                <button className="clear-button" onClick={() => clearCart()}>Clear Cart</button>
                <Link to='/checkout'><button className="checkout-button">Continue to Checkout</button></Link>
            </div>
            <br /> <br /><br /><br /><br />
        </div>
    );
}

export default Cart;
