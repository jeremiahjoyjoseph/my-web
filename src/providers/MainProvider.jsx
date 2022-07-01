import React from 'react';
import RoutingProvider from './routingProvider';

const MainProvider = (props) => {
  return <RoutingProvider>{props.children}</RoutingProvider>;
};

export default MainProvider;
