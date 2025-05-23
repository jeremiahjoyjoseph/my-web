import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { backButtonAnimation } from '../../../utils/animationConfig';
import { slideRight } from '../../../utils/animations';
import { device } from '../../../utils/helperFunctions';
import MotionDiv from '../../atoms/MotionDiv';
import IconButton from '../../molecules/iconButton';
import TitleSection from '../titleSection/titleSection';
import Subtitle from '../../atoms/Subtitle';

const Header = (props) => {
  const { pageView: initialPageView, data, hideGoBack } = props;
  const [pageView, setPageView] = useState(initialPageView);
  const navigate = useNavigate();
  const location = useLocation();
  const [canGoBack] = useState(location.key !== 'default' ? true : false);

  useEffect(() => {
    const checkViewportHeight = () => {
      if (window.innerWidth >= 1024) {
        // laptop breakpoint
        if (window.innerHeight < 640) {
          setPageView(true);
        } else if (initialPageView === undefined) {
          setPageView(false);
        }
      }
    };

    checkViewportHeight();
    window.addEventListener('resize', checkViewportHeight);

    return () => {
      window.removeEventListener('resize', checkViewportHeight);
    };
  }, [initialPageView]);

  const handleBack = () => {
    if (canGoBack) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Wrapper pageView={pageView}>
      {backButtonAnimation.active ? (
        <MotionDiv
          variants={slideRight(backButtonAnimation.startAfter)}
          initial="hidden"
          animate="visible"
          style={
            pageView && { display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }
          }
        >
          {!hideGoBack && (
            <IconButton
              name="arrow_left"
              style={{ paddingLeft: 0 }}
              onClick={handleBack}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          )}
          {pageView && (
            <TitleSection title={data.title} {...props} pageView={pageView}>
              {data.subtitle.type === 'text' && !pageView
                ? data.subtitle.data.map((subtitle_data) => (
                    <Subtitle key={`${subtitle_data.title}`} data={subtitle_data}>
                      {subtitle_data.title}
                    </Subtitle>
                  ))
                : null}
            </TitleSection>
          )}
        </MotionDiv>
      ) : (
        <IconButton name="arrow_left" style={{ paddingLeft: 0 }} onClick={handleBack} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0px;
  ${(props) =>
    props.pageView &&
    `
    padding: 0px 40px;
  `}
  @media ${device.laptop} {
    margin-top: 50px;

    ${(props) =>
      !props.pageView &&
      `
        display: flex;
        align-items: center;
        position: absolute;
        width: 100%;
    `}
  }
`;

export default Header;
