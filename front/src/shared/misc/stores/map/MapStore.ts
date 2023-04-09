import * as jspdf from "jspdf";
import { makeAutoObservable } from "mobx";
import { Map, View } from "ol";
import { GeoJSON } from "ol/format";
import BaseLayer from "ol/layer/Base";
import VectorLayer from "ol/layer/Vector";
import { bbox } from "ol/loadingstrategy";
import VectorSource from "ol/source/Vector";

import { Dimensions } from "../../types";

class MapStore {
  private _map?: Map;
  private _printFormat: "a3" | "a4";

  constructor() {
    this._map = undefined;

    this._printFormat = "a4";

    makeAutoObservable(this);
  }

  public get printFormat() {
    return this._printFormat;
  }

  public set printFormat(value) {
    this._printFormat = value;
  }

  public get dimensions(): Dimensions {
    return this._printFormat === "a4" ? [297, 210] : [420, 297];
  }

  public get map() {
    return this._map;
  }

  public dispose() {
    this._map?.dispose();
    this._map = undefined;
  }

  public setCrosshairCursor() {
    this.setCursor("crosshair");
  }

  public setDefaultCursor() {
    this.setCursor("default");
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

    const source = new VectorSource({
      format: new GeoJSON(),
      url: "http://localhost:3080/geoserver/application/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=application:spatial_data&maxFeatures=50&outputFormat=application/json",
      strategy: bbox,
    });

    const layer = new VectorLayer({
      source: source,
    });

    this.addLayer(layer);
  }

  public printMap() {
    const map = this.map;
    const dimensions: Dimensions =
      this._printFormat === "a4" ? [297, 210] : [420, 297];

    if (!map) {
      return;
    }

    const format = this.printFormat;
    const resolution = 150;

    const width = Math.round((dimensions[0] * resolution) / 25.4);
    const height = Math.round((dimensions[1] * resolution) / 25.4);

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
        dimensions[0],
        dimensions[1]
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

  private setCursor(cursor: string) {
    const map = this._map;

    const el = map?.getViewport();
    const canvas = el?.getElementsByTagName("canvas").item(0);

    if (canvas) {
      canvas.style.cursor = cursor;
    }
  }
}

export default new MapStore();
