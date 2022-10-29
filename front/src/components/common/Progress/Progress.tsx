import { Intent, ProgressBar } from "@blueprintjs/core";

import { wrapper } from "./progress.module.scss";

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

  return <ProgressBar className={wrapper} value={value} intent={intent} />;
};

export default Progress;
