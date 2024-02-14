<<<<<<< HEAD
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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardWidget from './Components/CardWidget/CardWidget'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/Navbar/NavBar'

function App() {
  return (
    <div className='main'>

      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a Sour'/>
    </div>
  )
}

export default App
>>>>>>> 592a95975c4054401e95f125686b33d24b70bd89
