import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
function Header() {

  return (
    // <Container>
    //   <a>
    //     <img src="/assets/logo.png"  alt=""/>
    //   </a>
    //   <Menu>
    //       <a href= "#">Services</a>
    //       <a href="#">Services</a>
    //       <a href="#">Services</a>
    //   </Menu>

    //   <Search>
    //     <img src="/assets/logo.png" alt="" />
    //   </Search>




    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <a>
            <img src="/assets/logo.png" alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Menu>
              <a href="#">Services</a>
              <a href="#">Services</a>
              <a href="#">Services</a>
            </Menu>
          </Nav>
          <Form className="d-flex">
            <Nav.Link>LOGIN</Nav.Link>

            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    // </Container>


  )
}

export default Header
const Container1 = styled.div`
min-height: 60px;
position: fixed;
display : flex;
align-items: center;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
background: white;
`

const Menu = styled.div`
display: flex;
align-items: center;

a{
  font-weight:600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap !important;
  top: 0;
  left: 0;
  right: 0;
  color: #000; 
  font-family:  "Roboto";
  

}

`

const Search = styled.div`


`