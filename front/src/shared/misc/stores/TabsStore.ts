import { makeAutoObservable } from "mobx";

class TabsStore {
  private _footerTabActive: boolean;
  private _siderTabActive: boolean;
  private _adminTabActive: boolean;

  private _active: boolean;

  private _siderTabsListId: string;
  private _siderTabId?: string;

  private _footerTabsListId: string;
  private _footerTabId?: string;

  private _adminTabsListId: string;
  private _adminTabId?: string;

  constructor() {
    this._footerTabsListId = "footer-plans";
    this._footerTabId = undefined;

    this._siderTabsListId = "sider-tabs";
    this._siderTabId = "sider-plans";

    this._adminTabsListId = "admin-tabs";
    this._adminTabId = "admin-home";

    this._footerTabActive = true;
    this._siderTabActive = true;
    this._adminTabActive = true;

    this._active = true;

    makeAutoObservable(this);
  }

  public get adminTabsListId() {
    return this._adminTabsListId;
  }

  public set adminTabsListId(id: string) {
    this._adminTabsListId = id;
  }

  public get adminTabId() {
    return this._adminTabId;
  }

  public set adminTabId(id) {
    this._adminTabId = id;
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
