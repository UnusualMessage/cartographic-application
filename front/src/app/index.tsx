import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";
import React from "react";

import "./index.scss";

import { Routing } from "@processes/routing";

interface ThemeData {
  borderRadius: number;
}

const data: ThemeData = {
  borderRadius: 0,
};

const App = () => {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        token: {
          borderRadius: data.borderRadius,
        },
      }}
    >
      <Routing />
    </ConfigProvider>
  );
};

export default App;
