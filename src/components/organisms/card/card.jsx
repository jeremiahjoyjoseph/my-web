import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useTheme } from '../../../theme/useTheme';
import Icon from '../../atoms/Icon';
import Ripple from '../../atoms/Ripple';
import IconButton from '../../molecules/iconButton';

const Card = (props) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${props.route}`);
  };

  return (
    <Ripple>
      <Wrapper
        style={props.style}
        onClick={handleClick}
        theme={theme}
        {...props}
      >
        <CardTitle className='bold'>
          {props.title}
          <Icon name='arrow_up_right' style={{ marginLeft: 5 }} />
        </CardTitle>
        <CardSubtitle theme={theme}>{props.subtitle}</CardSubtitle>
      </Wrapper>
    </Ripple>
  );
};

const Wrapper = styled.div`
  height: 93px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px 0px 16px;
  background-color: ${(props) => props.theme.colors.cardColors[props.index]};
  border-radius: 5px;
  width: 100%;
`;
const CardTitle = styled.h3`
  display: flex;
  align-items: center;
`;

const CardSubtitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 5px;
  text-align: left;
`;

export default Card;
