import { Cell, CellRenderer, Column, Table2 } from "@blueprintjs/table";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import { cell, wrapper } from "./table.module.scss";

import { PlansStore } from "../../../../../stores/entities";

const PlansTable = () => {
  const currentYear = PlansStore.chosenYear;

  let plans = PlansStore.plans;
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

  return (
    <Table2
      numRows={plans.length}
      className={classNames(wrapper)}
      cellRendererDependencies={[currentYear]}
      defaultRowHeight={40}
      columnWidths={[500, 300, 100]}
    >
      <Column cellRenderer={typeRenderer} name={"Культура"} />
      <Column cellRenderer={areaRenderer} name={"Площадь, Га"} />
      <Column cellRenderer={yearRenderer} name={"Год"} />
    </Table2>
  );
};

export default observer(PlansTable);
