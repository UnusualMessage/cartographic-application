import type { Column } from "../../../misc";

export const getEmployeeColumns = (): Column[] => [
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
];
