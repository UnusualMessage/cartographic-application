import { bordersLayerId } from "@shared/constants";
import { Node } from "@shared/misc";

export const borderLayersNodes: Node[] = [
  {
    title: "Границы",
    key: bordersLayerId,
    icon: <></>,
    children: [
      {
        title: "Гос. граница",
        key: "admin_level_2",
        icon: <></>,
      },

      {
        title: "Фед. округа",
        key: "admin_level_3",
        icon: <></>,
      },

      {
        title: "Субъекты РФ",
        key: "admin_level_4",
        icon: <></>,
      },

      {
        title: "Города фед. знач.",
        key: "admin_level_5",
        icon: <></>,
      },

      {
        title: "Муницип. районы 1",
        key: "admin_level_6",
        icon: <></>,
      },

      {
        title: "Муницип. районы 2",
        key: "admin_level_8",
        icon: <></>,
      },

      {
        title: "Муницип. районы 3",
        key: "admin_level_9",
        icon: <></>,
      },
    ],
  },
];
