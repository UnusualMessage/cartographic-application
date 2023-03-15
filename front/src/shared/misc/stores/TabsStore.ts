import { makeAutoObservable } from "mobx";

class TabsStore {
  private _footerTabActive: boolean;
  private _siderTabActive: boolean;

  private _active: boolean;

  private _siderTabsListId: string;
  private _siderTabId?: string;

  private _footerTabsListId: string;
  private _footerTabId?: string;

  constructor() {
    this._footerTabsListId = "footer-plans";
    this._footerTabId = undefined;

    this._siderTabsListId = "sider-tabs";
    this._siderTabId = "sider-plans";

    this._footerTabActive = true;
    this._siderTabActive = true;

    this._active = true;

    makeAutoObservable(this);
  }

  public get footerTabsListId() {
    return this._footerTabsListId;
  }

  public set footerTabsListId(id) {
    this._footerTabsListId = id;
  }

  public get footerTabId() {
    return this._footerTabId;
  }

  public set footerTabId(id) {
    this._footerTabId = id;
  }

  public get siderTabId() {
    return this._siderTabId;
  }

  public set siderTabId(id) {
    this._siderTabId = id;
  }

  public set active(active: boolean) {
    this._active = active;
  }
}

export default new TabsStore();
