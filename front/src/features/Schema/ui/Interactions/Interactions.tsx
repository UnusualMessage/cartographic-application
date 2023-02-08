import { observer } from "mobx-react-lite";
import { PropsWithChildren } from "react";

const Interactions = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default observer(Interactions);
