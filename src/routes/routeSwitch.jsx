import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AnimateRoute from '../components/molecules/AnimateRoute';
import { home_data } from '../data/home';
import { projects_data } from '../data/projects';
import PageNotFound from '../pages/404/404';
import CV from '../pages/cv/cv';
import Designs from '../pages/designs/designs';
import EDP from '../pages/edp/edp';
import Home from '../pages/home/home';
import Music from '../pages/music/music';
import PAX from '../pages/pax/pax';
import Projects from '../pages/projects/projects';

const RouteSwitch = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<AnimateRoute page={Home} />} />
        <Route
          path={`/${home_data.cards.projects.route}`}
          element={<AnimateRoute page={Projects} />}
        />
        <Route
          path={`/${home_data.cards.designs.route}`}
          element={<AnimateRoute page={Designs} />}
        />
        <Route
          path={`/${home_data.cards.cv.route}`}
          element={<AnimateRoute page={CV} />}
        />
        <Route
          path={`/${home_data.cards.music.route}`}
          element={<AnimateRoute page={Music} />}
        />
        <Route
          path={`/${projects_data.cards.pax.route}`}
          element={<AnimateRoute page={PAX} />}
        />
        <Route
          path={`/${projects_data.cards.edp.route}`}
          element={<AnimateRoute page={EDP} />}
        />
        <Route path='*' element={<AnimateRoute page={PageNotFound} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RouteSwitch;
