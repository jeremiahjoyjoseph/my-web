import React from 'react';
import styled from 'styled-components';

const CardsWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 75px;
`;

export default CardsWrapper;
