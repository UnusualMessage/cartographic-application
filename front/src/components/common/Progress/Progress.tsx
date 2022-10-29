import { Intent, ProgressBar, Text } from "@blueprintjs/core";

import { bar, text, wrapper } from "./progress.module.scss";

interface Props {
  value: number;
}

const Progress = ({ value }: Props) => {
  let intent: Intent;

  if (value <= 0.2) {
    intent = "none";
  } else if (value <= 0.4) {
    intent = "danger";
  } else if (value <= 0.7) {
    intent = "warning";
  } else {
    intent = "success";
  }

  return (
    <div className={wrapper}>
      <ProgressBar className={bar} value={value} intent={intent} />
      <Text className={text}>{`${(value * 100).toFixed(0)}%`}</Text>
    </div>
  );
};

export default Progress;
