import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useWindowScroll } from 'react-use';
import styled, { keyframes } from 'styled-components/macro';
import { colors } from '../utils/colors';

interface ScrollToTopProps { }

const ScrollToTop: React.FC<ScrollToTopProps> = ({ }) => {
  const scrolling = useWindowScroll();
  const showScrollingArrow = scrolling.y > 300;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollingArrow) return null;

  return (
    <Container onClick={handleScrollToTop}>
      <FontAwesomeIcon color={"white"} size="1x" icon={faArrowUp} />
    </Container>
  )
}

export default ScrollToTop


const scale = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

const Container = styled.div`
  background-color: ${colors.blue3};
  width: 40px;
  height: 40px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius: 50%;
  position: fixed;
  bottom: 16px;
  right: 16px;
  animation: ${scale} 0.2s linear 1;
  cursor: pointer;
`