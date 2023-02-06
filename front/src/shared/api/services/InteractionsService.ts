import DrawingStore from "@entities/stores/map/DrawingStore";

class InteractionsService {
  public startDrawing() {
    DrawingStore.isDrawing = true;
  }

  public stopDrawing() {
    DrawingStore.isDrawing = false;
  }

  public getInteractionType() {
    return DrawingStore.interactionType;
  }
}

export default new InteractionsService();
