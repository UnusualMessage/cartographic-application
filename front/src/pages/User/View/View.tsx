import React from "react";

import Sider from "../../../components/common/Sider";
import { ViewMap } from "../../../components/common/Map";
import Footer from "../../../components/common/Footer";
import Loader from "../../../components/auxiliary/Loader";
import Categories from "../../../components/common/Sider/Categories";
import TabsList from "../../../components/common/Footer/TabsList";
import Content from "../../../components/common/Content";

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
