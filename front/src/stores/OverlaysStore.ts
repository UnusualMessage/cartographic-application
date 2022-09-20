import { makeAutoObservable, runInAction } from "mobx";
import { Feature, Map, Overlay } from "ol";
import { Coordinate } from "ol/coordinate";

import { menuId, menuOffset, overlayId, overlayOffset } from "../assets/config";
import { Pixel } from "ol/pixel";
import { FeatureLike } from "ol/Feature";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Circle, Geometry, Point } from "ol/geom";
import { GeoJSON } from "ol/format";
import { AllGeoJSON, centerOfMass, lineString } from "@turf/turf";

interface CustomOverlay {
  element: HTMLDivElement;
  overlay: Overlay;
  active: boolean;
}

class OverlaysStore {
  private _featureInfo: CustomOverlay | null;
  private _contextMenu: CustomOverlay | null;

  private _selectedFeatures: FeatureLike[];
  private _copiedFeatures: FeatureLike[];

  private _cursorPosition: Coordinate | null;

  constructor() {
    this._featureInfo = null;
    this._contextMenu = null;

    this._selectedFeatures = [];
    this._copiedFeatures = [];

    this._cursorPosition = null;

    makeAutoObservable(this);
  }

  public removeFeatureOverlay(map: Map) {
    if (this._featureInfo) {
      this.hideOverlay(this._featureInfo);
      map.removeOverlay(this._featureInfo.overlay);
      this._featureInfo = null;
    }
  }

  public initFeatureOverlay(element: HTMLDivElement, map: Map) {
    const overlay = new Overlay({
      element: element,
      offset: overlayOffset,
      id: overlayId,
    });

    this._featureInfo = {
      overlay: overlay,
      element: element,
      active: false,
    };

    map.on("click", (e) => {
      const pixel = map.getEventPixel(e.originalEvent);
      const features = map.getFeaturesAtPixel(pixel);

      this.hideContextMenu();

      if (!features.length) {
        this.hideOverlay(this._featureInfo);
        return;
      }

      this.showOverlay(this._featureInfo, map.getCoordinateFromPixel(pixel));
    });

    map.addOverlay(overlay);
  }

  public initContextMenu(element: HTMLDivElement, map: Map) {
    const overlay = new Overlay({
      element: element,
      offset: menuOffset,
      id: menuId,
    });

    this._contextMenu = {
      overlay: overlay,
      element: element,
      active: false,
    };

    const el = map.getViewport();
    const canvas = el.getElementsByTagName("canvas").item(0);

    canvas?.addEventListener("contextmenu", (e) => {
      const pixel: Pixel = map.getEventPixel(e);
      const cursor: Coordinate = map.getCoordinateFromPixel(pixel);

      this.showOverlay(this._contextMenu, cursor);
      this.hideOverlay(this._featureInfo);

      const features = map.getFeaturesAtPixel(pixel);

      runInAction(() => {
        this._selectedFeatures = features;
        this._cursorPosition = cursor;
      });
    });

    map.addOverlay(overlay);
  }

  private hideOverlay(overlay: CustomOverlay | null) {
    if (overlay) {
      overlay.active = false;
      overlay.overlay.setPosition(undefined);
    }
  }

  public hideContextMenu() {
    this.hideOverlay(this._contextMenu);
  }

  private showOverlay(overlay: CustomOverlay | null, coordinates: Coordinate) {
    if (overlay) {
      overlay.active = true;
      overlay.overlay.setPosition(coordinates);
    }
  }

  public copy() {
    this._copiedFeatures = this._selectedFeatures.slice();
    this.hideContextMenu();
  }

  private getFeaturesCenter(features: FeatureLike[]) {
    const centers: Coordinate[] = [];

    features.forEach((feature) => {
      const geometry = (feature.getGeometry() as Geometry).clone();

      if (geometry.getType() === "Circle") {
        const circle = geometry as Circle;
        centers.push(circle.getCenter());
      } else {
        const format = new GeoJSON();

        const formattedGeometry = format.writeGeometryObject(geometry);
        const featureCenter = centerOfMass(formattedGeometry as AllGeoJSON)
          .geometry.coordinates;

        centers.push(featureCenter);
      }
    });

    return centerOfMass(lineString(centers)).geometry.coordinates;
  }

  public insert(targetLayer: VectorLayer<VectorSource>) {
    const source = targetLayer.getSource();
    const cursor = this.cursorPosition;

    if (!cursor) {
      return;
    }

    const featuresCenter = this.getFeaturesCenter(this.copiedFeatures);

    this.copiedFeatures.forEach((feature) => {
      const geometry = (feature.getGeometry() as Geometry).clone();

      geometry.translate(
        cursor[0] - featuresCenter[0],
        cursor[1] - featuresCenter[1]
      );

      const newFeature = new Feature(geometry);
      source?.addFeature(newFeature);
    });

    this.hideContextMenu();
  }

  public delete(targetLayer: VectorLayer<VectorSource>) {
    const source = targetLayer.getSource();

    this.selectedFeatures.forEach((feature) => {
      source?.removeFeature(feature as Feature);
    });

    this.hideContextMenu();
  }

  public get isFeatureInfoActive() {
    return this._featureInfo?.active;
  }

  public get isContextMenuActive() {
    return this._contextMenu?.active;
  }

  public get selectedFeatures() {
    return this._selectedFeatures;
  }

  public get copiedFeatures() {
    return this._copiedFeatures;
  }

  public get cursorPosition() {
    return this._cursorPosition;
  }
}

export default new OverlaysStore();
