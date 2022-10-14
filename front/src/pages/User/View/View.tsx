import { wrapper } from "./view.module.scss";

import Sider from "../../../components/Sider";
import { ReadonlyMap } from "../../../components/Map";
import Footer from "../../../components/Footer";

const View = () => {
  return (
    <>
      <Sider />
      <div className={wrapper}>
        <ReadonlyMap />
        <Footer />
      </div>
    </>
  );
};

export default View;
