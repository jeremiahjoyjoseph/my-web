import React from 'react';
import styled from 'styled-components';
import { device } from '../../../utils/helperFunctions';

const CardsWrapper = (props) => {
  const { pageView } = props;
  return <Wrapper pageView={pageView}>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 75px;

  @media ${device.laptop} {
    ${(props) =>
      !props.pageView &&
      `
      margin-top: 0px;
      justify-content: center;
      display: flex;
      flex-direction: column;
      width: 50%;
    `}
  }
`;

export default CardsWrapper;
