import React from 'react';
import { FirstLoadProvider } from '../context/firstLoadContext';
import { OnlineStatusProvider } from '../hooks/useOnlineStatus';
import RoutingProvider from './routingProvider';

const MainProvider = (props) => {
  return (
    <FirstLoadProvider>
      <OnlineStatusProvider>
        <RoutingProvider>{props.children}</RoutingProvider>
      </OnlineStatusProvider>
    </FirstLoadProvider>
  );
};

export default MainProvider;
