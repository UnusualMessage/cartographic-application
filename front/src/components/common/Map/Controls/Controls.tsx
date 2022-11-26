import { useState } from "react";
import { FullScreenHandle } from "react-full-screen";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import { view, wrapper } from "./controls.module.scss";

import { LeftButtonGroup, RightButtonGroup } from "./ButtonGroup";
import LayersSwitcher from "./LayersSwitcher";
import Geocoder from "./Geocoder";
import DrawSelect from "./DrawSelect/DrawSelect";
import { InteractionsStore } from "../../../../stores/map";
import Location from "./Location";

interface Props {
  handle: FullScreenHandle;
}

const Controls = ({ handle }: Props) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isGeocoderOpen, setIsGeocoderOpen] = useState(false);

  return (
    <>
      <div className={classNames(wrapper, view)}>
        {InteractionsStore.isGeozoneInteractionsActive ? <DrawSelect /> : <></>}
        {isPanelOpen ? <LayersSwitcher /> : <></>}
        {isGeocoderOpen ? <Geocoder /> : <></>}
      </div>

      <LeftButtonGroup />
      <RightButtonGroup
        isPanelOpen={isPanelOpen}
        setIsPanelOpen={setIsPanelOpen}
        isGeocoderOpen={isGeocoderOpen}
        setIsGeocoderOpen={setIsGeocoderOpen}
        handlePrint={handle}
      />

      <Location />
    </>
  );
};

export default observer(Controls);
