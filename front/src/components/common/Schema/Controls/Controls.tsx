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
import Condition from "../../../auxiliary/Condition";

interface Props {
  handle: FullScreenHandle;
}

const Controls = ({ handle }: Props) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isGeocoderOpen, setIsGeocoderOpen] = useState(false);

  return (
    <>
      <div className={classNames(wrapper, view)}>
        <Condition truthy={isPanelOpen}>
          <LayersSwitcher />
        </Condition>

        <Condition truthy={InteractionsStore.isGeozoneInteractionsActive}>
          <DrawSelect />
        </Condition>

        <Condition truthy={isGeocoderOpen}>
          <Geocoder />
        </Condition>
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
