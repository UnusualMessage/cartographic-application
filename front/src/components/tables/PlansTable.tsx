import {
  Cell,
  CellRenderer,
  Column,
  RowHeaderCell2,
  RowHeaderRenderer,
  Table2,
} from "@blueprintjs/table";
import classNames from "classnames";

import { cell, custom, table } from "./table.module.scss";
import { Plan } from "../../types/entities";

interface Props {
  plans: Plan[];
}

const PlansTable = ({ plans }: Props) => {
  const typeRenderer: CellRenderer = (rowIndex) => {
    return <Cell className={cell}>{plans[rowIndex].type}</Cell>;
  };

  const areaRenderer: CellRenderer = (rowIndex) => {
    return <Cell className={cell}>{plans[rowIndex].target}</Cell>;
  };

  const yearRenderer: CellRenderer = (rowIndex) => {
    return <Cell className={cell}>{plans[rowIndex].year}</Cell>;
  };

  const rowHeaderRenderer: RowHeaderRenderer = (rowIndex) => {
    return (
      <RowHeaderCell2
        index={rowIndex}
        name={(rowIndex + 1).toString()}
        className={cell}
      />
    );
  };

  return (
    <Table2
      numRows={plans.length}
      className={classNames(table, custom)}
      cellRendererDependencies={[plans]}
      defaultRowHeight={40}
      columnWidths={[500, 300, 100]}
      enableColumnResizing={false}
      rowHeaderCellRenderer={rowHeaderRenderer}
    >
      <Column cellRenderer={typeRenderer} name={"Культура"} />
      <Column cellRenderer={areaRenderer} name={"Площадь, Га"} />
      <Column cellRenderer={yearRenderer} name={"Год"} />
    </Table2>
  );
};

export default PlansTable;
