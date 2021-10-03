import React from 'react';
import styled from 'styled-components/macro';
import { useIsMobile } from '../hooks/useIsMobile';

export const Mobile: React.FC = ({ children }) => {
  const isMobile = useIsMobile();
  if (!isMobile) return null;
  return (
    <>
      {children}
    </>
  )
}


export const Desktop: React.FC = ({ children }) => {
  const isMobile = useIsMobile();
  if (isMobile) return null;

  return (
    <>
      {children}
    </>
  )
}

