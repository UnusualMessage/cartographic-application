import { PropsWithChildren } from "react";
import { observer } from "mobx-react-lite";

const Interactions = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default observer(Interactions);
