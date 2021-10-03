import React from 'react';
import styled from 'styled-components/macro';
import { Column, PaddedContent, Row, Section } from '../components/layouts';
import { Desktop, Mobile } from '../components/mobile';
import { Body, ExtraLargeTitle } from '../components/Typography';
import { colors } from '../utils/colors';

interface ServicesProps { }

const Services: React.FC<ServicesProps> = ({ }) => {

  return (
    <Section id="services" bg="white">
      <Container>
        <PaddedContent>
          <StyledLargeTitle>Servicios</StyledLargeTitle>
        </PaddedContent>
      </Container>
      <PaddedContent>
        <Desktop>
          <ServiceRow>
            <Service img="../services/Rebranding.png" description="Rebranding" />
            <Service img="../services/Produccion.png" description="Producción" />
            <Service img="../services/OrganizacionDeEventos.png" description="Organización de eventos" />
          </ServiceRow>
          <ServiceRow>
            <Service img="../services/ComInterna.png" description="Comunicación interna" />
            <Service img="../services/RedesSociales.png" description="Redes sociales" />
            <Service img="../services/EstrategiaDigital.png" description="Estrategia digital" />
          </ServiceRow>
        </Desktop>
        <Mobile>
          <ServiceRow>
            <Service img="../services/Rebranding.png" description="Rebranding" />
            <Service img="../services/EstrategiaDigital.png" description="Estrategia digital" />
          </ServiceRow>
          <ServiceRow>
            <Service img="../services/OrganizacionDeEventos.png" description="Organización de eventos" />
            <Service img="../services/ComInterna.png" description="Comunicación interna" />
          </ServiceRow>
          <ServiceRow>
            <Service img="../services/RedesSociales.png" description="Redes sociales" />
            <Service img="../services/Produccion.png" description="Producción" />
          </ServiceRow>
        </Mobile>
      </PaddedContent>
    </Section>
  )
}

export default Services

const Container = styled.div`
  background-color: ${colors.blue3};
  padding: 16px;
`

const StyledLargeTitle = styled(ExtraLargeTitle)`
  width: 100%;
  text-align: center;
  color: white;
  text-transform: uppercase;
`

const ServiceRow = styled(Row)`
`

interface ServiceProps {
  img: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ img, description }) => {

  return (
    <ServiceContainer>
      <ServiceImg src={img} />
      <Body style={{ textAlign: 'center' }}><strong>{description}</strong></Body>
    </ServiceContainer>
  )

}

const ServiceImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const ServiceContainer = styled(Column)`
  flex: 1;
  height: 200px;
  margin: 16px ;
`