import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button } from '../components/Button';
import { InputWithError, TextAreaInputWithError, useInput } from '../components/Input';
import { Column, PaddedContent, Row, Section } from '../components/layouts';
import { Desktop, Mobile } from '../components/mobile';
import { ExtraLargeTitle, Body } from '../components/Typography';
import { colors } from '../utils/colors';

interface ContactProps { }

const Contact: React.FC<ContactProps> = ({ }) => {

  return (
    <Section id="contact" bg="blue">
      <Container>
        <Desktop>
          <Row>
            <ContactDetails />
            <ContactForm />
          </Row>
        </Desktop>
        <Mobile>
          <Column>
            <ContactDetails />
            <ContactForm />
          </Column>
        </Mobile>
      </Container>
    </Section>
  )
}

export default Contact

const Container = styled.div`
  margin-top: 32px;
  background-color: ${colors.yellow.light};
  padding: 32px;
`

const StyledLargeTitle = styled(ExtraLargeTitle)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`

const ContactFormContent = styled(Column)`
  justify-content: center;
  align-items: center;
  flex: 1;

  & .form-value{
    margin-bottom: 16px;
  }
`

const CenteredButton = styled(Button)`
  width: fit-content;
`

const TitleContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`

const ContactDetails: React.FC = () => {


  const renderDetails = () => {
    return (
      <>
        <Margin>
          <a href="../catalina.vcard" target="_blank">
            <BoldBody letMeMargin={true}>Mail: catalina@eastcomunicacion.com</BoldBody>
            <BoldBody letMeMargin={true}>Tel: (+598) 93 825 333</BoldBody>
          </a>
        </Margin>
        <Margin>
          <a href="../josefina.vcard" target="_blank">
            <BoldBody letMeMargin={true}>Mail: josefina@eastcomunicacion.com</BoldBody>
            <BoldBody letMeMargin={true}>Tel: (+598) 99 027 075</BoldBody>
          </a>
        </Margin>
        <Margin>
          <BoldBody letMeMargin={true}>Punta del Este, Uruguay</BoldBody>
        </Margin>
      </>
    )
  }

  return (
    <ContactDetailsContainer>
      <TitleContainer>
        <StyledLargeTitle>Contacto</StyledLargeTitle>
      </TitleContainer>
      <Desktop>
        <ContactDetailsContent>
          {renderDetails()}
        </ContactDetailsContent>
      </Desktop>
      <Mobile>
        {renderDetails()}
      </Mobile>
    </ContactDetailsContainer>
  )
}



const Margin = styled.div`
  margin-bottom: 16px;
`

const BoldBody = styled(Body)`
  font-weight: bold;
  margin: 0px !important;
`

const ContactDetailsContainer = styled(Column)`
  flex: 1;
  padding-bottom: 32px;
`

const ContactDetailsContent = styled(Column)`
  justify-content: center;
  align-items: center;
  flex: 1;
  align-self: center;
  display: flex;

`

const ContactForm: React.FC = () => {

  const [nameVal, setNameVal] = useInput();
  const [emailVal, setEmailVal] = useInput();
  const [phoneVal, setPhoneVal] = useInput();
  const [msgVal, setMsgVal] = useInput();
  const [hasTryToSubmit, setHasTRyToSubmit] = useState(false);

  const constructMailToHref = () => {
    return `mailto:catalina@eastcomunicacion.com?subject=${`Mensaje desde web ${nameVal}`}&body=${`${msgVal}\n\nContacto: ${nameVal} - ${emailVal} - ${phoneVal}`}&cc=josefina@eastcomunicacion.com`
  }

  const isFormValid = () => {
    return nameVal !== '' && emailVal !== '' && phoneVal !== '' && msgVal !== ''
  }

  const handleSendEmail = () => {
    setHasTRyToSubmit(true);
    if (isFormValid()) {
      const tempA = document.createElement('a');
      tempA.href = constructMailToHref();
      tempA.click();
    }
  }

  return (
    <ContactFormContent>
      <InputWithError error={hasTryToSubmit && nameVal === ''} type="text" value={nameVal} onChange={setNameVal} placeholder="Nombre" />
      <InputWithError error={hasTryToSubmit && emailVal === ''} type="email" value={emailVal} onChange={setEmailVal} placeholder="Email" />
      <InputWithError error={hasTryToSubmit && phoneVal === ''} type="number" value={phoneVal} onChange={setPhoneVal} placeholder="Telefono" />
      <TextAreaInputWithError error={hasTryToSubmit && msgVal === ''} value={msgVal} onChange={setMsgVal} placeholder="Mensaje" rows={4} />
      <CenteredButton onClick={handleSendEmail}>
        Enviar
      </CenteredButton>
    </ContactFormContent>
  )
}

const ContactFormContainer = styled.div``