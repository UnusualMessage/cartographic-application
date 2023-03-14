import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";

export const adminMenu: MenuProps["items"] = [
  {
    label: "Главная",
    key: "home",
    icon: <HomeOutlined />,
  },

  {
    label: "Пользователи",
    key: "users",
    icon: <UserOutlined />,
  },

  {
    label: "Организации",
    key: "organizations",
    icon: <HomeOutlined />,
  },

  {
    label: "Муниципальные образования",
    key: "places",
    icon: <HomeOutlined />,
  },

  {
    label: "Статистика",
    key: "statistics",
    icon: <HomeOutlined />,
  },

  {
    label: "Заявки",
    key: "callouts",
    icon: <HomeOutlined />,
  },
];
