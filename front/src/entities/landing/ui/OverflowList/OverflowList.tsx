import { Card } from "antd";
import React from "react";

import { wrapper, item, image as imageStyle } from "./list.module.scss";

const { Meta } = Card;

interface ItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Item = ({ title, description, image }: ItemProps) => {
  return (
    <Card
      className={item}
      cover={<img className={imageStyle} alt="image" src={image} />}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

interface Props {
  items: ItemProps[];
}

const OverflowList = ({ items }: Props) => {
  return (
    <div className={wrapper}>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default OverflowList;
