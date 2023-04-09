import { SchemaState } from "../../../misc";

export const defaultTemplate: SchemaState = {
  view: true,
  layers: true,

  fastControls: {
    fullscreen: true,
    layers: true,
    area: true,
    coordinate: true,
    distance: true,
    zoomIn: true,
    zoomOut: true,
  },

  mainControls: {
    share: true,
    measurement: true,
    print: true,
    menu: true,
  },
};
