import { makeAutoObservable } from "mobx";

class TabsStore {
  private _siderTabsListId: string;
  private _siderTabId: string;

  private _footerTabsListId: string;
  private _footerTabId?: string;

  constructor() {
    this._footerTabsListId = "footer-plans";
    this._footerTabId = undefined;

    this._siderTabsListId = "sider-tabs";
    this._siderTabId = "sider-plans";

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

  public switchFooterTabs(id: string) {
    if (this.footerTabsListId !== id) {
      this.footerTabsListId = id;
      this.footerTabId = undefined;
    }
  }
}

export default new TabsStore();
