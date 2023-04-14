import { Typography } from "antd";
import React from "react";

import { Slide, OverflowList } from "@entities/landing";

import { featuresSlideText, featuresSlideItems } from "../../model";

const { Title } = Typography;

const FeaturesSlide = () => {
  return (
    <Slide
      anchorId={"features"}
      prevId={"title"}
      nextId={"examples"}
      image={"/images/features/analytics.jpg"}
    >
      <Title style={{ color: "#f5f5f5" }} level={1}>
        {featuresSlideText.title}
      </Title>
      <OverflowList items={featuresSlideItems} />
    </Slide>
  );
};

export default FeaturesSlide;
