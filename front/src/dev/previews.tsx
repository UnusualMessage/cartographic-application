import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import ContextMenu from "../components/ContextMenu/ContextMenu";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/PaletteTree">
        <PaletteTree />
      </ComponentPreview>
      <ComponentPreview path="/ContextMenu">
        <ContextMenu />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
