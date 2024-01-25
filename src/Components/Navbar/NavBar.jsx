import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Hombre">Hombre</Nav.Link>
            <Nav.Link href="#Mujer">Mujer</Nav.Link>
            <Nav.Link href="#Kids">Kids</Nav.Link>
            <Nav.Link href="#price"><CardWidget price={2}/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default NavBar;