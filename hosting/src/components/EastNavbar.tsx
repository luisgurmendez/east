import React from 'react';
import styled from 'styled-components/macro';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useWindowScroll } from 'react-use';
import { Body } from './Typography';
import { Row } from './layouts';

interface NavbarProps { }

const EastNavbar: React.FC<NavbarProps> = ({ }) => {
  const scrolling = useWindowScroll();


  return (
    <Navbar className={scrolling.y !== 0 ? 'scrolled' : ''} collapseOnSelect expand="md" sticky="top" variant="light">
      <Navbar.Brand>
        <Nav.Link href="#home">
          <img
            src="/east.jpeg"
            width="200px"
            className="d-inline-block align-top"
            alt="east"
          />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home"><Body>Inicio</Body></Nav.Link>
          <Nav.Link href="#us">Nosotros</Nav.Link>
          <Nav.Link href="#services">Servicios</Nav.Link>
          <Nav.Link href="#clients">Clientes</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default EastNavbar

const Container = styled.div``



