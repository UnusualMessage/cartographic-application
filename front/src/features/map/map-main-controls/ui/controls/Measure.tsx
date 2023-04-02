import { Space } from "antd";

import { Coordinate, Distance, Area } from "entities/map";

const Measure = () => {
  return (
    <Space>
      <Coordinate buttonType={"text"} />
      <Distance buttonType={"text"} />
      <Area buttonType={"text"} />
    </Space>
  );
};

export default Measure;
