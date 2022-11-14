import { Button, Card, H5 } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import { image, images, link, wrapper } from "./organization.module.scss";

interface Props {
  title: string;
  text?: string;
}

const Organization = ({ title, text }: Props) => {
  return (
    <Card className={wrapper}>
      <div className={images}>
        <img src={"/sample.png"} alt={"org"} className={image} />
        <img src={"/sample.png"} alt={"org"} className={image} />
      </div>

      <H5>{title}</H5>
      <p>{text}</p>

      <Link to={"/"} className={link}>
        <Button text="Перейти" />
      </Link>
    </Card>
  );
};

export default Organization;
