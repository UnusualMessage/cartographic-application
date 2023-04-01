import { EmployeesTree, EmployeesTabLabel } from "@features/employees";
import { EquipmentTree, EquipmentsTabLabel } from "@features/equipments";
import { GeozonesTree, GeozonesTabLabel } from "@features/geozones";
import { PlansTree, PlansTabLabel } from "@features/plans";
import { TabsList } from "@shared/misc";

export const entitiesTabs: TabsList = {
  id: "sider-tabs",
  tabs: [
    {
      key: "sider-geozones",
      label: <GeozonesTabLabel />,
      children: <GeozonesTree />,
    },

    {
      key: "sider-equipments",
      label: <EquipmentsTabLabel />,
      children: <EquipmentTree />,
    },

    {
      key: "sider-employees",
      label: <EmployeesTabLabel />,
      children: <EmployeesTree />,
    },

    {
      key: "sider-plans",
      label: <PlansTabLabel />,
      children: <PlansTree />,
    },
  ],
};
