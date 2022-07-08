import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import Projects from '../pages/projects/projects';
import { home_data } from '../data/home';
import Designs from '../pages/designs/designs';

const RouteSwitch = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route
        path={`/${home_data.cards.projects.route}`}
        element={<Projects />}
      />
      <Route path={`/${home_data.cards.designs.route}`} element={<Designs />} />
    </Routes>
  );
};

export default RouteSwitch;
