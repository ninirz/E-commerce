import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../main';
import './Checkout.css';
import { FaArrowRight } from "react-icons/fa";

const Checkout = () => {
    const { cart, totalPrice } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const [orderId, setOrderId] = useState("");

    const buy = (data) => {
        const order = {
            customer: data,
            products: cart,
            total: totalPrice(),
        };
        console.log(order);
        const ordersRef = collection(db, "orders");
        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id);
            });
    };

    if (orderId) {
        return (
            <div>
                <h1>Thank you for your purchase!</h1>
¿                <p className='order-id' >Here is your order code: {orderId}</p>
                <br /><br /><br /><br />
            </div>
        );
    }

    return (
        <div>
            <h1>Complete this form before checkout:</h1>
            <form onSubmit={handleSubmit(buy)}>
                <input className='form-cell color1 bradius' type="text" placeholder='Enter your name' {...register("name")} />
                <input className='form-cell color2 bradius' type="email" placeholder='Enter your email' {...register("email")} />
                <input className='form-cell color3 bradius' type="phone" placeholder='Enter your phone number' {...register("phone")} />

                <button className='buy-button' type='submit'>Go to Checkout</button>
            </form>
        </div>
    );
}

export default Checkout;
