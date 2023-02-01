import { Fill, Stroke, Style, Text } from "ol/style";

interface Color {
  red: number;
  green: number;
  blue: number;
}

export const getGeozoneStyle = (color: Color, text: string) => {
  const { red, green, blue } = color;

  return new Style({
    fill: new Fill({
      color: `rgb(${red},${green},${blue},${0.2})`,
    }),
    stroke: new Stroke({
      color: `rgb(${red},${green},${blue},${1})`,
      width: 2,
    }),
    text: new Text({
      font: "14px Calibri,sans-serif",
      text: text,
      fill: new Fill({
        color: "rgba(0, 0, 0, 1)",
      }),
      stroke: new Stroke({
        color: "rgba(255, 255, 255, 1)",
      }),
      overflow: true,
    }),
  });
};
