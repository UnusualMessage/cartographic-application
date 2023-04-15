import {
  FilterOutlined,
  ExportOutlined,
  PrinterOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { observer } from "mobx-react-lite";

import { PlansStore, PlansChart } from "@entities/business";
import { planTable } from "@shared/assets";
import { mapPlanToTable } from "@shared/lib";
import { TablePlan } from "@shared/misc";
import { Table, TabPage } from "@shared/ui";

import { table } from "./tab.module.scss";

const PlansTab = () => {
  const plans = PlansStore.plans;

  const actions = (
    <>
      <Button icon={<FilterOutlined />} type={"text"} />
      <Button icon={<ExportOutlined />} type={"text"} />
      <Button icon={<PrinterOutlined />} type={"text"} />
      <Button icon={<ReloadOutlined />} type={"text"} />
    </>
  );

  return (
    <TabPage actions={actions}>
      <Table<TablePlan>
        items={plans.map(mapPlanToTable)}
        columns={planTable}
        className={table}
      />
      <PlansChart />
    </TabPage>
  );
};

export default observer(PlansTab);
