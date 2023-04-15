import { TypesChart } from "@entities/business";
import { types } from "@shared/assets";
import { TabPage } from "@shared/ui";

const TypesTab = () => {
  return (
    <TabPage>
      {types.map((type) => {
        return <TypesChart key={`types-chart-${type.id}`} type={type} />;
      })}
    </TabPage>
  );
};

export default TypesTab;
