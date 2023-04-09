import { Overlay } from "ol";

export interface CustomOverlay {
  element?: HTMLElement;
  overlay?: Overlay;
  active: boolean;
}
