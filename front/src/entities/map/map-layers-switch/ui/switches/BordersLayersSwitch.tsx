import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import { observer } from "mobx-react-lite";
import VectorLayer from "ol/layer/Vector";
import { useState, Key } from "react";

import { MapStore } from "@shared/misc";

import { borderLayersNodes } from "../../model";

const switchLayerFrom = (first: Key[], second: Key[]) => {
  for (const key of first) {
    if (!second.includes(key)) {
      const id = key.toString();
      const layer = MapStore.getLayerById(id);

      if (layer instanceof VectorLayer) {
        layer.setVisible(!layer.getVisible());
      }
    }
  }
};

const { DirectoryTree } = Tree;

const BordersLayersSwitch = () => {
  const [checkedKeys, setCheckedKeys] = useState<Key[]>([
    "admin_level_2",
    "admin_level_3",
    "admin_level_4",
    "admin_level_5",
    "admin_level_6",
    "admin_level_8",
    "admin_level_9",
  ]);

  const onCheck = (keys: Key[]) => {
    if (keys instanceof Array) {
      switchLayerFrom(keys, checkedKeys);
      switchLayerFrom(checkedKeys, keys);
    }

    setCheckedKeys(keys);
  };

  return (
    <DirectoryTree
      treeData={borderLayersNodes}
      checkedKeys={checkedKeys}
      onCheck={onCheck as any}
      defaultExpandAll
      checkable
      showLine
      selectable={false}
      expandAction={false}
      autoExpandParent={false}
      switcherIcon={<DownOutlined />}
    />
  );
};

export default observer(BordersLayersSwitch);
