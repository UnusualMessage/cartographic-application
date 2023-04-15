import { View } from "ol";
import LayerGroup from "ol/layer/Group";
import VectorSource from "ol/source/Vector";
import { createContext } from "react";

import { SchemaState } from "../misc";

export const SourceContext = createContext<VectorSource | undefined>(undefined);
export const GroupContext = createContext<LayerGroup | undefined>(undefined);
export const SchemaTemplateContext = createContext<SchemaState | undefined>(
  undefined
);
export const ViewContext = createContext<View | undefined>(undefined);
