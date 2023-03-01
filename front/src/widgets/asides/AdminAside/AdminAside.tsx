import React, { PropsWithChildren } from "react";

import { wrapper } from "./aside.module.scss";

const AdminAside = ({ children }: PropsWithChildren) => {
  return (
    <div className={wrapper} onContextMenu={(e) => e.preventDefault()}>
      {children}
    </div>
  );
};

export default AdminAside;
