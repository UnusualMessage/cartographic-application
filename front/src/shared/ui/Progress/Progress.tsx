import { Progress as ProgressBar } from "antd";

import { bar, wrapper } from "./progress.module.scss";

interface Props {
  value: number;
}

const Progress = ({ value }: Props) => {
  return (
    <div className={wrapper}>
      <ProgressBar className={bar} percent={value} status="active" />
    </div>
  );
};

export default Progress;
