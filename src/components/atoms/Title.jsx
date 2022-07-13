import React, { Fragment } from 'react';
import TypeAnimationText from '../organisms/typeAnimationText/typeAnimationText';

const Title = (props) => {
  return (
    <Fragment>
      {props.animation ? (
        <TypeAnimationText
          startAfter={props.animation.startAfter}
          type='type'
        >{`<h1 class='bold'>${props.children}</h1>`}</TypeAnimationText>
      ) : (
        <h1 class='bold'>{props.children}</h1>
      )}
    </Fragment>
  );
};

export default Title;
