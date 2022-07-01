import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';

const RoutingProvider = (props) => {
  return (
    <Router>
      {props.children}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RoutingProvider;
