import { Select } from "ol/interaction";

import { FeaturesStore } from "../../stores";
import type { ListenersInjector, SelectEvent } from "../../types";

class SelectInjector implements ListenersInjector<SelectEvent> {
  private _select: Select;

  constructor(select: Select) {
    this._select = select;
  }

  public addEventListener(event: SelectEvent) {
    switch (event) {
      case "select":
        return this.addSelect();
    }
  }

  private addSelect() {
    const onSelect = () => {
      FeaturesStore.selectedFeatures = this._select
        .getFeatures()
        .getArray()
        .slice();
    };

    this._select.on("select", onSelect);
    console.log("select injected");

    return () => {
      this._select.un("select", onSelect);
      console.log("select removed");
    };
  }
}

export default SelectInjector;
