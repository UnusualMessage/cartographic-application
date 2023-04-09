import VectorSource from "ol/source/Vector";
import { createContext } from "react";

import { SchemaState } from "../misc";

export const SourceContext = createContext<VectorSource | undefined>(undefined);
export const SchemaTemplateContext = createContext<SchemaState | undefined>(
  undefined
);
