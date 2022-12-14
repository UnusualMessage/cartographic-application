import { Draw } from "ol/interaction";
import { v4 as uuid } from "uuid";
import { FeatureLike } from "ol/Feature";
import { DrawEvent } from "ol/interaction/Draw";
import { Polygon } from "ol/geom";
import {
  area,
  Feature,
  Polygon as IPolygon,
  polygon,
  toWgs84,
} from "@turf/turf";

import ListenersInjector, {
  DrawEvent as DrawEventType,
} from "./ListenersInjector";
import { InteractionsStore } from "../../stores/map";
import { Change, ChangeSet, Undo } from "../../types/map";
import { LayersService } from "../map";
import { geozonesLayerId } from "../../assets/map/config";
import { GeozonesStore, OrganizationsStore } from "../../stores/entities";
import { getGeozoneStyle } from "../../utils/styles/getGeozoneStyle";

class DrawInjector implements ListenersInjector<DrawEventType> {
  private _draw: Draw;

  constructor(draw: Draw) {
    this._draw = draw;
  }

  public addEventListener(event: DrawEventType) {
    switch (event) {
      case "drawstart":
        return this.addDrawStart();
      case "drawabort":
        return this.addDrawAbort();
      case "drawend":
        return this.addDrawEnd();
    }
  }

  private addDrawStart() {
    const onDrawStart = () => {
      InteractionsStore.isDrawing = true;
    };

    this._draw.on("drawstart", onDrawStart);

    return () => {
      this._draw.un("drawstart", onDrawStart);
    };
  }

  private addDrawEnd() {
    const onDrawEnd = (event: DrawEvent) => {
      InteractionsStore.isDrawing = false;
      const interactionType = InteractionsStore.interactionType;

      const feature = event.feature;
      feature.setId(uuid());

      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      const color = {
        red,
        green,
        blue,
      };

      if (interactionType === "geozones") {
        const geometry = feature.getGeometry() as Polygon | undefined;
        const organization = OrganizationsStore.organization;
        const id = uuid();

        if (geometry && organization) {
          const savedFeature: Feature<IPolygon> = {
            id: id,
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: geometry.getCoordinates(),
            },
            properties: {},
          };

          const geozoneArea = area(
            polygon(toWgs84(savedFeature).geometry.coordinates)
          );
          const title = "* ??/??/1";

          if (savedFeature.properties) {
            savedFeature.properties.style = getGeozoneStyle(
              color,
              `${title}: ${(geozoneArea / 1e5).toFixed(2)} ????`
            );
          }

          GeozonesStore.add({
            id: id,
            title: title,
            area: geozoneArea,
            type: "field",
            children: [],
            feature: savedFeature,
            organization,
          });
        }

        const undo: Undo<FeatureLike> = (oldValue, newValue) => {
          LayersService.removeFeatureFromLayer(newValue, geozonesLayerId);
          GeozonesStore.remove(newValue.getId()?.toString() ?? "");
        };

        const set: ChangeSet<FeatureLike> = [];

        const change: Change<FeatureLike> = {
          action: "createFeature",
          oldValue: feature,
          newValue: feature,
          undo: undo,
        };

        set.push(change);

        GeozonesStore.push(set);
      }
    };

    this._draw.on("drawend", onDrawEnd);

    return () => {
      this._draw.un("drawend", onDrawEnd);
    };
  }

  private addDrawAbort() {
    const onDrawAbort = () => {
      InteractionsStore.isDrawing = false;
    };

    this._draw.on("drawabort", onDrawAbort);

    return () => {
      this._draw.un("drawabort", onDrawAbort);
    };
  }
}

export default DrawInjector;
