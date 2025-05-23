import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/atoms/Subtitle';
import Card from '../../components/organisms/card/card';
import CardsWrapper from '../../components/organisms/cardsWrapper/cardsWrapper';
import TitleSection from '../../components/organisms/titleSection/titleSection';
import { device } from '../../utils/helperFunctions';

const DataController = (props) => {
  const { data, pageView: initialPageView } = props;
  const [pageView, setPageView] = useState(initialPageView);

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

  return (
    <ContentWrapper pageView={pageView}>
      {!pageView && (
        <TitleSection title={data.title} {...props} pageView={pageView}>
          {data.subtitle.type === 'text'
            ? data.subtitle.data.map((subtitle_data) => (
                <Subtitle key={`${subtitle_data.title}`} data={subtitle_data}>
                  {subtitle_data.title}
                </Subtitle>
              ))
            : null}
        </TitleSection>
      )}
      <CardsWrapper pageView={pageView}>
        {Object.keys(data.cards).map((key, index) =>
          data.cards[key].disabled ? null : (
            <Card
              key={key}
              title={data.cards[key].title}
              subtitle={data.cards[key].subtitle}
              data={data.cards[key]}
              index={index}
            />
          )
        )}
      </CardsWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  padding: 0px;
  ${(props) =>
    props.pageView &&
    `
    padding: 0px 40px;
  `}
  @media ${device.laptop} {
    ${(props) =>
      !props.pageView &&
      `
      display: flex;
      height: 100%;
      justify-content: space-between;
    `}
  }
`;

export default DataController;
