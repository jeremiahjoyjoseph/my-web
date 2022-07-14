import { Fragment, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { device } from '../../../utils/helperFunctions';
import IconButton from '../../molecules/iconButton';

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [canGoBack] = useState(location.key !== 'default' ? true : false);
  console.log(location.key);

  const handleBack = () => {
    navigate(-1);
  };
  const handleHome = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      {canGoBack && (
        <Fragment>
          <IconButton
            name='arrow_left'
            style={{ paddingLeft: 0 }}
            onClick={handleBack}
          />
          <h3 class='bold'>/</h3>
        </Fragment>
      )}
      <h2
        class='bold'
        style={{ marginLeft: 10, cursor: 'pointer' }}
        onClick={handleHome}
      >
        Home
      </h2>
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
