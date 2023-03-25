import { Space } from "antd";

import { Coordinate, Distance, Area } from "../../../../RightControls";

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
