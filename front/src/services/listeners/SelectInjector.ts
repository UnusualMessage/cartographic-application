import { Select } from "ol/interaction";

import { FeaturesStore } from "../../stores/map";
import ListenersInjector, { SelectEvent } from "./ListenersInjector";

class SelectInjector implements ListenersInjector<SelectEvent> {
  private _select: Select;

  constructor(select: Select) {
    this._select = select;
  }

  public addEventListener(event: SelectEvent): void {
    switch (event) {
      case "select":
        this.addSelect();
    }
  }

  private addSelect() {
    this._select.on("select", () => {
      FeaturesStore.selectedFeatures = this._select
        .getFeatures()
        .getArray()
        .slice();
    });
  }
}

export default SelectInjector;
