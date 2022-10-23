import {
  Button,
  H2,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { memo } from "react";

import { wrapper } from "./header.module.scss";

const Header = () => {
  return (
    <Navbar className={wrapper}>
      <NavbarGroup>
        <NavbarHeading>
          <Link to={"/"}>
            <H2>Агро</H2>
          </Link>
        </NavbarHeading>

        <Link to={"/"}>
          <Button icon="path-search" text="Просмотр" minimal large />
        </Link>

        <Link to={"/edit"}>
          <Button icon="send-to-map" text="Редактирование" minimal large />
        </Link>

        <Link to={"/notes"}>
          <Button icon="clipboard" text="Справочники" minimal large />
        </Link>

        <Link to={"/info"}>
          <Button icon="export" text="Отчеты" minimal large />
        </Link>
      </NavbarGroup>

      <NavbarGroup>
        <Link to={"/settings"}>
          <Button icon="cog" text="Настройки" minimal large />
        </Link>

        <Link to={"/account"}>
          <Button icon="user" text="Аккаунт" minimal large />
        </Link>

        <Button icon="log-out" minimal large />
      </NavbarGroup>
    </Navbar>
  );
};

export default memo(Header);
