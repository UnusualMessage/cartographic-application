import {
  Button,
  H2,
  H6,
  Icon,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Text,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { container, logo, user, wrapper } from "./header.module.scss";
import { UpdateStore } from "../../../stores/api";

const Header = () => {
  return (
    <Navbar className={wrapper}>
      <NavbarGroup className={container}>
        <NavbarHeading>
          <Link className={logo} to={"/"}>
            <Icon icon={"truck"} size={32} />
            <H2>АгрОруэлл</H2>
          </Link>
        </NavbarHeading>

        <Link to={"/"}>
          <Button icon="path-search" text="Просмотр" minimal large />
        </Link>

        <Link to={"/references/select"}>
          <Button icon="clipboard" text="Справочники" minimal large />
        </Link>

        <Link to={"/info"}>
          <Button icon="export" text="Отчеты" minimal large />
        </Link>
      </NavbarGroup>

      <NavbarGroup className={container}>
        <Button
          icon="pause"
          intent={UpdateStore.paused ? "primary" : "none"}
          minimal
          large
          onClick={() => UpdateStore.pause()}
        />
        <Button
          icon="stop"
          intent={UpdateStore.stopped ? "primary" : "none"}
          minimal
          large
          onClick={() => UpdateStore.stop()}
        />
        <Button
          icon="step-forward"
          intent={UpdateStore.active ? "primary" : "none"}
          minimal
          large
          onClick={() => UpdateStore.resume()}
        />
      </NavbarGroup>

      <NavbarGroup className={container}>
        <Link to={"/settings"}>
          <Button icon="cog" text="Настройки" minimal large />
        </Link>

        <Button icon="notifications" minimal large />

        <div className={user}>
          <Text>{"Котенко Никита Алексеевич"}</Text>
          <H6>{"ООО 'Рога и копыта'"}</H6>
        </div>

        <Button icon="log-out" minimal large />
      </NavbarGroup>
    </Navbar>
  );
};

export default observer(Header);
