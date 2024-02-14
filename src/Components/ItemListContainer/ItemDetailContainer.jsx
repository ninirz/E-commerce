import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productosJson from "../../db/dbProducts.json";
import './ItemDetailContainer.css'; // Importa el archivo CSS

function asyncMock(idProducto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoEncontrado = productosJson.filter((producto) => {
                return producto.id === parseInt(idProducto);
            });
            resolve(productoEncontrado);
        }, 300);
    });
}

const ItemDetailContainer = () => {
    const { idProducto } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        asyncMock(idProducto).then((res) => setProducto(res[0]));
    }, [idProducto]);

    return (
        <div>
            {producto && (
                <div className='w-4/5 md:w-96 m-auto text-center border-solid border-2 mt-5'>
                    <div className="product-container">
                        <img src="/1.png" alt="imagen del producto" className='product-image' />
                        <div className="product-description">
                            <h1 className='font-bold'>{producto.name}</h1>
                            <p>{producto.description}</p>
                            <p>Precio: S/. {producto.price}</p>
                            <p>Stock: {producto.stock}</p>
                            <div>
                                <p>Tallas disponibles: {producto.sizes.join(', ')}</p>
                                <p>Colores disponibles: {producto.colors.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;
