import React from 'react';
import { OnlineStatusProvider } from '../hooks/useOnlineStatus';
import RoutingProvider from './routingProvider';

const MainProvider = (props) => {
  return (
    <OnlineStatusProvider>
      <RoutingProvider>{props.children}</RoutingProvider>
    </OnlineStatusProvider>
  );
};

export default MainProvider;
