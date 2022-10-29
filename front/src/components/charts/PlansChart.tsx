import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { Plan } from "../../types/entities";

interface Props {
  plans: Plan[];
}

const PlansChart = ({ plans }: Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="target"
          data={plans}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PlansChart;
