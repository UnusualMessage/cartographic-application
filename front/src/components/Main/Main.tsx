import { observer } from "mobx-react-lite";

import { map, wrapper } from "./main.module.scss";

import TableTabs from "../Tabs/TableTabs";
import Sider from "../Sider";
import Map from "../Map";

const Main = () => {
  return (
    <div className={wrapper}>
      <Sider />

      <div className={map}>
        <Map />
        <TableTabs />
      </div>
    </div>
  );
};

export default observer(Main);
