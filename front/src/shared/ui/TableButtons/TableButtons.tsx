import { ButtonGroup } from "@blueprintjs/core";
import { PropsWithChildren } from "react";

import { wrapper } from "./buttons.module.scss";

const TableButtons = ({ children }: PropsWithChildren) => {
  return (
    <ButtonGroup className={wrapper} minimal large>
      {children}
    </ButtonGroup>
  );
};

export default TableButtons;
