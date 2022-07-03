import styled from 'styled-components';
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
`;
const SubtitleWrapper = styled.div`
  margin-top: 10px;
`;

export default TitleSection;
