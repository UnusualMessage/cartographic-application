import { SendOutlined, CloseSquareOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import { observer } from "mobx-react-lite";

import { InteractionsStore, InteractionType } from "@shared/misc";
import { PolygonFilled } from "@shared/ui";

const Draw = () => {
  const interaction = InteractionsStore.type;

  const switchType = (type: InteractionType) => {
    InteractionsStore.type = type;
  };

  return (
    <Space>
      <Button
        icon={<CloseSquareOutlined />}
        type={interaction === "none" ? "primary" : "text"}
        onClick={() => switchType("none")}
      />
      <Button
        icon={<SendOutlined />}
        type={interaction === "cursor" ? "primary" : "text"}
        onClick={() => switchType("cursor")}
      />
      <Button
        icon={<PolygonFilled />}
        type={interaction === "geozones" ? "primary" : "text"}
        onClick={() => switchType("geozones")}
      />
    </Space>
  );
};

export default observer(Draw);
