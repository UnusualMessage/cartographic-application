import { BaseLayers } from "../../misc";

interface BaseLayerChoice {
  label: string;
  value: BaseLayers;
  source: string;
}

export const baseLayers: BaseLayerChoice[] = [
  {
    label: "OpenStreetMap",
    value: BaseLayers.osm,
    source: "OSM",
  },

  {
    label: "OpenTopoMap",
    value: BaseLayers.otm,
    source: "https://tile.opentopomap.org/{z}/{x}/{y}.png",
  },

  {
    label: "Bing.Карты",
    value: BaseLayers.bingRoad,
    source: "AjQ9qFMMmfL8LMJ-Bp6a8Ut49IzFK-npLmsUcRWyFaGNvOG-uVgSu3kwHKLY-j8I",
  },

  {
    label: "Bing.Спутник",
    value: BaseLayers.bingSatellite,
    source: "AjQ9qFMMmfL8LMJ-Bp6a8Ut49IzFK-npLmsUcRWyFaGNvOG-uVgSu3kwHKLY-j8I",
  },

  {
    label: "Google.Карты",
    value: BaseLayers.googleRoad,
    source: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  },

  {
    label: "Google.Спутник",
    value: BaseLayers.googleSatellite,
    source: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  },

  {
    label: "Google.Гибрид",
    value: BaseLayers.googleHybrid,
    source: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
  },
];
