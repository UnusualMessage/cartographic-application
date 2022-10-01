import { Cell, Column, Table2 } from "@blueprintjs/table";
import { observer } from "mobx-react-lite";

import { hidden, wrapper } from "./table.module.scss";

import FeaturesStore from "../../stores/FeaturesStore";
import InteractionsStore from "../../stores/InteractionsStore";
import classNames from "classnames";

const Table = () => {
  const clickedFeature = FeaturesStore.clickedFeature;
  const readonly = InteractionsStore.readonly;

  const typeRenderer = () => {
    if (!readonly) {
      return undefined;
    }

    if (clickedFeature) {
      return <Cell>{clickedFeature.getGeometry()?.getType()}</Cell>;
    }

    return undefined;
  };

  const indexRenderer = (rowIndex: number) => {
    if (!readonly) {
      return undefined;
    }

    return <Cell>{rowIndex + 1}</Cell>;
  };

  return (
    <Table2
      numRows={1}
      className={classNames(wrapper, { [hidden]: !readonly })}
      cellRendererDependencies={[clickedFeature]}
    >
      <Column cellRenderer={indexRenderer} name={"Номер"} />
      <Column cellRenderer={typeRenderer} name={"Тип примитива"} />
    </Table2>
  );
};

export default observer(Table);
