import { Cell, Column, Table2 } from "@blueprintjs/table";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import * as css from "./table.module.scss";

import FeaturesStore from "../../stores/FeaturesStore";

interface Props {
  hidden?: boolean;
}

const Table = ({ hidden }: Props) => {
  const clickedFeature = FeaturesStore.clickedFeature;

  const typeRenderer = () => {
    if (hidden) {
      return undefined;
    }

    if (clickedFeature) {
      return <Cell>{clickedFeature.getGeometry()?.getType()}</Cell>;
    }

    return undefined;
  };

  const indexRenderer = (rowIndex: number) => {
    if (!hidden) {
      return undefined;
    }

    if (clickedFeature) {
      return <Cell>{rowIndex + 1}</Cell>;
    }

    return undefined;
  };

  return (
    <Table2
      numRows={20}
      className={classNames(css.wrapper, { [css.hidden]: hidden })}
      cellRendererDependencies={[clickedFeature]}
    >
      <Column cellRenderer={indexRenderer} name={"Номер"} />
      <Column cellRenderer={typeRenderer} name={"Тип примитива"} />
    </Table2>
  );
};

export default observer(Table);
