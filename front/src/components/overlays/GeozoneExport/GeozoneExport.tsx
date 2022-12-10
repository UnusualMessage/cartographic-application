import { Alert, H3, Pre } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { code, wrapper } from "./export.module.scss";

import { AlertsStore } from "../../../stores/ui";

const GeozoneExport = () => {
  return (
    <Alert
      className={wrapper}
      isOpen={AlertsStore.isOpen}
      onClose={() => (AlertsStore.isOpen = false)}
      cancelButtonText={"Отменить"}
      confirmButtonText={"Скопировать"}
      intent={"primary"}
    >
      <H3>Экспорт геозоны</H3>
      <Pre className={code}>{AlertsStore.info}</Pre>
    </Alert>
  );
};

export default observer(GeozoneExport);
