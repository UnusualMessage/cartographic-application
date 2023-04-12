import { Draw } from "ol/interaction";
import { DrawEvent } from "ol/interaction/Draw";
import { v4 as uuid } from "uuid";

import { Interactions, DrawEvents } from "../../enums";
import { InteractionsStore, FeaturesStore } from "../../stores";
import type { ListenersInjector } from "../../types";

class DrawInjector implements ListenersInjector<DrawEvents> {
  private _draw: Draw;

  constructor(draw: Draw) {
    this._draw = draw;
  }

  public addEventListener(event: DrawEvents) {
    switch (event) {
      case DrawEvents.drawstart:
        return this.addDrawStart();
      case DrawEvents.drawabort:
        return this.addDrawAbort();
      case DrawEvents.drawend:
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

      if (type === Interactions.geozones) {
        FeaturesStore.addFeature(feature);
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
