import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import Welcome from './Welcome.jsx';


const NavbarItem=({title})=>{
    return (
        <Nav.Link>
            <Link to={`/${title.toLowerCase()}`} className="nav-link-style">
            {title}
            </Link>            
        </Nav.Link>
    )
}

const NavBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navStyle">
            <Container fluid>
            <Navbar.Brand><Link to={"/"} className="nav-link-style">Cryptoversity</Link></Navbar.Brand> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {["Login", "Homepage","Transactions", "Rankings", "News"].map((item, index)=>(
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
