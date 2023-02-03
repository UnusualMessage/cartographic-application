import { observer } from "mobx-react-lite";
import { cloneDeep } from "lodash";
import classNames from "classnames";
import { TreeEventHandler } from "@blueprintjs/core";

import { fullHeight, wrapper } from "./tree.module.scss";

import EntitiesTree from "../common/EntitiesTree";
import { referenceNodes } from "../../shared/assets/nodes";
import { useNavigate } from "react-router-dom";

const fillNodes = () => {
  return cloneDeep(referenceNodes);
};

const ReferencesTree = () => {
  const navigate = useNavigate();

  const handleClick: TreeEventHandler<any> = (node) => {
    if (node.nodeData) {
      navigate(node.nodeData);
    }
  };

  return (
    <EntitiesTree
      fillNodes={fillNodes}
      className={classNames(wrapper, fullHeight)}
      handleClick={handleClick}
    />
  );
};

export default observer(ReferencesTree);
