import { Select } from "ol/interaction";

import { FeaturesStore } from "../../stores/map";
import ListenersInjector, { SelectEvent } from "./ListenersInjector";

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

    return () => {
      this._select.un("select", onSelect);
    };
  }
}

export default SelectInjector;
