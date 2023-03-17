import { observer } from "mobx-react-lite";

import { OrganizationsStore } from "@entities/organization";
import { SpeedsStore } from "@entities/speed";
import { getSelectOptions } from "@shared/lib";
import { UpdateSpeed as UpdateSpeedType, Speed } from "@shared/misc";
import { Update } from "@shared/ui";

import { getSpeedDefaultValues, updateSpeed } from "../../model";

interface Props {
  id?: string;
}

const UpdateSpeed = ({ id }: Props) => {
  const organizations = OrganizationsStore.organizations;

  const form = updateSpeed(getSelectOptions(organizations));

  return (
    <Update<Speed, UpdateSpeedType>
      name={"скоростной режим"}
      store={SpeedsStore}
      form={form}
      id={id}
      getDefaultValues={getSpeedDefaultValues}
    />
  );
};

export default observer(UpdateSpeed);
