import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  truthy?: boolean;
  fallback?: JSX.Element;
}

const Condition = ({ children, truthy, fallback }: Props) => {
  return <>{truthy ? children : fallback ?? <></>}</>;
};

export default Condition;
