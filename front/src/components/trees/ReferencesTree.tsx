import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";
import classNames from "classnames";
import { TreeEventHandler } from "@blueprintjs/core";

import { fullHeight, wrapper } from "./tree.module.scss";

import EntitiesTree from "../common/EntitiesTree";
import { referenceNodes } from "../../assets/nodes/referenceNodes";
import ReferencesStore from "../../stores/ReferencesStore";
import Reference from "../../types/Reference";

const fillNodes = () => {
  return cloneDeep(referenceNodes);
};

const handleClick: TreeEventHandler = (node) => {
  if (node.nodeData) {
    ReferencesStore.currentReference = node.nodeData as Reference;
  }
};

const ReferencesTree = () => {
  return (
    <EntitiesTree
      fillNodes={fillNodes}
      className={classNames(wrapper, fullHeight)}
      handleClick={handleClick}
    />
  );
};

export default observer(ReferencesTree);
