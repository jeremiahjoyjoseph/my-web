import styled from 'styled-components';
import { device } from '../../../utils/helperFunctions';
import Title from '../../atoms/Title';

const TitleSection = (props) => {
  return (
    <TitleWrapper>
      <Title>{props.title}</Title>
      <SubtitleWrapper>{props.children}</SubtitleWrapper>
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
