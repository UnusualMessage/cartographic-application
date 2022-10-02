import { makeAutoObservable } from "mobx";

import Tab from "../types/Tab";
import { tabsComponents } from "../assets/tabsComponents";

class TableTabsStore {
  private _tabsList: Tab[];
  private _active: boolean;

  constructor() {
    this._tabsList = [tabsComponents[0], tabsComponents[1]];

    this._active = false;

    makeAutoObservable(this);
  }

  public get tabsList() {
    return this._tabsList;
  }

  public set tabsList(list: Tab[]) {
    this._tabsList = list;
  }

  public get active() {
    return this._active;
  }

  public set active(active: boolean) {
    this._active = active;
  }
}

export default new TableTabsStore();
