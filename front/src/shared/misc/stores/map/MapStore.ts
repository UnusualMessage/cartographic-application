import * as jspdf from "jspdf";
import { makeAutoObservable } from "mobx";
import { Map, View } from "ol";
import { Coordinate } from "ol/coordinate";
import BaseLayer from "ol/layer/Base";

class MapStore {
  private _map?: Map;
  private _cursorCoordinate?: Coordinate;

  constructor() {
    this._map = undefined;
    this._cursorCoordinate = undefined;

    makeAutoObservable(this);
  }

  public get cursorCoordinate() {
    return this._cursorCoordinate;
  }

  public set cursorCoordinate(coordinate) {
    this._cursorCoordinate = coordinate;
  }

  public get map() {
    return this._map;
  }

  public dispose() {
    this._map?.dispose();
    this._map = undefined;
  }

  public setCrosshairCursor() {
    const map = this._map;

    if (map) {
      map.getTargetElement().style.cursor = "crosshair";
    }
  }

  public setDefaultCursor() {
    const map = this._map;

    if (map) {
      map.getTargetElement().style.cursor = "default";
    }
  }

  public initMap(target: HTMLDivElement, view?: View) {
    if (this._map) {
      this._map.setTarget(target);
    } else {
      this._map = new Map({
        target: target,
        view: view,
        layers: [],
        controls: [],
      });
    }
  }

  public printMap() {
    const map = this.map;

    if (!map) {
      return;
    }

    const format = "a4";
    const resolution = 150;
    const dim = [297, 210];

    const width = Math.round((dim[0] * resolution) / 25.4);
    const height = Math.round((dim[1] * resolution) / 25.4);

    const printSize = [width, height];
    const mapSize = map.getSize() ?? [0, 0];
    const scale = Math.max(width / mapSize[0], height / mapSize[1]);

    const mapResolution = map.getView().getResolution() ?? 0;
    const printResolution = mapResolution / scale;

    map.once("rendercomplete", async () => {
      const mapCanvas = document.createElement("canvas");

      mapCanvas.width = width;
      mapCanvas.height = height;

      const mapContext = mapCanvas.getContext("2d");

      if (!mapContext) {
        return;
      }

      const elements = document.querySelectorAll(".ol-layer canvas") as any;

      for (const canvas of elements) {
        if (canvas.width > 0) {
          const transform = canvas.style.transform;

          const matrix = transform
            .match(/^matrix\(([^\(]*)\)$/)[1]
            .split(",")
            .map(Number);

          CanvasRenderingContext2D.prototype.setTransform.apply(
            mapContext,
            matrix
          );
          mapContext.drawImage(canvas, 0, 0);
        }
      }

      const pdf = new jspdf.jsPDF("landscape", undefined, format);

      pdf.addImage(
        mapCanvas.toDataURL("image/jpeg"),
        "JPEG",
        0,
        0,
        dim[0],
        dim[1]
      );
      pdf.save("map.pdf");

      map.setSize(mapSize);
      map.getView().setResolution(mapResolution);
    });

    map.setSize(printSize);
    map.getView().setResolution(printResolution);
  }

  public addView(view: View) {
    this._map?.setView(view);
  }

  public addLayer(layer: BaseLayer) {
    this._map?.addLayer(layer);
  }

  public removeLayer(layer: BaseLayer) {
    this._map?.removeLayer(layer);
    layer.dispose();
  }
}

export default new MapStore();
