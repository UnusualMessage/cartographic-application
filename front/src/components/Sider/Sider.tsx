import { wrapper } from "./sider.module.scss";

import FeaturesTree from "./FeaturesTree";
import Changes from "./Changes/Changes";

const Sider = () => {
  return (
    <div className={wrapper}>
      <FeaturesTree />
      <Changes />
    </div>
  );
};

export default Sider;
