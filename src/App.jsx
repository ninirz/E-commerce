import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter> 
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        {/* Ruta dinamica */}
        <Route path="/categoria/:categoryId" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
