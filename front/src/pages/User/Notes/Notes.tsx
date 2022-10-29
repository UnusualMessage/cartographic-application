import { PlansStore } from "../../../stores/entities";
import { observer } from "mobx-react-lite";
import { PlansTable } from "../../../components/tables";
import TabPage from "../../../components/Footer/TabPage";

const Notes = () => {
  const plans = PlansStore.plans;

  return (
    <TabPage>
      <PlansTable plans={plans} />
    </TabPage>
  );
};

export default observer(Notes);
