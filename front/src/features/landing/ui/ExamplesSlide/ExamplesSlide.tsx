import { Typography } from "antd";
import React from "react";

import { Slide, OverflowList } from "@entities/landing";

import { examplesSlideText, examplesSlideItems } from "../../model";

const { Title } = Typography;

const ExamplesSlide = () => {
  return (
    <Slide
      anchorId={"examples"}
      prevId={"features"}
      image={"/images/features/analytics.jpg"}
    >
      <Title style={{ color: "#f5f5f5" }} level={1}>
        {examplesSlideText.title}
      </Title>
      <OverflowList items={examplesSlideItems} />
    </Slide>
  );
};

export default ExamplesSlide;
