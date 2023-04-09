import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";
import React from "react";

import "./index.scss";

import { Routing } from "@processes/routing";

const App = () => {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        token: {
          borderRadius: 0,
        },
      }}
    >
      <Routing />
    </ConfigProvider>
  );
};

export default App;
