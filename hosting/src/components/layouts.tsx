import styled from "styled-components";
import { Desktop, Mobile } from './mobile';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Section = styled.section<{ bg?: string }>`
  width: 100%;
  background-color: ${({ bg }) => bg};
  scroll-margin-top: -32px;
`

export const PaddedContent: React.FC = ({ children }) => {
  return (
    <>
      <Desktop>
        <PaddedContentDesk>
          {children}
        </PaddedContentDesk>
      </Desktop>
      <Mobile>
        {children}
      </Mobile>
    </>
  )
}

const PaddedContentDesk = styled.div`
  width: 100%;
  padding: 0px 15%;
`
