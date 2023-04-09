import { Progress as ProgressBar } from "antd";

import { wrapper } from "./progress.module.scss";

interface Props {
  value: number;
}

const Progress = ({ value }: Props) => {
  return (
    <div className={wrapper}>
      <ProgressBar percent={value} status="active" />
    </div>
  );
};

export default Progress;
