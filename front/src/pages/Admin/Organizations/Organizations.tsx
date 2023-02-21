import { observer } from "mobx-react-lite";

import { OrganizationsStore } from "@entities/organization";

import Organization from "./Organization";
import { wrapper } from "./organizations.module.scss";

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
