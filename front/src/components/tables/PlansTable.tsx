import { Cell, CellRenderer, Column, Table2 } from "@blueprintjs/table";
import { observer } from "mobx-react-lite";

import { cell, table } from "./table.module.scss";

import { PlansStore } from "../../stores/entities";
import Progress from "../common/Progress";
import { Plan } from "../../types/entities";

interface Props {
  plans: Plan[];
}

const PlansTable = ({ plans }: Props) => {
  const currentYear = PlansStore.chosenYear;

  if (currentYear) {
    plans = PlansStore.plans.filter((plan) => plan.year === currentYear);
  }

  const typeRenderer: CellRenderer = (rowIndex) => {
    return <Cell className={cell}>{plans[rowIndex].type}</Cell>;
  };

  const areaRenderer: CellRenderer = (rowIndex) => {
    return <Cell className={cell}>{plans[rowIndex].target}</Cell>;
  };

  const yearRenderer: CellRenderer = (rowIndex) => {
    return <Cell className={cell}>{plans[rowIndex].year}</Cell>;
  };

  const progressRenderer: CellRenderer = (rowIndex) => {
    return (
      <Cell className={cell}>
        <Progress value={rowIndex * 0.05} />
      </Cell>
    );
  };

  return (
    <Table2
      numRows={plans.length}
      className={table}
      cellRendererDependencies={[currentYear]}
      defaultRowHeight={40}
      columnWidths={[500, 300, 100, 150]}
      enableColumnResizing={false}
    >
      <Column cellRenderer={typeRenderer} name={"Культура"} />
      <Column cellRenderer={areaRenderer} name={"Площадь, Га"} />
      <Column cellRenderer={yearRenderer} name={"Год"} />
      <Column cellRenderer={progressRenderer} name={"Прогресс"} />
    </Table2>
  );
};

export default observer(PlansTable);
