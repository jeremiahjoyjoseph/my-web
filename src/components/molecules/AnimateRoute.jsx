import React from 'react';
import MotionDiv from '../atoms/MotionDiv';

const AnimateRoute = (props) => {
  const variants = {
    slideInRight_slideOutLeft: {
      hidden: {
        opacity: 0,
        x: '-100vw',
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', delay: 0.2 },
      },
      exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' },
      },
    },
    slideInLeft_slideOutRight: {
      hidden: {
        opacity: 0,
        x: '100vw',
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', delay: 0.2 },
      },
      exit: {
        x: '+100%',
        transition: { ease: 'easeInOut' },
      },
    },
    fadeIn_slideOutLeft: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: { delay: 1, duration: 1 },
      },
      exit: {
        x: '+100%',
        transition: { ease: 'easeInOut' },
      },
    },
    fadeIn_slideOutRight: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: { delay: 1, duration: 1 },
      },
      exit: {
        x: '-100%',
        transition: { ease: 'easeInOut' },
      },
    },
  };

  return (
    <MotionDiv
      class='page'
      variants={variants[props.type]}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {props.children}
    </MotionDiv>
  );
};

export default AnimateRoute;
