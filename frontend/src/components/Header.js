import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import {Container, Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return (
      <header>
          <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
              <Container>
            <LinkContainer to="/">      {/*We changed all the href to LinkContainer to prevent page reload*/}
                <Navbar.Brand>joKart</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto"> {/*ml auto moves the links to the right*/}
                <LinkContainer to="/cart">  
                    <Nav.Link><i class="fas fa-shopping-cart px-1" aria-hidden="true"></i>Cart </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">      
                    <Nav.Link> <i class="fa fa-user px-1" aria-hidden="true"></i>Sign In</Nav.Link>
                </LinkContainer>    
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
      </header>
    )
}

export default Header
