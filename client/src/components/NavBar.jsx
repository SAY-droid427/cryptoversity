import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav } from 'react-bootstrap'; 


const NavbarItem=({title})=>{
    return (
        <Nav.Link>{title}</Nav.Link>
    )
}

const NavBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navStyle">
            <Container fluid>
            <Navbar.Brand>Cryptoversity</Navbar.Brand> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {["Login", "Market", "Exchange", "Tutorials", "Wallets"].map((item, index)=>(
                            <NavbarItem key={item+index} title={item} />
                        ))}                 
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar;
