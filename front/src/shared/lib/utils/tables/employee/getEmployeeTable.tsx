import type { Column } from "../../../../misc";

export const getEmployeeTable = (): Column[] => [
  {
    title: "Имя",
    dataIndex: "firstName",
  },

  {
    title: "Фамилия",
    dataIndex: "secondName",
  },

  {
    title: "Отчество",
    dataIndex: "patronymic",
  },

  {
    title: "Телефон",
    dataIndex: "phone",
  },

  {
    title: "Должность",
    dataIndex: "post",
  },

  {
    title: "Организация",
    dataIndex: "organization",
  },

  {
    title: "Дата рождения",
    dataIndex: "birthDate",
  },

  {
    title: "Номер ВУ",
    dataIndex: "driverCard",
  },
];
