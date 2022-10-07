import { wrapper } from "./view.module.scss";

import Sider from "../../../components/Sider";
import Map from "../../../components/Map";
import Footer from "../../../components/Footer";

const View = () => {
  return (
    <>
      <div className={wrapper}>
        <Sider />
        <Map />
      </div>

      <Footer />
    </>
  );
};

export default View;
