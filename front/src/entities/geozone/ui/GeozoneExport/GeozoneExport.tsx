import { Alert, H3, Pre } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { AlertsStore } from "@shared/misc";

import { code, wrapper } from "./export.module.scss";

const GeozoneExport = () => {
  const onConfirm = async () => {
    await navigator.clipboard.writeText(AlertsStore.info);
  };

  const onClose = () => {
    AlertsStore.isOpen = false;
  };

  return (
    <Alert
      className={wrapper}
      isOpen={AlertsStore.isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      cancelButtonText={"Закрыть"}
      confirmButtonText={"Скопировать"}
      intent={"primary"}
    >
      <H3>Экспорт геозоны</H3>
      <Pre className={code}>{AlertsStore.info}</Pre>
    </Alert>
  );
};

export default observer(GeozoneExport);
