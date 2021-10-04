import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";
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


export const Section: React.FC<{ bg?: string, id: string }> = ({ bg, id, children }) => {

  const isMobile = useIsMobile();

  return (
    <SectionContainer id={id} bg={bg} isMobile={isMobile}>
      {children}
    </SectionContainer>
  )
}

const SectionContainer = styled.section<{ bg?: string, isMobile: boolean }>`
  width: 100%;
  background-color: ${({ bg }) => bg};
  scroll-margin-top: ${({ isMobile }) => isMobile ? '64px' : '-32px'};
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
