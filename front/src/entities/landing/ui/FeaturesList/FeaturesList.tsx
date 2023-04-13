import { Card } from "antd";
import React from "react";

import { wrapper, item, image as imageStyle } from "./list.module.scss";
import { featuresDescription } from "../../model";

const { Meta } = Card;

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const Feature = ({ title, description, image }: FeatureProps) => {
  return (
    <Card
      className={item}
      cover={<img className={imageStyle} alt="image" src={image} />}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

const FeaturesList = () => {
  return (
    <div className={wrapper}>
      {featuresDescription.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesList;
