import { PropsWithChildren, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { AuthStore } from "../../../stores/entities";

const RequireAuth = ({ children }: PropsWithChildren) => {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const getResponse = async () => {
      await AuthStore.access();

      if (AuthStore.entered()) {
        setAllowed(true);
      }
    };

    void getResponse();
  }, []);

  if (!allowed) {
    return <></>;
  }

  return <>{children}</>;
};

export default observer(RequireAuth);
