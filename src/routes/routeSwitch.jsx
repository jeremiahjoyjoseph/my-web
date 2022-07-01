import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default RouteSwitch;
