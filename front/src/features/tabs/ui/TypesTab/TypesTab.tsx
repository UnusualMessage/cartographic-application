import { TypesChart } from "@entities/business";
import { TabPage } from "@entities/info-tabs-page";
import { types } from "@shared/assets";

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
