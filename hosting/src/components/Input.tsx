import { ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { Column } from "./layouts";
import { Body } from "./Typography";

interface WithError {
  error: boolean
}

export const Input = styled.input<WithError>`
  padding: 4px 12px;
  border: 2px solid ${props => props.error ? 'red' : colors.blue.dark};
  width: 100%;
`

export const TextAreaInput = styled.textarea<WithError>`
  padding: 4px 12px;
  border: 2px solid ${props => props.error ? 'red' : colors.blue.dark};
  width: 100%;
`

export function useInput(): [string, (v: string | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void] {
  const [val, setVal] = useState('');

  const handleSetValueWrapper = (v: string | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (typeof v === 'string') {
      setVal(v)
    } else {
      setVal(v.target.value);
    }
  }

  return [val, handleSetValueWrapper]
}

interface FormValueWithErrorProps {
  errorLabel?: string;
  error?: boolean;
}

export const TextAreaInputWithError: React.FC<FormValueWithErrorProps & any> = ({ errorLabel = "Campo obligatorio", error = false, ...rest }) => {

  return (
    <FormValueWithErrorContainer className="form-value">
      <TextAreaInput error={error} {...rest} />
      {error && <ErrorText>{errorLabel}</ErrorText>}
    </FormValueWithErrorContainer>
  )
}


export const InputWithError: React.FC<FormValueWithErrorProps & any> = ({ errorLabel = "Campo obligatorio", error = false, children, ...rest }) => {

  return (
    <FormValueWithErrorContainer className="form-value">
      <Input error={error} {...rest} />
      {error && <ErrorText>{errorLabel}</ErrorText>}
    </FormValueWithErrorContainer>
  )
}



const FormValueWithErrorContainer = styled(Column)`
  width: 100%;
`

const ErrorText = styled(Body)`
  color: red;
`