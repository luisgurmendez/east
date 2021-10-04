import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components/macro';
import { StringLiteralLike } from 'typescript';
import { Column, Row, Section, PaddedContent } from '../components/layouts';
import { Desktop, Mobile } from '../components/mobile';
import { Body, ExtraLargeTitle } from '../components/Typography';
import { colors } from '../utils/colors';
import { faLinkedinIn, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface UsProps { }

const Us: React.FC<UsProps> = ({ }) => {

  return (
    <Section id="us">
      <Container>
        <UsTextContent>
          <PaddedContent>
            <StyledLargeTitle>Nosotros</StyledLargeTitle>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id finibus lorem. Proin ac rhoncus turpis. Donec convallis sit amet mauris in tincidunt. Pellentesque eu tellus magna. Donec ornare ornare felis. Fusce facilisis consectetur neque et hendrerit. In feugiat urna dapibus ante pellentesque, et cursus elit venenatis. Praesent finibus hendrerit augue eu convallis. Etiam vitae odio sit amet nibh suscipit porta. Curabitur tortor ex, viverra eu arcu quis, varius euismod arcu.
            </Body>
          </PaddedContent>
        </UsTextContent>
        <UsProfilesContainerMobileDesktopLayout>
          <UsProfile
            name="Lic. Catalina Sterenstein - Directora"
            img="../team/cata.jpeg"
            linkedin="https://www.linkedin.com/in/catalina-sterenstein-97b4a5178/"
          />
          <UsProfile
            name="Lic. Josefina Ponce de Léon - Directora"
            img="../team/jose.jpeg"
            linkedin="https://www.linkedin.com/in/josefina-ponce-de-le%C3%B3n-thode-590547121/"
          />
          <UsProfile
            name="Clara Cazeres - Diesñadora gráfica"
            img="../team/clara.jpeg"
            linkedin="https://www.linkedin.com/in/clara-caz%C3%A9res-6b25a11a3/"
          />
        </UsProfilesContainerMobileDesktopLayout>
      </Container>
    </Section>
  )
}

export default Us

const Container = styled.div`
  margin-bottom: 16px;
`

const UsTextContent = styled.div`
  background-color: ${colors.yellow.light};
  padding: 32px;
`

const StyledLargeTitle = styled(ExtraLargeTitle)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`


const UsProfilesContainerMobileDesktopLayout: React.FC = ({ children }) => {
  return (
    <UsProfilesContainerMobileDesktopLayoutContainer>
      <Desktop>
        <DesktopUsProfilesContainer>
          {children}
        </DesktopUsProfilesContainer>
      </Desktop>
      <Mobile>
        <MobileUsProfilesContainer>
          {children}
        </MobileUsProfilesContainer>
      </Mobile>
    </UsProfilesContainerMobileDesktopLayoutContainer>
  )
}

const UsProfilesContainerMobileDesktopLayoutContainer = styled.div`
  margin-top: 30px;
`

const DesktopUsProfilesContainer = styled(Row)`
  justify-content: center;
  flex-wrap: wrap;

  & .profile{
    margin: 0px 16px;
  }
`

const MobileUsProfilesContainer = styled(Column)`
  justify-content: center;
  align-items: center;

  & .profile{
    margin: 16px;
  }
`

interface UsProfileProps {
  img: string;
  name: string;
  linkedin?: string;
}

const UsProfile: React.FC<UsProfileProps> = ({ img, name, linkedin }) => {

  return (
    <UsProfileContainer className="profile">
      <ProfileImg src={img} alt={name} />
      <UsProfileFooter name={name} linkedin={linkedin} />
    </UsProfileContainer>
  );
}

const UsProfileContainer = styled.div`
  flex: 1;
  max-width: 300px;
  height: 100%;
`

const ProfileImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const UsProfileFooter: React.FC<Omit<UsProfileProps, 'img'>> = ({ name, linkedin }) => {
  return (
    <UsProfileFooterContainer>
      <WhiteBody>{name}</WhiteBody>
      <a href={linkedin} target="_blank">
        <FontAwesomeIcon color={"white"} size="lg" icon={faLinkedinIn} />
      </a>
    </UsProfileFooterContainer>
  )
}


const UsProfileFooterContainer = styled(Row)`
  background-color: ${colors.blue.dark};
  padding: 4px 16px;
  align-items:center;
`

const WhiteBody = styled(Body)`
  color: white;
`