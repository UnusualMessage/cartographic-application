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
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { OrganizationsStore } from "@entities/organization";
import { AuthStore } from "@entities/user";
import { about } from "@shared/assets/samples/about";
import { UpdateStore } from "@shared/misc/stores";

import { container, logo, user, wrapper } from "./header.module.scss";

const UserHeader = () => {
  return (
    <Navbar className={wrapper}>
      <NavbarGroup className={container}>
        <NavbarHeading>
          <Link className={logo} to={"/"}>
            <Icon icon={"truck"} size={32} />
            <H2>{about.title}</H2>
          </Link>
        </NavbarHeading>

        <Link to={"/"}>
          <Button icon="path-search" text="Просмотр" minimal large />
        </Link>

        <Link to={"/references/select"}>
          <Button icon="clipboard" text="Справочники" minimal large />
        </Link>

        <Button icon="export" text="Отчеты" minimal large disabled />
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
        <Button icon="cog" text="Настройки" minimal large disabled />
        <Button icon="notifications" minimal large />

        <div className={user}>
          <Text>{AuthStore.fullName}</Text>
          <H6>{OrganizationsStore.organization?.title}</H6>
        </div>

        <Button icon="log-out" minimal large />
      </NavbarGroup>
    </Navbar>
  );
};

export default observer(UserHeader);