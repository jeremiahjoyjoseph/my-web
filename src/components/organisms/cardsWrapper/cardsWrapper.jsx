import React from 'react';
import styled from 'styled-components';
import { device } from '../../../utils/helperFunctions';

const CardsWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 75px;

  @media ${device.laptop} {
    margin-top: 0px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`;

export default CardsWrapper;
