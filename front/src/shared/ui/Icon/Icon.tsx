import { Icon as BpIcon, IconName, MaybeElement } from "@blueprintjs/core";

interface Props {
  icon: IconName | MaybeElement;
  color?: string;
  size?: number;
}

const Icon = ({ icon, size, color }: Props) => {
  return (
    <BpIcon
      icon={icon}
      size={size}
      className={"anticon"}
      color={color}
      style={{ verticalAlign: "-0.125rem" }}
    />
  );
};

export default Icon;
