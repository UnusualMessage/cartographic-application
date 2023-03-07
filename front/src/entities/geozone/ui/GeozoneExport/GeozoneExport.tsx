import { Modal, Typography } from "antd";
import { observer } from "mobx-react-lite";

import { AlertsStore } from "@shared/misc";

import { code, wrapper } from "./export.module.scss";

const { Title } = Typography;

const GeozoneExport = () => {
  const onConfirm = async () => {
    await navigator.clipboard.writeText(AlertsStore.info);
  };

  const onClose = () => {
    AlertsStore.isOpen = false;
  };

  return (
    <Modal
      className={wrapper}
      open={AlertsStore.isOpen}
      onCancel={onClose}
      onOk={onConfirm}
      cancelText={"Закрыть"}
      okText={"Скопировать"}
    >
      <Title level={3}>Экспорт геозоны</Title>
      <pre className={code}>{AlertsStore.info}</pre>
    </Modal>
  );
};

export default observer(GeozoneExport);
