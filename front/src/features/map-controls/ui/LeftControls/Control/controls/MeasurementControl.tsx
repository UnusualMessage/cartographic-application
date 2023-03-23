import { AimOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { observer } from "mobx-react-lite";

import { InteractionsStore } from "@shared/misc";
import { AreaMeasurement, LengthMeasurement } from "@shared/ui";

import { switchDrawType } from "../../../RightControls/actions/model";

const { Text } = Typography;

const MeasurementControl = () => {
  const drawType = InteractionsStore.drawType;

  return (
    <>
      <Text strong>Измерение</Text>

      <Space>
        <Button
          icon={<AimOutlined />}
          type={drawType === "measure-coordinate" ? "primary" : "text"}
          onClick={() => switchDrawType(drawType, "measure-coordinate")}
        />

        <Button
          icon={<LengthMeasurement />}
          type={drawType === "measure-length" ? "primary" : "text"}
          onClick={() => switchDrawType(drawType, "measure-length")}
        />

        <Button
          icon={<AreaMeasurement />}
          type={drawType === "measure-area" ? "primary" : "text"}
          onClick={() => switchDrawType(drawType, "measure-area")}
        />
      </Space>
    </>
  );
};

export default observer(MeasurementControl);
