import styled from 'styled-components';
import { useTheme } from '../../../theme/useTheme';
import Ripple from '../../atoms/Ripple';
import IconButton from '../../molecules/iconButton';

const Card = (props) => {
  const { theme } = useTheme();
  const Wrapper = styled.div`
    height: 93px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 16px 0px 16px;
    background-color: ${theme.colors.cardColors[props.index]};
    border-radius: 5px;
    width: 100%;
  `;
  const CardTitle = styled.h3`
    display: flex;
    align-items: center;
  `;

  const CardSubtitle = styled.h4`
    color: ${theme.colors.text.secondary};
    margin-top: 5px;
  `;

  return (
    <Ripple>
      <Wrapper style={props.style}>
        <CardTitle className='bold'>
          {props.title}
          <IconButton name='arrow_up_right' />
        </CardTitle>
        <CardSubtitle>{props.subtitle}</CardSubtitle>
      </Wrapper>
    </Ripple>
  );
};

export default Card;
