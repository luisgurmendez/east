import React from 'react';
import styled from 'styled-components/macro';
import { Section } from '../components/layouts';

interface ClientsProps { }

const Clients: React.FC<ClientsProps> = ({ }) => {

  return (
    <Section id="clients" bg="green">
      <Container>

      </Container>
    </Section>
  )
}

export default Clients

const Container = styled.div``