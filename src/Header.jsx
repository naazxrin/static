import React from 'react';
import { Nav,Navbar,NavDropdown,Container } from 'react-bootstrap';
import'./App.css'
const Header = () => {
  return (
    <header className=" container header d-flex flex-row justify-content-between  ">
      <h1 id='movie' className='text-dark fw-bolder'>Explore</h1>


    <Navbar expand="lg" className="bg-body-tertiary bg-dark">
      <Container className='d-flex flex-row justify-content-between'>
        <Navbar.Brand href="#home" className='text-primary'>TRAVEL THE WORLD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto  ">
            <Nav.Link id='ho' className='text-warning' href="#home">Home</Nav.Link>
            <Nav.Link id='ho' href="#link" className='text-warning'>Details</Nav.Link>
            <NavDropdown  className=' bg-warning' title="List" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1" className='text-light'>Action</NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.2">
                Places
              </NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.3">Activities</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Guide details
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header;
