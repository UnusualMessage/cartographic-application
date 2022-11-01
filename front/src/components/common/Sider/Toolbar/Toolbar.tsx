import { Button, ButtonGroup } from "@blueprintjs/core";

import { wrapper } from "./toolbar.module.scss";

import { HistoryService } from "../../../../services/history";

const Toolbar = () => {
  const save = () => {
    HistoryService.save();
  };

  const undo = () => {
    HistoryService.undo();
  };

  return (
    <ButtonGroup className={wrapper} fill>
      <Button
        text={"Сохранить"}
        intent={"success"}
        onClick={save}
        icon={"confirm"}
      />

      <Button
        text={"Отменить"}
        intent={"danger"}
        onClick={undo}
        icon={"undo"}
      />
    </ButtonGroup>
  );
};

export default Toolbar;
