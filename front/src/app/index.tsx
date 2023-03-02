import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";
import React from "react";

import Routing from "../pages";

import "./index.scss";

const App = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <Routing />
    </ConfigProvider>
  );
};

export default App;
