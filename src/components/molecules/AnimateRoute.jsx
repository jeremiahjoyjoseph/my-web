import React, { useState } from 'react';
import MotionDiv from '../atoms/MotionDiv';

const AnimateRoute = (props) => {
  const Page = props.page;
  const [selectedVariant, setSelectedVariant] = useState();
  const variants = {
    slideInRight_slideOutLeft: {
      hidden: {
        opacity: 0,
        x: '-100vw',
        transition: { type: 'spring', delay: 0.2, duration: 0.5 },
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', delay: 0.2, duration: 0.5 },
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
      className='page'
      variants={variants[props.type]}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Page
        animationType={selectedVariant}
        setAnimationType={setSelectedVariant}
      />
    </MotionDiv>
  );
};

export default AnimateRoute;
