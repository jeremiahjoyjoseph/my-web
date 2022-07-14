import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = (props) => {
  return <motion.div {...props}>{props.children}</motion.div>;
};

export default MotionDiv;
