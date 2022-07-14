import React from 'react';
import Typewriter from 'typewriter-effect';
import './style.css';

const TypeAnimationText = (props) => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(60)
            .pauseFor(props.startAfter)
            .typeString(`${props.type === 'type' ? props.children : ''}`)
            .pasteString(`${props.type === 'paste' ? props.children : ''}`)
            .start();
        }}
      />
    </div>
  );
};

export default TypeAnimationText;
