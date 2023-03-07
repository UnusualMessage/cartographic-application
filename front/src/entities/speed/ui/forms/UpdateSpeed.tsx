import { observer } from "mobx-react-lite";

import { updateSpeed } from "@shared/assets";
import { getSelectOptions, getSpeedDefaultValues } from "@shared/lib";
import { UpdateSpeed as UpdateSpeedType, Speed } from "@shared/misc";
import { Update } from "@shared/ui";

import { OrganizationsStore } from "../../../organization";
import { SpeedsStore } from "../../model";

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
