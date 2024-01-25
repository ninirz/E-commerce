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
