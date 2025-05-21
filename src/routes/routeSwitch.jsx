import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AnimateRoute from '../components/molecules/AnimateRoute';
import { home_data } from '../data/home';
import PageNotFound from '../pages/404/404';
import Designs from '../pages/designs/designs';
import Detail from '../pages/detail/detail';
import Home from '../pages/home/home';
import Projects from '../pages/projects/projects';

const RouteSwitch = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<AnimateRoute page={Home} type="slideInRight_slideOutLeft"/>} />
        <Route
          path={`/${home_data.cards.projects.route}`}
          element={<AnimateRoute page={Projects} type="slideInRight_slideOutLeft"/>}
        />
        <Route
          path={`/projects/:detailPageName`}
          element={<AnimateRoute page={Detail} type="slideInRight_slideOutLeft"/>}
        />
        <Route
          path={`/designs/:detailPageName`}
          element={<AnimateRoute page={Detail} type="slideInRight_slideOutLeft"/>}
        />
        <Route
          path={`/${home_data.cards.designs.route}`}
          element={<AnimateRoute page={Designs} type="slideInRight_slideOutLeft"/>}
        />
        
        <Route path='*' element={<AnimateRoute page={PageNotFound} type="slideInRight_slideOutLeft"/>} />
      </Routes>
    </AnimatePresence>
  );
};

export default RouteSwitch;
