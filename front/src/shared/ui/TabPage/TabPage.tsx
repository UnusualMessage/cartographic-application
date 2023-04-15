import { PropsWithChildren, ReactNode } from "react";

import {
  content,
  header,
  wrapper,
  actions as actionsStyle,
} from "./page.module.scss";

interface Props extends PropsWithChildren {
  actions?: ReactNode;
}

const TabPage = ({ children, actions }: Props) => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={actionsStyle}>{actions}</div>
      </div>
      <div className={content}>{children}</div>
    </div>
  );
};

export default TabPage;
