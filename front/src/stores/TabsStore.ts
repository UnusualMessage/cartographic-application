import { makeAutoObservable } from "mobx";

class TabsStore {
  private _active: boolean;
  private _tabsListId: string;

  constructor() {
    this._tabsListId = "footer-plans";

    this._active = false;

    makeAutoObservable(this);
  }

  public get tabsListId() {
    return this._tabsListId;
  }

  public set tabsListId(id: string) {
    this._tabsListId = id;
  }

  public get active() {
    return this._active;
  }

  public set active(active: boolean) {
    this._active = active;
  }
}

export default new TabsStore();
