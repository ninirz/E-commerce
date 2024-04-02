/* import React from 'react'
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'
import { BotonDropdown } from '../Botones/BotonDropdown';
import './NavBar.css';
    
    export default function Navbar() {
      return (
        <header>
      <Link to="/">
        <img className='imgNav' src='https://i.pinimg.com/736x/4f/f6/b4/4ff6b454783d2a4570d995195cbe00ed.jpg' />
      </Link>
      <nav>
        <NavLink to="/condition/nuevo" className="botonLibro">Libros Nuevos</NavLink>
        <NavLink to="/condition/usado" className="botonLibro">Libros Usados</NavLink>
        <NavLink><BotonDropdown /></NavLink>
        <NavLink to="/Cart" className="carrito"><CartWidget /></NavLink>

      </nav>
    </header>
  );
} */
import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavLink to="/">Book Store</NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/category/Romance" className="nav-link">Romance</NavLink>
            <NavLink to="/category/Biografia" className="nav-link">Biography</NavLink>
            <NavLink to="/category/Thriller" className="nav-link">Fiction</NavLink>
            <NavLink to="/category/Fantasia" className="nav-link">Fantasy</NavLink>
          </Nav>
          <Nav>
            {/* Agregar el icono de carrito */}
            <Nav.Link href="/cart" className="nav-link">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
