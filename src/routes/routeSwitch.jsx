import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route
        path={`/${home_data.cards.projects.route}`}
        element={<Projects />}
      />

      <Route path={`/${home_data.cards.designs.route}`} element={<Designs />} />
      <Route path={`/${home_data.cards.cv.route}`} element={<CV />} />
      <Route path={`/${home_data.cards.music.route}`} element={<Music />} />
      <Route path={`/${projects_data.cards.pax.route}`} element={<PAX />} />
      <Route path={`/${projects_data.cards.edp.route}`} element={<EDP />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default RouteSwitch;
