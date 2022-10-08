import {
  Button,
  H2,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { wrapper } from "./header.module.scss";

const Header = () => {
  return (
    <Navbar className={wrapper}>
      <NavbarGroup>
        <NavbarHeading>
          <H2>АгрОруэлл</H2>
        </NavbarHeading>

        <Link to={"/"}>
          <Button icon="path-search" text="Просмотр" minimal large />
        </Link>

        <Link to={"/edit"}>
          <Button icon="send-to-map" text="Редактирование" minimal large />
        </Link>

        <Link to={"/archive"}>
          <Button icon="archive" text="Архив" minimal large />
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

export default observer(Header);
