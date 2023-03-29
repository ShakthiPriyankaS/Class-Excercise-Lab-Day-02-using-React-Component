import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Nava() {
  return (
    <div>
    <Navbar bg="secondary" variant="dark">
      <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <ShoppingCartIcon/>
          <Nav className="me-auto">
             <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <NavDropdown title="Featured Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Boots</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Coolers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Straps
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nava