import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import CardWidget from './Components/CardWidget/CardWidget'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='main'>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a Pinker'/>
    </div>
  )
}

export default App
