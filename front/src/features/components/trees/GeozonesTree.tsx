import { Divider, TreeNodeInfo } from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import { Node } from "@shared/api/types/nodes";
import { geozoneNodes } from "@shared/assets";
import { getGeozonesTreeClickHandler } from "@shared/lib";

import { wrapper } from "./tree.module.scss";
import { GeozonesStore } from "../../../entities/stores/entities";
import { Geozone } from "../../../shared/api/types/entities";
import EntitiesTree from "../../../shared/ui/EntitiesTree";
import { GeozoneMenu } from "../menus";

const fillNodes = (nodes?: Geozone[]) => {
  const initial: Node[] = cloneDeep(geozoneNodes);

  if (!nodes) {
    return initial;
  }

  nodes.forEach((field) => {
    const push = (node: TreeNodeInfo<any>, field: Geozone) => {
      const hasChildren = field.children.length;

      const newNode: TreeNodeInfo<any> = {
        id: field.id,
        label: (
          <ContextMenu2
            content={<GeozoneMenu id={field.id} title={field.title} />}
          >
            {field.title}
          </ContextMenu2>
        ),
        icon: hasChildren ? "layers" : "layer",
        nodeData: field.id,
        childNodes: [],
      };

      if (hasChildren) {
        for (const child of field.children) {
          push(newNode, child);
        }
      }

      if (newNode.childNodes) {
        newNode.hasCaret = newNode.childNodes.length > 0;
      }

      node.childNodes?.push(newNode);
    };

    push(initial[0], field);
  });

  return initial;
};

const GeozonesTree = () => {
  const zones = GeozonesStore.geozones;

  return (
    <>
      <Divider />
      <EntitiesTree<Geozone>
        fillNodes={fillNodes}
        source={zones}
        handleClick={getGeozonesTreeClickHandler()}
        className={wrapper}
      />
    </>
  );
};

export default observer(GeozonesTree);
