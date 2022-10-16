import { Button, ButtonGroup, Radio, RadioGroup } from "@blueprintjs/core";
import { FormEventHandler, useState } from "react";
import classNames from "classnames";
import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";

import {
  leftButtons,
  rightButtons,
  view,
  wrapper,
} from "./controls.module.scss";

import {
  InteractionsStore,
  LayersStore,
  MapStore,
  ViewStore,
} from "../../../stores";
import { BaseLayerType } from "../../../types/BaseLayerType";

interface Props {
  handle: FullScreenHandle;
}

const ViewControls = ({ handle }: Props) => {
  const [visible, setVisible] = useState(false);

  const measurementActive = InteractionsStore.measurementActive;

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

  const switchMeasurement = () => {
    InteractionsStore.measurementActive = !measurementActive;
  };

  return (
    <>
      {visible ? (
        <div className={classNames(wrapper, view)}>
          <RadioGroup
            onChange={handleChoose}
            selectedValue={LayersStore.currentBaseLayer}
            label={"Вид карты"}
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

        <Button
          icon="wrench"
          intent={measurementActive ? "primary" : "none"}
          onClick={switchMeasurement}
        />

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
