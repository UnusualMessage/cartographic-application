import { wrapper } from "./content.module.scss";

import Sider from "../../../components/Sider";
import Map from "../../../components/Map";
import TableTabs from "../../../components/Tabs/TableTabs";

const Content = () => {
  return (
    <>
      <Sider />

      <div className={wrapper}>
        <Map />
        <TableTabs />
      </div>
    </>
  );
};

export default Content;
