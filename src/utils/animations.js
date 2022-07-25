export const slideUp = (delay) => {
  const animation = {
    hidden: {
      opacity: 0,
      y: '+100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween', delay },
    },
  };
  return animation;
};

export const slideRight = (delay) => {
  const animation = {
    hidden: {
      opacity: 0,
      x: '-100vh',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'tween', delay },
    },
  };
  return animation;
};

export const fadeIn = (delay) => {
  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay, duration: 1 },
    },
  };
  return animation;
};
