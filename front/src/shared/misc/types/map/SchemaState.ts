import { DeepPartial } from "react-hook-form";

export type SchemaState = DeepPartial<{
  view: boolean;
  layers: boolean;

  misc: {
    print: boolean;
  };

  fastControls: {
    fullscreen: boolean;
    area: boolean;
    distance: boolean;
    coordinate: boolean;
    layers: boolean;
    zoomIn: boolean;
    zoomOut: boolean;
  };

  mainControls: {
    print: boolean;
    measurement: boolean;
    share: boolean;
    menu: boolean;
  };
}>;
