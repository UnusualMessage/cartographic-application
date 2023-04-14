import React from "react";

import { Slide } from "@entities/landing";

const OrderSlide = () => {
  return (
    <Slide
      anchorId={"order"}
      prevId={"examples"}
      image={"/images/order.jpg"}
    ></Slide>
  );
};

export default OrderSlide;
