import type { Column, Employee } from "../../../misc";

export const employeeTable: Column<Employee>[] = [
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
    title: "Электронная почта",
    dataIndex: "email",
  },

  {
    title: "Должность",
    dataIndex: "post",
  },

  {
    title: "Дата рождения",
    dataIndex: "birthDate",
  },

  {
    title: "Номер ВУ",
    dataIndex: "driverCard",
  },

  {
    title: "Организация",
    dataIndex: "organization",
  },

  {
    title: "Подразделение",
    dataIndex: "department",
  },
];
