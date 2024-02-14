import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';
<<<<<<< HEAD
import { Link, NavLink} from 'react-router-dom';
=======
>>>>>>> 592a95975c4054401e95f125686b33d24b70bd89

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
<<<<<<< HEAD
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink  to="/categoria/mujeres">Mujeres</NavLink></Nav.Link>
            <Nav.Link><NavLink  to="/categoria/hombres">Hombres</NavLink></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
=======
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
>>>>>>> 592a95975c4054401e95f125686b33d24b70bd89
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
<<<<<<< HEAD
            </NavDropdown> */}
=======
            </NavDropdown>
>>>>>>> 592a95975c4054401e95f125686b33d24b70bd89
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand className="d-flex justify-content-center" href="#home">
          Sour
        </Navbar.Brand>

        <Nav className="ml-auto">
          <CardWidget count={2}/>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
