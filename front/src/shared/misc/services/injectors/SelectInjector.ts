import { Select } from "ol/interaction";

import { SelectEvents } from "../../enums";
import { FeaturesStore } from "../../stores";
import type { ListenersInjector } from "../../types";

class SelectInjector implements ListenersInjector<SelectEvents> {
  private _select: Select;

  constructor(select: Select) {
    this._select = select;
  }

  public addEventListener(event: SelectEvents) {
    switch (event) {
      case SelectEvents.select:
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
