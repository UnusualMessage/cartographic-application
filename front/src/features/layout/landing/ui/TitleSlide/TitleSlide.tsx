import { Typography, Space } from "antd";
import React, { CSSProperties } from "react";

import { Slide } from "@entities/landing";
import { ToAuthorization, ToMonitoring } from "@entities/links";

import { text, links } from "./slide.module.scss";
import { titleSlideText } from "../../model";

const { Title, Text } = Typography;

const TitleSlide = () => {
  const textCss: CSSProperties = {
    color: "#f5f5f5",
  };

  return (
    <Slide anchorId={"title"} nextId={"features"} image={"/images/home.jpg"}>
      <Title className={text} style={textCss} level={1}>
        {titleSlideText.title}
      </Title>
      <Title className={text} style={textCss} level={3}>
        {titleSlideText.main}
      </Title>
      <Text className={text} style={textCss}>
        {titleSlideText.about}
      </Text>

      <Space className={links} size={30}>
        <ToMonitoring type={"primary"} text={"Система"} />
        <ToAuthorization />
      </Space>
    </Slide>
  );
};

export default TitleSlide;
