import { Status } from "../../../misc";

export const translateStatus = (status: Status): string => {
  switch (status) {
    case "disabled":
      return "Отключено";
    case "waiting":
      return "Ожидание";
    case "working":
      return "Работа";
    case "no-data":
      return "Нет данных";
    case "parking":
      return "Парковка";
  }
};
