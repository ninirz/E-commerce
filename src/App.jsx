import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Item/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './Components/Item/ItemDetailContainer';
import { CartProvider } from './Components/Cart/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Cart/Checkout'

function App() {


  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/category/:genre' element={<ItemListContainer />} />
        <Route path='/cart' element={ <Cart /> }/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
