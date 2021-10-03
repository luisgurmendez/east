import React from 'react';
import styled from 'styled-components/macro';
import { Section } from '../components/layouts';

interface HomeProps { }

const Home: React.FC<HomeProps> = ({ }) => {

  return (
    <Section id="home" bg="white">
      <Container>
        <Wave src='../wave.jpg' alt='wave' />
      </Container>
    </Section>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Wave = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`