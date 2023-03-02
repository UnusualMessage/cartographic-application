import { TreeNodeInfo } from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";

import { GeozonesStore } from "@entities/geozone";
import { geozoneNodes } from "@shared/assets";
import { getGeozonesTreeClickHandler } from "@shared/lib";
import { Geozone, Node } from "@shared/misc";
import { tree } from "@shared/styles";
import { EntitiesTree } from "@shared/ui";

import GeozoneMenu from "../GeozoneMenu";

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
    <EntitiesTree<Geozone>
      fillNodes={fillNodes}
      source={zones}
      handleClick={getGeozonesTreeClickHandler()}
      className={tree}
    />
  );
};

export default observer(GeozonesTree);
