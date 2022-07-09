import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { device } from '../../../utils/helperFunctions';
import IconButton from '../../molecules/iconButton';

const Header = (props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
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
  }
`;

export default Header;
