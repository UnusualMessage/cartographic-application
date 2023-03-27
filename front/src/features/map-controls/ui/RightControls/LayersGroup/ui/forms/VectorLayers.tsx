import { DownOutlined, CarOutlined, ToolOutlined } from "@ant-design/icons";
import { Tree, Typography, message } from "antd";
import { DirectoryTreeProps } from "antd/es/tree";
import { useState, Key } from "react";

import {
  transportLayerId,
  geozonesLayerId,
  measurementLayerId,
} from "@shared/constants";
import { Node, LayersStore } from "@shared/misc";
import { LayersFilled } from "@shared/ui";

const { DirectoryTree } = Tree;
const { Text } = Typography;

const nodes: Node[] = [
  {
    title: "Векторные слои",
    key: "vector-layers",
    icon: <></>,
    children: [
      {
        title: "Техника",
        key: transportLayerId,
        icon: <CarOutlined />,
      },

      {
        title: "Геозоны",
        key: geozonesLayerId,
        icon: <LayersFilled />,
      },

      {
        title: "Измерение",
        key: measurementLayerId,
        icon: <ToolOutlined />,
      },
    ],
  },
];

const VectorLayers = () => {
  const [checkedKeys, setCheckedKeys] = useState<Key[]>([
    transportLayerId,
    geozonesLayerId,
    measurementLayerId,
  ]);

  const onRightClick: DirectoryTreeProps["onRightClick"] = (info) => {
    void message.info(info.node.title?.toString());
  };

  const onCheck = (keys: Key[]) => {
    if (keys instanceof Array) {
      for (const key of keys) {
        if (!checkedKeys.includes(key)) {
          LayersStore.switchVectorLayer(key.toString());
        }
      }

      for (const key of checkedKeys) {
        if (!keys.includes(key)) {
          LayersStore.switchVectorLayer(key.toString());
        }
      }
    }

    setCheckedKeys(keys);
  };

  return (
    <>
      <Text strong>Векторные</Text>
      <DirectoryTree
        treeData={nodes}
        checkedKeys={checkedKeys}
        onCheck={onCheck as any}
        onRightClick={onRightClick}
        defaultExpandAll
        checkable
        showLine
        selectable={false}
        expandAction={false}
        autoExpandParent={false}
        switcherIcon={<DownOutlined />}
      />
    </>
  );
};

export default VectorLayers;
