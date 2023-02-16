import VectorSource from "ol/source/Vector";
import { createContext } from "react";

export const SourceContext = createContext<VectorSource | undefined>(undefined);
