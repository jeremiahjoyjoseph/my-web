import { Fragment, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { device } from '../../../utils/helperFunctions';
import IconButton from '../../molecules/iconButton';

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [canGoBack] = useState(location.key !== 'default' ? true : false);

  const handleBack = () => {
    if (canGoBack) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <IconButton
        name='arrow_left'
        style={{ paddingLeft: 0 }}
        onClick={handleBack}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media ${device.laptop} {
    margin-top: 50px;
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export default Header;
