import { wrapper } from "./content.module.scss";

import Sider from "../../../components/Sider";
import Map from "../../../components/Map";
import Footer from "../../../components/Footer";

const Content = () => {
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

export default Content;
