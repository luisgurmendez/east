import React from 'react';
import styled from 'styled-components';
import Us from './sections/Us';
import Services from './sections/Services';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Home from './sections/Home';
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';
import { NavbarMenuOpenProvider } from './state/NavbarMenuOpenContext';
import { colors } from './utils/colors';
import { SmallBody } from './components/Typography';


function App() {

  return (
    <NavbarMenuOpenProvider>
      <Container>
        <Nav />
        {/* <NavbarBackdrop> */}
        <Content>
          <ScrollToTop />
          <Home />
          <Us />
          <Services />
          <Clients />
          <Contact />
          <Footer>
            <WhiteBody>©2020 por East Comunicación</WhiteBody>
          </Footer>
        </Content>
        {/* </NavbarBackdrop> */}
      </Container>
    </NavbarMenuOpenProvider >

  );
}

export default App;

const Container = styled.div``

const Content = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
`

const WhiteBody = styled(SmallBody)`
  color: white;
  font-weight: bold;
  text-align: center;
`

const Footer = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${colors.blue.dark};
  
`
