import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo1.png';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
export const NavBar = () => {

  //Define state variables for active link and scroll status
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // useEffect hook to handle scroll events
  useEffect(() => {
    const onScroll = () => {
      // Check if the vertical scroll position is greater than 50 pixels
      if (window.scrollY > 50) {
        setScrolled(true); // If scrolled more than 50 pixels, set 'scrolled' state to true
      } else {
        setScrolled(false); // If not scrolled more than 50 pixels, set 'scrolled' state to false
      }
    }

    // Add event listener for scroll event
    window.addEventListener("scroll", onScroll);
    
    // Cleanup function to remove event listener when component unmounts
    return () => window.removeEventListener("scroll", onScroll);
  }, []) // Empty dependency array means this effect runs only once after initial render
  
  // Function to update active link state
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Ripipsa" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="#registroproyecto" className={activeLink === 'registroproyecto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('registroproyecto')}>Registrar Proyecto</Nav.Link>
            {/* Mantenemos el enlace para NotasPage */}
            <Nav.Link as={Link} to="/notas" className={activeLink === 'notas' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('notas')}>Notas</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <HashLink to='#connect'>
              <button className="vvd"><span>Log Out</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
