import { StatusesChart } from "@entities/business";
import { TabPage } from "@entities/info-tabs-page";

const StatusesTab = () => {
  return (
    <TabPage>
      <StatusesChart />
    </TabPage>
  );
};

export default StatusesTab;
