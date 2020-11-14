import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return (
      <header>
          <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
              <Container>
            <Navbar.Brand href="/">joKart</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto"> {/*ml auto moves the links to the right*/}
                    <Nav.Link href="/cart"><i class="fas fa-shopping-cart px-1" aria-hidden="true"></i>Cart </Nav.Link>
                    <Nav.Link href="/login"> <i class="fa fa-user px-1" aria-hidden="true"></i>Sign In</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
          
          
      </header>
    )
}

export default Header
