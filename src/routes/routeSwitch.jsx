import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AnimateRoute from "../components/molecules/AnimateRoute";
import { home_data } from "../data/home";
import PageNotFound from "../pages/404/404";
import CV from "../pages/cv/cv";
import Designs from "../pages/designs/designs";
import Detail from "../pages/detail/detail";
import Home from "../pages/home/home";
import Music from "../pages/music/music";
import Projects from "../pages/projects/projects";
import Landing from "../wedding_src/pages/landing/landing";

const RouteSwitch = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimateRoute page={Home} />} />
        <Route
          path={`/${home_data.cards.projects.route}`}
          element={<AnimateRoute page={Projects} />}
        />
        <Route
          path={`/projects/:detailPageName`}
          element={<AnimateRoute page={Detail} />}
        />
        <Route
          path={`/designs/:detailPageName`}
          element={<AnimateRoute page={Detail} />}
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
        <Route path={`/phebe&jeremiah`} element={<Landing />} />
        <Route path="*" element={<AnimateRoute page={PageNotFound} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RouteSwitch;
