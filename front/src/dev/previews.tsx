import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import ContextMenu from "../components/ContextMenu/ContextMenu";
import DrawClear from "../components/Controls/DrawClear/DrawClear";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/PaletteTree">
        <PaletteTree />
      </ComponentPreview>
      <ComponentPreview path="/ContextMenu">
        <ContextMenu />
      </ComponentPreview>
      <ComponentPreview path="/DrawClear">
        <DrawClear />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
