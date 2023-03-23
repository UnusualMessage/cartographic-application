import { Space } from "antd";

import { Coordinate, Distance, Area } from "../../../../RightControls";

const Measure = () => {
  return (
    <>
      <Space>
        <Coordinate type={"text"} />
        <Distance type={"text"} />
        <Area type={"text"} />
      </Space>
    </>
  );
};

export default Measure;
