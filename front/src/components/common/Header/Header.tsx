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
import { memo } from "react";

import { container, logo, user, wrapper } from "./header.module.scss";

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

        <Link to={"/references"}>
          <Button icon="clipboard" text="Справочники" minimal large />
        </Link>

        <Link to={"/info"}>
          <Button icon="export" text="Отчеты" minimal large />
        </Link>
      </NavbarGroup>

      <NavbarGroup className={container}>
        <Button icon="pause" minimal large />
        <Button icon="stop" minimal large />
        <Button icon="step-forward" minimal large />
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

export default memo(Header);
