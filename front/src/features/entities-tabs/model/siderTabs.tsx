import { Badge } from "antd";

import EmployeesTree from "@entities/employee/ui/EmployeesTree";
import { EquipmentTree } from "@entities/equipment";
import { GeozonesTree } from "@entities/geozone";
import { PlansTree } from "@entities/plan";
import { geozones, equipment, employees, plans } from "@shared/assets";
import { TabsList } from "@shared/misc";

export const siderTabs: TabsList = {
  id: "sider-tabs",
  tabs: [
    {
      key: "sider-geozones",
      label: (
        <Badge
          count={geozones.length}
          size={"small"}
          color="blue"
          offset={[-10, -5]}
        >
          Геозоны
        </Badge>
      ),
      children: <GeozonesTree />,
    },

    {
      key: "sider-equipments",
      label: (
        <Badge
          count={equipment.length}
          size={"small"}
          color="blue"
          offset={[-10, -5]}
        >
          Техника
        </Badge>
      ),
      children: <EquipmentTree />,
    },

    {
      key: "sider-employees",
      label: (
        <Badge
          count={employees.length}
          size={"small"}
          color="blue"
          offset={[-10, -5]}
        >
          Сотрудники
        </Badge>
      ),
      children: <EmployeesTree />,
    },

    {
      key: "sider-plans",
      label: (
        <Badge
          count={plans.length}
          size={"small"}
          color="blue"
          offset={[-10, -5]}
        >
          Планы
        </Badge>
      ),
      children: <PlansTree />,
    },
  ],
};
