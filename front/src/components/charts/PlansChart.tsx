import { Pie, PieChart, ResponsiveContainer } from "recharts";

import { wrapper } from "./chart.module.scss";

import { Plan } from "../../types/entities";

interface Props {
  plans: Plan[];
}

const PlansChart = ({ plans }: Props) => {
  return (
    <ResponsiveContainer width="30%" height="100%" className={wrapper}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey={"target"}
          nameKey={"title"}
          data={plans}
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
          isAnimationActive={false}
          labelLine={false}
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PlansChart;
