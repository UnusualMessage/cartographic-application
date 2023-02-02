import { TreeEventHandler } from "@blueprintjs/core";
import classNames from "classnames";
import { cloneDeep } from "lodash";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { referenceNodes } from "../../shared/assets";
import EntitiesTree from "../../shared/ui/EntitiesTree";
import {
  fullHeight,
  wrapper,
} from "../../shared/ui/EntitiesTree/tree.module.scss";

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
