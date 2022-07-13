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
        <Route
          path='/'
          element={
            <AnimateRoute>
              <Home />
            </AnimateRoute>
          }
        />
        <Route
          path={`/${home_data.cards.projects.route}`}
          element={
            <AnimateRoute>
              <Projects />
            </AnimateRoute>
          }
        />
        <Route
          path={`/${home_data.cards.designs.route}`}
          element={
            <AnimateRoute>
              <Designs />
            </AnimateRoute>
          }
        />
        <Route
          path={`/${home_data.cards.cv.route}`}
          element={
            <AnimateRoute>
              <CV />
            </AnimateRoute>
          }
        />
        <Route
          path={`/${home_data.cards.music.route}`}
          element={
            <AnimateRoute>
              <Music />
            </AnimateRoute>
          }
        />
        <Route
          path={`/${projects_data.cards.pax.route}`}
          element={
            <AnimateRoute>
              <PAX />
            </AnimateRoute>
          }
        />
        <Route
          path={`/${projects_data.cards.edp.route}`}
          element={
            <AnimateRoute>
              <EDP />
            </AnimateRoute>
          }
        />
        <Route
          path='*'
          element={
            <AnimateRoute>
              <PageNotFound />
            </AnimateRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RouteSwitch;
