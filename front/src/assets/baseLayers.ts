import { BaseLayerType } from "../types/BaseLayerType";

interface BaseLayerRadioProps {
  label: string;
  value: BaseLayerType;
}

export const baseLayers: BaseLayerRadioProps[] = [
  {
    label: "OpenStreetMap",
    value: "osm",
  },

  {
    label: "OpenTopoMap",
    value: "otm",
  },

  {
    label: "Bing.Карты",
    value: "bing-road",
  },

  {
    label: "Bing.Спутник",
    value: "bing-satellite",
  },

  {
    label: "Google.Карты",
    value: "google-road",
  },

  {
    label: "Google.Спутник",
    value: "google-satellite",
  },

  {
    label: "Google.Гибрид",
    value: "google-hybrid",
  },
];
