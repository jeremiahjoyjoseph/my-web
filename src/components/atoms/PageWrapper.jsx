import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/helperFunctions';

const PageWrapper = ({ children, className, pageView }) => {
  return (
    <Wrapper className={className} pageView={pageView}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-y: ${({ pageView }) => (pageView ? 'scroll' : 'hidden')};
  padding-bottom: 40px;
  height: 100vh;
  scroll-behavior: smooth;

  /* Hide scrollbar for mobile */
  @media ${device.mobile} {
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* Custom scrollbar for laptop */
  @media ${device.laptop} {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

export default PageWrapper;
