import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Cart from './Components/CardWidget/Cart';
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter> 
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        {/* Ruta dinamica */}
        <Route path="/categoria/:categoryId" element={<ItemListContainer/>}/>
        <Route path="categoria/:categoryId/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
