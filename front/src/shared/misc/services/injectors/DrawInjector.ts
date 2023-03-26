import {
  area,
  Feature,
  Polygon as IPolygon,
  polygon,
  toWgs84,
} from "@turf/turf";
import { Polygon } from "ol/geom";
import { Draw } from "ol/interaction";
import { DrawEvent } from "ol/interaction/Draw";
import { v4 as uuid } from "uuid";

import { GeozonesStore } from "@entities/geozone";
import { OrganizationsStore } from "@entities/organization";

import { InteractionsStore, FeaturesStore } from "../../stores";
import type {
  ListenersInjector,
  DrawEvent as DrawEventType,
  Properties,
} from "../../types";

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
      InteractionsStore.startInteraction();
    };

    this._draw.on("drawstart", onDrawStart);
    console.log("drawstart injected");

    return () => {
      this._draw.un("drawstart", onDrawStart);
      console.log("drawstart removed");
    };
  }

  private addDrawEnd() {
    const onDrawEnd = (event: DrawEvent) => {
      InteractionsStore.stopInteraction();
      const type = InteractionsStore.type;

      const feature = event.feature;
      feature.setId(uuid());

      if (type === "geozones") {
        const geometry = feature.getGeometry() as Polygon | undefined;
        const organization = OrganizationsStore.organization;
        const id = uuid();

        if (geometry && organization) {
          const savedFeature: Feature<IPolygon, Properties> = {
            id: id,
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: geometry.getCoordinates(),
            },
            properties: {
              center: geometry.getInteriorPoint().getCoordinates(),
            },
          };

          const geozoneArea = area(
            polygon(toWgs84(savedFeature).geometry.coordinates)
          );
          const title = "Новая геозона";

          GeozonesStore.add({
            id: id,
            title: title,
            area: geozoneArea,
            type: "field",
            feature: savedFeature,
            children: [],

            organization,
          });

          FeaturesStore.addFeature(feature);
        }
      }
    };

    this._draw.on("drawend", onDrawEnd);
    console.log("drawend injected");

    return () => {
      this._draw.un("drawend", onDrawEnd);
      console.log("drawend removed");
    };
  }

  private addDrawAbort() {
    const onDrawAbort = () => {
      InteractionsStore.stopInteraction();
    };

    this._draw.on("drawabort", onDrawAbort);
    console.log("drawabort injected");

    return () => {
      this._draw.un("drawabort", onDrawAbort);
      console.log("drawabort removed");
    };
  }
}

export default DrawInjector;
