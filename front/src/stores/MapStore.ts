import { makeAutoObservable, toJS } from "mobx";
import { Map, View } from "ol";
import BaseLayer from "ol/layer/Base";
import { Draw, Modify, Select, Snap } from "ol/interaction";
import VectorSource from "ol/source/Vector";

import LayersStore from "./LayersStore";

enum Interaction {
  modify,
  draw,
  snap,
}

class MapStore {
  private _map: Map | null;

  constructor() {
    this._map = null;

    makeAutoObservable(this);
  }

  public initMap(view: View, layers: BaseLayer[], target: HTMLDivElement) {
    console.log(toJS(layers));
    this._map = new Map({
      target: target,
      view: view,
      layers: layers,
    });
  }
  
  public initInteractions(source: VectorSource) {
    this.addInteraction(Interaction.modify, source);
    this.addInteraction(Interaction.draw, source);
    this.addInteraction(Interaction.snap, source);
  }
  
  public addInteraction(interactionType: Interaction, source: VectorSource) {
    switch (interactionType) {
      case Interaction.modify:
        const select = new Select();

        const modify = new Modify({
          features: select.getFeatures(),
        });

        this._map?.addInteraction(select);
        this._map?.addInteraction(modify);
        
        break;

      case Interaction.draw:
        const draw = new Draw({
          type: "Polygon",
          source: source,
        });
        
        this._map?.addInteraction(draw);
        
        break;
        
      case Interaction.snap:
        const snap = new Snap({
          source: source,
        });
        
        this._map?.addInteraction(snap);
        
        break;
        
    }
  }

  public addLayer(layer: BaseLayer) {
    this._map?.addLayer(layer);
  }

  public removeLayerByName(name: string) {
    LayersStore.getLayers.forEach((layer) => {
      if (layer.get("name") === name) {
        this._map?.removeLayer(layer);
      }
    });
  }
}

export default new MapStore();
