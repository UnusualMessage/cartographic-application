import React from "react";

import Sider from "../../../components/Sider";
import { ViewMap } from "../../../components/Map";
import Footer from "../../../components/Footer";
import Loader from "../../../components/common/Loader";
import Categories from "../../../components/Sider/Categories";
import TabsList from "../../../components/Footer/TabsList";
import Content from "../../../components/Content";

const View = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Sider>
        <Categories fill />
      </Sider>
      <Content>
        <ViewMap />
        <Footer>
          <TabsList />
        </Footer>
      </Content>
    </React.Suspense>
  );
};

export default View;
