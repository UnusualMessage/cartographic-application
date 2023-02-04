import { observer } from "mobx-react-lite";

import { types } from "@shared/assets/samples";

import { EquipmentStore } from "../../../entities/stores/entities";
import { StatusByTypeChart, StatusChart } from "../../charts";

const StatusTab = () => {
  const equipment = EquipmentStore.equipment;

  return (
    <>
      <StatusChart equip={equipment} />
      <StatusByTypeChart
        equip={equipment}
        type={types[0]}
        title={"Автомобиль"}
      />
      <StatusByTypeChart equip={equipment} type={types[1]} title={"Грузовик"} />
    </>
  );
};

export default observer(StatusTab);
