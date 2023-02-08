import { HotkeysProvider } from "@blueprintjs/core";
import React from "react";

import Routing from "../pages";

import "./index.scss";

const App = () => {
  return (
    <HotkeysProvider>
      <Routing />
    </HotkeysProvider>
  );
};

export default App;
