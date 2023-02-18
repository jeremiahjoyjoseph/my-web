import React from "react";
import styled from "styled-components";
import Subtitle from "../../components/atoms/Subtitle";
import Card from "../../components/organisms/card/card";
import CardsWrapper from "../../components/organisms/cardsWrapper/cardsWrapper";
import TitleSection from "../../components/organisms/titleSection/titleSection";
import { device } from "../../utils/helperFunctions";

const DataController = (props) => {
  const { data } = props;
  return (
    <ContentWrapper>
      <TitleSection title={data.title} {...props}>
        {data.subtitle.type === "text"
          ? data.subtitle.data.map((subtitle_data) => (
              <Subtitle key={`${subtitle_data.title}`} data={subtitle_data}>
                {subtitle_data.title}
              </Subtitle>
            ))
          : null}
      </TitleSection>
      <CardsWrapper>
        {Object.keys(data.cards).map((key, index) => (
          <Card
            key={key}
            title={data.cards[key].title}
            subtitle={data.cards[key].subtitle}
            data={data.cards[key]}
            index={index}
          />
        ))}
      </CardsWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  padding: 0px 20px;
  @media ${device.laptop} {
    display: flex;
    height: 100%;
    justify-content: space-between;
  }
`;

export default DataController;
