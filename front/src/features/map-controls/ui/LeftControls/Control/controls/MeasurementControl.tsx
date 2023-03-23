import { Space, Typography } from "antd";

import { Coordinate, Distance, Area } from "../../../RightControls";

const { Text } = Typography;

const MeasurementControl = () => {
  return (
    <>
      <Text strong>Измерение</Text>

      <Space>
        <Coordinate type={"text"} />
        <Distance type={"text"} />
        <Area type={"text"} />
      </Space>
    </>
  );
};

export default MeasurementControl;
