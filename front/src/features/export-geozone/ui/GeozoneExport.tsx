import { Modal, Typography, message } from "antd";
import { observer } from "mobx-react-lite";

import { ModalsStore } from "@shared/misc";

import { code, wrapper } from "./export.module.scss";

const { Title } = Typography;

const GeozoneExport = () => {
  const onConfirm = async () => {
    try {
      await navigator.clipboard.writeText(ModalsStore.buffer);
      message.success("Геозона скопирована!");
    } catch (Error) {
      message.error("Ошибка копирования!");
    }
  };

  return (
    <Modal
      className={wrapper}
      width={350}
      open={ModalsStore.isOpen}
      onCancel={() => ModalsStore.close()}
      onOk={onConfirm}
      cancelText={"Закрыть"}
      okText={"Скопировать"}
    >
      <Title level={3}>Экспорт геозоны</Title>
      <pre className={code}>{ModalsStore.buffer}</pre>
    </Modal>
  );
};

export default observer(GeozoneExport);
