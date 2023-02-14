import { BaseLayerType } from "@shared/misc/types/common";

interface BaseLayerRadioProps {
  label: string;
  value: BaseLayerType;
  source: string;
}

export const baseLayers: BaseLayerRadioProps[] = [
  {
    label: "OpenStreetMap",
    value: "osm",
    source: "OSM",
  },

  {
    label: "OpenTopoMap",
    value: "otm",
    source: "https://tile.opentopomap.org/{z}/{x}/{y}.png",
  },

  {
    label: "Bing.Карты",
    value: "bing-road",
    source: "AjQ9qFMMmfL8LMJ-Bp6a8Ut49IzFK-npLmsUcRWyFaGNvOG-uVgSu3kwHKLY-j8I",
  },

  {
    label: "Bing.Спутник",
    value: "bing-satellite",
    source: "AjQ9qFMMmfL8LMJ-Bp6a8Ut49IzFK-npLmsUcRWyFaGNvOG-uVgSu3kwHKLY-j8I",
  },

  {
    label: "Google.Карты",
    value: "google-road",
    source: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  },

  {
    label: "Google.Спутник",
    value: "google-satellite",
    source: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  },

  {
    label: "Google.Гибрид",
    value: "google-hybrid",
    source: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
  },
];
