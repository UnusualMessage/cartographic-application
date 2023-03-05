import {
  SearchOutlined,
  PrinterOutlined,
  ShareAltOutlined,
  FullscreenOutlined,
  InfoOutlined,
  StopOutlined,
  EyeInvisibleOutlined,
  EllipsisOutlined,
  BorderOutlined,
} from "@ant-design/icons";
import { Drawer, Typography, MenuProps, Menu } from "antd";
import { observer } from "mobx-react-lite";

import { about } from "@shared/assets";
import { auxLayerId } from "@shared/constants";
import {
  ControlsStore,
  DrawType,
  LayersStore,
  InteractionsStore,
} from "@shared/misc";
import { ControlType } from "@shared/misc/stores/ControlsStore";
import { LayersFilled, LengthMeasurement, AreaMeasurement } from "@shared/ui";

const { Text } = Typography;

const items: MenuProps["items"] = [
  {
    label: "Поиск",
    key: "search",
    icon: <SearchOutlined />,
  },

  {
    label: "Слои",
    key: "layers",
    icon: <LayersFilled />,
  },

  {
    type: "divider",
  },

  {
    label: "Измерение",
    key: "measurement",
    children: [
      {
        label: "Расстояние",
        key: "measure-length",
        icon: <LengthMeasurement />,
      },

      {
        label: "Площадь",
        key: "measure-area",
        icon: <AreaMeasurement />,
      },
    ],
  },

  {
    label: "Редактирование",
    key: "edit",
    children: [
      {
        label: "Выкл.",
        key: "none",
        icon: <StopOutlined />,
      },

      {
        label: "Курсор",
        key: "cursor",
        icon: <EyeInvisibleOutlined />,
      },

      {
        label: "Точка",
        key: "point",
        icon: <EllipsisOutlined />,
      },

      {
        label: "Полигон",
        key: "geozones",
        icon: <BorderOutlined />,
      },
    ],
  },

  {
    type: "divider",
  },

  {
    label: "Полный экран",
    key: "full-screen",
    icon: <FullscreenOutlined />,
  },

  {
    label: "Поделиться",
    key: "share",
    icon: <ShareAltOutlined />,
  },

  {
    label: "Печать",
    key: "print",
    icon: <PrinterOutlined />,
  },

  {
    type: "divider",
  },

  {
    label: "О проекте",
    key: "about",
    icon: <InfoOutlined />,
  },
];

const DrawerMenu = () => {
  const isOpen = ControlsStore.mapDrawerActive;

  const close = () => {
    ControlsStore.hideDrawer();
  };

  const switchType = (type: DrawType) => {
    LayersStore.clearVectorLayer(auxLayerId);
    const drawType = InteractionsStore.drawType;

    if (drawType === type) {
      InteractionsStore.drawType = "none";
    } else {
      InteractionsStore.drawType = type;
    }

    ControlsStore.hideDrawer();
  };

  const choose = (type: ControlType) => {
    ControlsStore.currentMapControl = type;
  };

  const onClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "measure-length":
        choose(e.key as ControlType);
        switchType(e.key);
        break;
      case "measure-area":
        choose(e.key as ControlType);
        switchType(e.key);
        break;
      case "none":
        switchType(e.key);
        break;
      case "cursor":
        switchType(e.key);
        break;
      case "geozones":
        switchType(e.key);
        break;
      default:
        choose(e.key as ControlType);
    }
  };

  return (
    <Drawer
      title="Выбор опции"
      placement="left"
      open={isOpen}
      onClose={close}
      footer={<Text>{`© 2022 ${about.title}`}</Text>}
      getContainer={ControlsStore.fullScreenActive ? false : ""}
      bodyStyle={{ padding: 0 }}
    >
      <Menu items={items} selectable={false} onClick={onClick} />
    </Drawer>
  );
};

export default observer(DrawerMenu);
