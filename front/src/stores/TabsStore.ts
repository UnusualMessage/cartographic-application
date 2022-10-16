import { makeAutoObservable } from "mobx";

class TabsStore {
  private _active: boolean;
  private readonly _tabsListId: string;

  constructor() {
    this._tabsListId = "feature";

    this._active = false;

    makeAutoObservable(this);
  }

  public get tabsListId() {
    return this._tabsListId;
  }

  public get active() {
    return this._active;
  }

  public set active(active: boolean) {
    this._active = active;
  }
}

export default new TabsStore();
