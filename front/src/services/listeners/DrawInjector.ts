import { Draw } from "ol/interaction";

import ListenersInjector, { DrawEvent } from "./ListenersInjector";
import InteractionsStore from "../../stores/InteractionsStore";

class DrawInjector implements ListenersInjector<DrawEvent> {
  private _draw: Draw;

  constructor(draw: Draw) {
    this._draw = draw;
  }

  private addDrawStart() {
    this._draw.on("drawstart", () => {
      InteractionsStore.isDrawing = true;
    });
  }

  private addDrawEnd() {
    this._draw.on("drawend", () => {
      InteractionsStore.isDrawing = false;
    });
  }

  private addDrawAbort() {
    this._draw.on("drawend", () => {
      InteractionsStore.isDrawing = false;
    });
  }

  public addEventListener(event: DrawEvent): void {
    switch (event) {
      case "drawstart":
        this.addDrawStart();
        break;
      case "drawabort":
        this.addDrawAbort();
        break;
      case "drawend":
        this.addDrawEnd();
        break;
    }
  }
}

export default DrawInjector;
