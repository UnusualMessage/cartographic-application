import { useState } from "react";
import { FullScreenHandle } from "react-full-screen";

import { view, wrapper } from "./controls.module.scss";

import { LeftButtonGroup, RightButtonGroup } from "./ButtonGroup";
import LayersSwitcher from "./LayersSwitcher";
import Geocoder from "./Geocoder";
import classNames from "classnames";

interface Props {
  handle: FullScreenHandle;
}

const ViewControls = ({ handle }: Props) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isGeocoderOpen, setIsGeocoderOpen] = useState(false);

  return (
    <>
      <div className={classNames(wrapper, view)}>
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
    </>
  );
};

export default ViewControls;
