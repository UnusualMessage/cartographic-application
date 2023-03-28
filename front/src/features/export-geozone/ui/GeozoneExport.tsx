import { Modal, Typography, message } from "antd";
import { observer } from "mobx-react-lite";

import { AlertsStore } from "@shared/misc";

import { code, wrapper } from "./export.module.scss";

const { Title } = Typography;

const GeozoneExport = () => {
  const onConfirm = async () => {
    try {
      await navigator.clipboard.writeText(AlertsStore.info);
      message.success("Геозона скопирована!");
    } catch (Error) {
      message.error("Ошибка копирования!");
    }
  };

  const onClose = () => {
    AlertsStore.isOpen = false;
  };

  return (
    <Modal
      className={wrapper}
      width={350}
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
