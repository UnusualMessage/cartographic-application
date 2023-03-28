import { AppstoreOutlined, BorderOutlined } from "@ant-design/icons";
import { TreeProps } from "antd/es/tree";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import { GeozonesStore, geozonesTreeSelectHandler } from "@entities/geozone";
import { geozoneNodes } from "@shared/assets";
import { Geozone, Node } from "@shared/misc";
import { Tree } from "@shared/ui";

import GeozoneMenu from "../GeozoneMenu";

const fillNodes = (nodes?: Geozone[]) => {
  const initial: Node[] = cloneDeep(geozoneNodes);

  if (!nodes) {
    return initial;
  }

  nodes.forEach((field) => {
    const push = (node: Node, field: Geozone) => {
      const hasChildren = field.children.length;

      const newNode: Node = {
        key: field.id,
        title: field.title,
        icon: hasChildren ? <AppstoreOutlined /> : <BorderOutlined />,
        data: field.id,
        children: [],
      };

      if (hasChildren) {
        for (const child of field.children) {
          push(newNode, child);
        }
      }

      node.children?.push(newNode);
    };

    push(initial[0], field);
  });

  return initial;
};

const onRightClick: TreeProps["onRightClick"] = (info) => {
  GeozonesStore.choose(info.node.key.toString());
};

const GeozonesTree = () => {
  const zones = GeozonesStore.geozones;

  return (
    <Tree<Geozone>
      fillNodes={fillNodes}
      source={zones}
      onSelect={geozonesTreeSelectHandler}
      onRightClick={onRightClick}
      defaultSelected={"tree-geozones"}
      menu={<GeozoneMenu />}
    />
  );
};

export default observer(GeozonesTree);
