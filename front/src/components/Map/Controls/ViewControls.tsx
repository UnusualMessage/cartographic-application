import { Button, ButtonGroup, Tree } from "@blueprintjs/core";
import { useState } from "react";
import classNames from "classnames";

import {
  leftButtons,
  offset,
  rightButtons,
  wrapper,
} from "./controls.module.scss";

import { Node } from "../../../types/Node";
import useTreeActions from "../../../hooks/useTreeActions";
import { ViewStore } from "../../../stores";
import { FullScreenHandle } from "react-full-screen";

const initialNodes: Node[] = [
  {
    id: "controls-layers",
    icon: "globe",
    label: "Вид карты",
    isExpanded: true,
    childNodes: [],
  },

  {
    id: "controls-weather",
    icon: "rain",
    label: "Погода",
    isExpanded: true,
    childNodes: [],
  },

  {
    id: "controls-equipment",
    icon: "tractor",
    label: "Техника",
    isExpanded: false,
    childNodes: [],
  },

  {
    id: "controls-fields",
    icon: "layers",
    label: "Поля",
    isExpanded: false,
    childNodes: [],
  },
  {
    id: "controls-govern",
    icon: "map",
    label: "Кадастровые зоны",
    isExpanded: false,
    childNodes: [],
  },
  {
    id: "controls-unused",
    icon: "layer-outline",
    label: "Неиспользуемые территории",
    isExpanded: false,
    childNodes: [],
  },
];

interface Props {
  handle: FullScreenHandle;
}

const ViewControls = ({ handle }: Props) => {
  const [visible, setVisible] = useState(false);
  const [nodes, setNodes] = useState<Node[]>(initialNodes);

  const { handleNodeCollapse, handleNodeExpand } = useTreeActions({
    nodes,
    setNodes,
  });

  const handleVisibility = () => {
    setVisible(!visible);
  };

  const zoomIn = () => {
    ViewStore.zoomIn();
  };

  const zoomOut = () => {
    ViewStore.zoomOut();
  };

  return (
    <>
      {visible ? (
        <div className={classNames(wrapper, offset)}>
          <Tree
            contents={nodes}
            onNodeCollapse={handleNodeCollapse}
            onNodeExpand={handleNodeExpand}
          />
        </div>
      ) : (
        <></>
      )}

      <ButtonGroup vertical large className={rightButtons}>
        <Button
          icon="layers"
          intent={visible ? "primary" : "none"}
          onClick={handleVisibility}
        />
        <Button icon="wrench" intent={"none"} />
        <Button icon="fullscreen" intent={"none"} onClick={handle.enter} />
        <Button icon="print" intent={"none"} />
      </ButtonGroup>

      <ButtonGroup vertical className={leftButtons}>
        <Button icon="zoom-in" onClick={zoomIn} />
        <Button icon="zoom-out" onClick={zoomOut} />
      </ButtonGroup>
    </>
  );
};

export default ViewControls;
