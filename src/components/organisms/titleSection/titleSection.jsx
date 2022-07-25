import { Fragment } from 'react';
import styled from 'styled-components';
import { titleSectionAnimation } from '../../../utils/animationConfig';
import { slideRight } from '../../../utils/animations';
import { device } from '../../../utils/helperFunctions';
import MotionDiv from '../../atoms/MotionDiv';
import Title from '../../atoms/Title';

const TitleSection = (props) => {
  return (
    <TitleWrapper>
      {titleSectionAnimation.active ? (
        <MotionDiv
          variants={slideRight(titleSectionAnimation.startAfter)}
          initial='hidden'
          animate='visible'
        >
          <Title>{props.title}</Title>
          <SubtitleWrapper>{props.children}</SubtitleWrapper>
        </MotionDiv>
      ) : (
        <Fragment>
          <Title>{props.title}</Title>
          <SubtitleWrapper>{props.children}</SubtitleWrapper>
        </Fragment>
      )}
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  margin-top: 55px;

  @media ${device.laptop} {
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }
`;
const SubtitleWrapper = styled.div`
  margin-top: 10px;
`;

export default TitleSection;
