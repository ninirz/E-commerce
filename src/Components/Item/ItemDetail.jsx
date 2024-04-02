import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';
import './ItemDetail.css'

const ItemDetail = ({ libro, cantidadAgregada, handleOnAdd }) => {
    return (
        <div className='detail'>
            <Card className='cardDetail' style={{ width: '33rem' }}>
                <Card.Body>
                    <Card.Title className='titulo'><span lang="en">{libro.title}</span></Card.Title>
                    <Card.Text className='center'><span lang="en">Author: {libro.author}</span></Card.Text>
                    <Card.Text><span lang="en">{libro.description}</span></Card.Text>
                    <Card.Text><span lang="en">Genre: {libro.genre}</span></Card.Text>
                    <Card.Text><span lang="en">Price: ${libro.price}</span></Card.Text>
                    <Card.Text><span lang="en">Stock: {libro.stock}</span></Card.Text>
                    {cantidadAgregada > 0 ? (
                        <Link to='/cart' className='terminarCompra'>Confirm order</Link>
                    ) : (
                        <Contador stock={libro.stock} onAdd={handleOnAdd} />
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemDetail;
