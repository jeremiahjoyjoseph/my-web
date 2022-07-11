import _ from 'lodash';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import Icon from '../../atoms/Icon';
import Ripple from '../../atoms/Ripple';
import { cardClickDelay } from './util';
import { saveAs } from 'file-saver';

const Card = (props) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleClick = _.debounce(() => {
    switch (props.data.clickToAction) {
      case 'navigate':
        navigate(`/${props.data.route}`);
        break;
      case 'external':
        window.open(props.data.link, '_blank');
        break;
      case 'download':
        saveAs(props.data.file, 'JeremiahJoyJoseph_Resume.pdf');
        break;
      case 'mail':
        let params = props.data.subject || props.data.body ? '?' : '';
        if (props.data.subject)
          params += `subject=${encodeURIComponent(props.data.subject)}`;
        if (props.data.body)
          params += `${props.data.subject ? '&' : ''}body=${encodeURIComponent(
            props.data.body
          )}`;
        window.open(`mailto:${props.data.email}${params}`);
        break;
      default:
        break;
    }
  }, cardClickDelay);

  return (
    <Ripple
      style={{ marginTop: props.index !== 0 ? 10 : 0 }}
      disableRipple={props.data.clickToAction ? false : true}
    >
      <Wrapper
        style={props.style}
        onClick={handleClick}
        theme={theme}
        {...props}
      >
        <CardTitle className='bold'>
          {props.data.title}
          {props.data.clickToAction && (
            <Icon name='arrow_up_right' style={{ marginLeft: 5 }} />
          )}
        </CardTitle>
        <CardSubtitle theme={theme}>{props.data.subtitle}</CardSubtitle>
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
