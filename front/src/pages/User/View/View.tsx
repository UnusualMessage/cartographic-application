import React from "react";

import { wrapper } from "./view.module.scss";

import Sider from "../../../components/Sider";
import { ViewMap } from "../../../components/Map";
import Footer from "../../../components/Footer";
import Loader from "../../../components/common/Loader";
import FeaturesTree from "../../../components/Sider/FeaturesTree";

const View = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Sider>
        <FeaturesTree fill />
      </Sider>
      <div className={wrapper}>
        <ViewMap />
        <Footer />
      </div>
    </React.Suspense>
  );
};

export default View;
