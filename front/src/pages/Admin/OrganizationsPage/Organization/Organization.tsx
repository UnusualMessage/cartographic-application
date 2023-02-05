import { Button, Card, H5 } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import { image, images, link, wrapper } from "./organization.module.scss";

interface Props {
  id: string;
  title: string;
  text?: string;
}

const Organization = ({ id, title, text }: Props) => {
  return (
    <Card className={wrapper}>
      <div className={images}>
        <img src={"/sample.png"} alt={"org"} className={image} />
        <img src={"/sample.png"} alt={"org"} className={image} />
      </div>

      <H5>{title}</H5>
      <p>{text}</p>

      <Link to={id} className={link}>
        <Button text="Перейти" />
      </Link>
    </Card>
  );
};

export default Organization;
