import DrawingStore from "@features/interactions/model/DrawingStore";

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
