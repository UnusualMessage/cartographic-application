import { Button, ButtonGroup } from "@blueprintjs/core";

import { wrapper } from "./buttons.module.scss";

const TableButtons = () => {
  return (
    <ButtonGroup className={wrapper} minimal large>
      <Button icon="add" text={"Добавить"} />
      <Button icon="edit" text={"Изменить"} />
      <Button icon="remove" text={"Удалить"} />
      <Button icon="duplicate" text={"Дублировать"} />
    </ButtonGroup>
  );
};

export default TableButtons;
