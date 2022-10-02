import {
  Button,
  H2,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";

import { wrapper } from "./header.module.scss";

const Header = () => {
  return (
    <Navbar className={wrapper}>
      <NavbarGroup>
        <NavbarHeading>
          <H2>АгрОруэлл</H2>
        </NavbarHeading>
        <NavbarDivider />

        <Button icon="home" text="Главная" minimal large />
        <Button icon="map" text="Карта" minimal large />
        <Button icon="archive" text="Архив" minimal large />
        <NavbarDivider />
      </NavbarGroup>

      <NavbarGroup>
        <NavbarDivider />
        <Button icon="cog" text="Настройки" minimal large />
        <Button icon="user" text="Аккаунт" minimal large />
        <Button icon="log-out" minimal large />
      </NavbarGroup>
    </Navbar>
  );
};

export default Header;
