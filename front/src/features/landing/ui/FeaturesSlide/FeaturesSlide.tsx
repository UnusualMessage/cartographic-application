import { Typography } from "antd";
import React from "react";

import { Slide, FeaturesList } from "@entities/landing";

import { featuresSlideText } from "../../model";

const { Title } = Typography;

const FeaturesSlide = () => {
  return (
    <Slide
      anchorId={"features"}
      prevId={"title"}
      image={"/images/features.jpg"}
    >
      <Title style={{ color: "#f5f5f5" }} level={1}>
        {featuresSlideText.title}
      </Title>
      <FeaturesList />
    </Slide>
  );
};

export default FeaturesSlide;
