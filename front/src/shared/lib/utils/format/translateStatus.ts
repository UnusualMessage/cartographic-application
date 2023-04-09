import { Status } from "../../../misc";

type Language = "en" | "ru";

export const translateStatus = (status: Status, language: Language): string => {
  switch (language) {
    case "en":
      return translateToEnglish(status);
    case "ru":
      return translateToRussian(status);
  }
};

const translateToEnglish = (status: string) => {
  switch (status) {
    case "Отключено":
      return "disabled";
    case "Ожидание":
      return "waiting";
    case "Работа":
      return "working";
    case "Нет данных":
      return "no-data";
    case "Парковка":
      return "parking";
  }

  return "";
};

const translateToRussian = (status: Status) => {
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
