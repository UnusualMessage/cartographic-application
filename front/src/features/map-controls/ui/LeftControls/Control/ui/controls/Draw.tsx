import { SendOutlined, CloseSquareOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import { observer } from "mobx-react-lite";

import { measurementLayerId } from "@shared/constants";
import {
  DrawType,
  LayersStore,
  InteractionsStore,
  DrawerStore,
} from "@shared/misc";
import { PolygonFilled } from "@shared/ui";

const Draw = () => {
  const drawType = InteractionsStore.drawType;

  const switchType = (type: DrawType) => {
    LayersStore.clearVectorLayer(measurementLayerId);
    InteractionsStore.drawType = type;
    DrawerStore.hide();
  };

  return (
    <Space>
      <Button
        icon={<CloseSquareOutlined />}
        type={drawType === "none" ? "primary" : "text"}
        onClick={() => switchType("none")}
      />
      <Button
        icon={<SendOutlined />}
        type={drawType === "cursor" ? "primary" : "text"}
        onClick={() => switchType("cursor")}
      />
      <Button
        icon={<PolygonFilled />}
        type={drawType === "geozones" ? "primary" : "text"}
        onClick={() => switchType("geozones")}
      />
    </Space>
  );
};

export default observer(Draw);
