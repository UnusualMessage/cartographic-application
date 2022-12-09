import { makeAutoObservable } from "mobx";
import { Map, View } from "ol";
import BaseLayer from "ol/layer/Base";
import * as jspdf from "jspdf";
import html2canvas, { Options } from "html2canvas";
import { getPointResolution } from "ol/proj";
import { Coordinate } from "ol/coordinate";

class MapStore {
  private _map: Map | null;
  private _cursorCoordinate: Coordinate | null;

  constructor() {
    this._map = null;
    this._cursorCoordinate = null;

    makeAutoObservable(this);
  }

  public get cursorCoordinate() {
    return this._cursorCoordinate;
  }

  public set cursorCoordinate(coordinate: Coordinate | null) {
    this._cursorCoordinate = coordinate;
  }

  public get map() {
    return this._map;
  }

  public dispose() {
    this._map?.dispose();
    this._map = null;
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

    const exportOptions: Partial<Options> = {
      useCORS: true,
    };

    const format = "a4";
    const resolution = 200;
    const scale = 500;
    const dim = [297, 210];

    const width = Math.round((dim[0] * resolution) / 25.4);
    const height = Math.round((dim[1] * resolution) / 25.4);

    const viewResolution = map.getView().getResolution();
    const scaleResolution =
      scale /
      getPointResolution(
        map.getView().getProjection(),
        resolution / 25.4,
        map.getView().getCenter() ?? [0, 0]
      );

    map.once("rendercomplete", () => {
      exportOptions.width = width;
      exportOptions.height = height;
      html2canvas(map.getViewport(), exportOptions).then(function (canvas) {
        const pdf = new jspdf.jsPDF("landscape", undefined, format);
        pdf.addImage(
          canvas.toDataURL("image/jpeg"),
          "JPEG",
          0,
          0,
          dim[0],
          dim[1]
        );
        pdf.save("map.pdf");
        map.getTargetElement().style.width = "";
        map.getTargetElement().style.height = "";
        map.updateSize();
        map.getView().setResolution(viewResolution);
      });
    });

    map.getTargetElement().style.width = width + "px";
    map.getTargetElement().style.height = height + "px";
    map.updateSize();
    map.getView().setResolution(scaleResolution);
  }

  public addView(view: View) {
    this._map?.setView(view);
  }

  public addLayer(layer: BaseLayer) {
    this._map?.addLayer(layer);
  }

  public removeLayer(layer: BaseLayer) {
    this._map?.removeLayer(layer);
  }
}

export default new MapStore();
