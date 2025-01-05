import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';

const Header=()=> {
  return (
    <header>
        <Navbar className="navbar-style" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                <Image className='logo-img-style' src='images/logo.jpg' alt='VTU' roundedCircle/>
                <h6 className='logo-text-style'>Visvesvaraya Technological University, Bangalore</h6>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
                <NavDropdown title="Academic" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Admission</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Circulars & Notifications</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Certificate Issued</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Examinations" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Examination Guidelines</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Examination Appilication</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Results</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="VTU Departements" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Electronics & Communication Engineering</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Civil Engineering</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Computer Science Engineering</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Information Technology</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Electric & Electronics Engineering</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Login as Admin</NavDropdown.Item>
                    
                </NavDropdown>
                </Nav> 
                </Navbar.Collapse>
            </Container>
        
            

        </Navbar>
    
    </header>
  )
}

export default Header
