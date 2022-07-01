import styled from 'styled-components';
import Title from '../../atoms/Title';

const TitleSection = (props) => {
  const TitleWrapper = styled.div`
    margin-top: 55px;
  `;
  const SubtitleWrapper = styled.div`
    margin-top: 10px;
  `;

  return (
    <TitleWrapper>
      <Title>{props.title}</Title>
      <SubtitleWrapper>{props.children}</SubtitleWrapper>
    </TitleWrapper>
  );
};

export default TitleSection;
