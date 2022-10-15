import { wrapper } from "./view.module.scss";

import Sider from "../../../components/Sider";
import { ViewMap } from "../../../components/Map";
import Footer from "../../../components/Footer";

const View = () => {
  return (
    <>
      <Sider />
      <div className={wrapper}>
        <ViewMap />
        <Footer />
      </div>
    </>
  );
};

export default View;
