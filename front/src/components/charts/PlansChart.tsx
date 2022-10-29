import { Pie, PieChart, ResponsiveContainer } from "recharts";

import { Plan } from "../../types/entities";

interface Props {
  plans: Plan[];
}

const PlansChart = ({ plans }: Props) => {
  return (
    <ResponsiveContainer width="30%" height="100%">
      <PieChart width={200} height={200}>
        <Pie
          dataKey={"target"}
          nameKey={"title"}
          data={plans}
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PlansChart;
