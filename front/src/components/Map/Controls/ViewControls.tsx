import {
  Button,
  ButtonGroup,
  Radio,
  RadioGroup,
  Tree,
} from "@blueprintjs/core";
import { FormEventHandler, useState } from "react";
import classNames from "classnames";
import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";

import {
  leftButtons,
  offset,
  rightButtons,
  wrapper,
} from "./controls.module.scss";

import { Node } from "../../../types/Node";
import useTreeActions from "../../../hooks/useTreeActions";
import { LayersStore, MapStore, ViewStore } from "../../../stores";
import { BaseLayerType } from "../../../types/BaseLayerType";

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

  const print = () => {
    MapStore.printMap();
  };

  const handleChoose: FormEventHandler<HTMLInputElement> = (e) => {
    LayersStore.currentBaseLayer = e.currentTarget.value as BaseLayerType;
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

          <RadioGroup
            onChange={handleChoose}
            selectedValue={LayersStore.currentBaseLayer}
          >
            <Radio label="OpenStreetMap" value="osm" />
            <Radio label="OpenTopoMap" value="otm" />
            <Radio label="Bing.Карты" value="bing-road" />
            <Radio label="Bing.Спутник" value="bing-satellite" />
            <Radio label="Google.Карты" value="google-road" />
            <Radio label="Google.Спутник" value="google-satellite" />
            <Radio label="Google.Гибрид" value="google-hybrid" />
          </RadioGroup>
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
        <Button
          icon="fullscreen"
          intent={handle.active ? "primary" : "none"}
          onClick={handle.active ? handle.exit : handle.enter}
        />
        <Button icon="print" intent={"none"} onClick={print} />
      </ButtonGroup>

      <ButtonGroup vertical className={leftButtons}>
        <Button icon="zoom-in" onClick={zoomIn} />
        <Button icon="zoom-out" onClick={zoomOut} />
      </ButtonGroup>
    </>
  );
};

export default observer(ViewControls);
