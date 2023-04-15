import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import VectorLayer from "ol/layer/Vector";
import { useState, Key } from "react";

import {
  transportLayerId,
  geozonesLayerId,
  measurementLayerId,
} from "@shared/constants";
import { MapStore } from "@shared/misc";

import { vectorLayersNodes } from "../../model";

const { DirectoryTree } = Tree;

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

const VectorLayersSwitch = () => {
  const [checkedKeys, setCheckedKeys] = useState<Key[]>([
    transportLayerId,
    geozonesLayerId,
    measurementLayerId,
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
      treeData={vectorLayersNodes}
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

export default VectorLayersSwitch;
