import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { Column, Row } from './layouts';
import { Body } from './Typography';
import { colors } from '../utils/colors';
import { faInstagram, faLinkedin, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useIsMobile } from '../hooks/useIsMobile';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavbarOpen } from '../state/NavbarMenuOpenContext';

interface NavProps { }

const Nav: React.FC<NavProps> = ({ }) => {

  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobileNavbar />
  }

  return <DesktopNavBar />
}


export default Nav

const Container = styled.div`
  padding: 16px 32px;
  background-color: white;
  position: sticky;
  top:0px;
  z-index: 10000;
`

const FullWidthRow = styled(Row)`
  width: 100%;
  max-width: 100%;
`

const LinksRow = styled(FullWidthRow)`
  padding: 8px;
  justify-content: center;
`

interface LinkToSectionProps {
  to: string;
  onClick?: () => void;
}

const LinkToSection: React.FC<LinkToSectionProps> = ({ to, onClick, children }) => {

  return (
    <LinkToSectionContainer onClick={onClick} href={to}>
      <Body><strong>{children}</strong></Body>
    </LinkToSectionContainer>
  )
}


const LinkToSectionContainer = styled.a`
  padding: 0px 20px;
  text-transform: uppercase;

`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 12px;
`


const DesktopNavBar: React.FC = () => {

  return (
    <Container>
      <FullWidthRow>
        <img
          src="/east.jpeg"
          width="150px"
          alt="east"
        />
        <Row style={{ flex: 1, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <LinkToSection to="#home">
            Inicio
          </LinkToSection>
          <LinkToSection to="#us">
            Nosotros
      </LinkToSection>
          <LinkToSection to="#services">
            Servicios
      </LinkToSection>
          <LinkToSection to="#clients">
            Clientes
      </LinkToSection>
          <LinkToSection to="#contacts">
            Contacto
      </LinkToSection>
        </Row>
        <Row style={{ alignItems: 'center' }}>
          <a href="https://www.instagram.com/eastcomunicacion/" target="_blank">
            <StyledIcon color={colors.blue1} size="lg" icon={faInstagram} />
          </a>
          <a href="https://www.instagram.com/eastcomunicacion/" target="_blank">
            <StyledIcon color={colors.blue1} size="lg" icon={faLinkedinIn} />
          </a>
          <a href="https://wa.me/59893825333" target="_blank">
            <StyledIcon color={colors.blue1} size="lg" icon={faWhatsapp} />
          </a>

        </Row>
      </FullWidthRow>
    </Container>
  )
}

const MobileNavbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useNavbarOpen();

  const handleOpen = () => {
    setIsMenuOpen(true)
  }

  const handleClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <Container>
      <FullWidthRow>
        <LinkToSection to="#home">
          <img
            src="/east.jpeg"
            width="150px"
            alt="east"
          />
        </LinkToSection>
        <Row style={{ alignItems: 'center' }}>
          {!isMenuOpen ?
            <StyledIcon color={colors.blue1} size="lg" icon={faBars} onClick={handleOpen} />
            :
            <StyledIcon color={colors.blue1} size="lg" icon={faTimes} onClick={handleClose} />
          }
        </Row>
      </FullWidthRow>
      <MobileMenu open={isMenuOpen}>

      </MobileMenu>

    </Container>
  )
}

interface MobileMenuProps {
  open: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open }) => {

  const [_, setMenuOpen] = useNavbarOpen();

  const handleNavItemClick = () => {
    setMenuOpen(false);
  }

  return (
    <MobileMenuContainer open={open}>
      <LinkToSection onClick={handleNavItemClick} to="#home">
        Inicio
      </LinkToSection>
      <LinkToSection onClick={handleNavItemClick} to="#us">
        Nosotros
      </LinkToSection>
      <LinkToSection onClick={handleNavItemClick} to="#services">
        Servicios
      </LinkToSection>
      <LinkToSection onClick={handleNavItemClick} to="#clients">
        Clientes
      </LinkToSection>
      <LinkToSection onClick={handleNavItemClick} to="#contact">
        Contacto
      </LinkToSection>
    </MobileMenuContainer>
  )
}

const MobileMenuContainer = styled.div<MobileMenuProps>`
  max-height: 0vh;
  overflow: hidden;
  padding: 0 16px;
  margin-top: 4px;
  transition: all 1s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;

${props => props.open && `
  max-height: 100vh;
  padding: 16px;
`}
`

export const NavbarBackdrop: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useNavbarOpen();

  const handleBackdropClick = () => {
    setIsMenuOpen(false)
  }

  if (isMenuOpen) return (
    <BackdropContainer><Backdrop onClick={handleBackdropClick} /><>{children}</></BackdropContainer>
  )
  return (
    <>{children}</>
  )
}
const BackdropContainer = styled.div`
  position:relative;
  width: 100%;
  height: 100vh;
`

const Backdrop = styled.div`
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0,0,0,0.4);
`