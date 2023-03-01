import { TabId } from "@blueprintjs/core";
import { makeAutoObservable } from "mobx";

class TabsStore {
  private _footerTabActive: boolean;
  private _siderTabActive: boolean;
  private _adminTabActive: boolean;

  private _active: boolean;

  private _siderTabsListId: string;
  private _siderTabId?: TabId;

  private _footerTabsListId: string;
  private _footerTabId?: TabId;

  private _adminTabsListId: string;
  private _adminTabId?: TabId;

  constructor() {
    this._footerTabsListId = "footer-geozones";
    this._footerTabId = undefined;

    this._siderTabsListId = "sider-tabs";
    this._siderTabId = "sider-geozones";

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

  public set adminTabId(id: TabId | undefined) {
    this._adminTabId = id;
  }

  public get footerTabsListId() {
    return this._footerTabsListId;
  }

  public set footerTabsListId(id: string) {
    this._footerTabsListId = id;
  }

  public get footerTabId() {
    return this._footerTabId;
  }

  public set footerTabId(id: TabId | undefined) {
    this._footerTabId = id;
  }

  public get siderTabId() {
    return this._siderTabId;
  }

  public set siderTabId(id: TabId | undefined) {
    this._siderTabId = id;
  }

  public set active(active: boolean) {
    this._active = active;
  }
}

export default new TabsStore();
