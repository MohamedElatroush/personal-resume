import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <Navbar expand="lg" className="bg-dark" sticky="top">
      <Container>
        <Navbar.Brand style={{color: "white"}}>🚀 mhatem</Navbar.Brand>
          <Nav style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {/* <Nav.Link style={{color: "white", marginRight: "10px"}} onClick={() => scrollToSection('section1')}>About Me</Nav.Link> */}
            {/* <Nav.Link style={{color: "white", marginRight: "10px"}} onClick={() => scrollToSection('section3')}>Projects</Nav.Link> */}
          </Nav>
      </Container>
    </Navbar>
  )
}

export default Header