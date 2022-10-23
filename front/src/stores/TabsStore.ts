import { makeAutoObservable } from "mobx";
import { TabId } from "@blueprintjs/core";

class TabsStore {
  private _active: boolean;
  private _tabsListId: string;
  private _footerTabId: TabId;

  constructor() {
    this._tabsListId = "";
    this._footerTabId = "";

    this._active = true;

    makeAutoObservable(this);
  }

  public get tabsListId() {
    return this._tabsListId;
  }

  public set tabsListId(id: string) {
    this._tabsListId = id;
  }

  public get footerTabId() {
    return this._footerTabId;
  }

  public set footerTabId(id: TabId) {
    this._footerTabId = id;
  }

  public get active() {
    return this._active;
  }

  public set active(active: boolean) {
    this._active = active;
  }
}

export default new TabsStore();
