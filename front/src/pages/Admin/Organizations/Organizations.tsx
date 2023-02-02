import { observer } from "mobx-react-lite";

import { wrapper } from "./organizations.module.scss";

import Organization from "./Organization";
import { OrganizationsStore } from "../../../stores/entities";

const Organizations = () => {
  const organizations = OrganizationsStore.organizations;

  return (
    <div className={wrapper}>
      {organizations.map((organization) => {
        return (
          <Organization
            key={organization.id}
            id={organization.id}
            title={organization.title}
            text={organization.text}
          />
        );
      })}
    </div>
  );
};

export default observer(Organizations);
