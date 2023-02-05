import { observer } from "mobx-react-lite";

import Organization from "./Organization";
import { wrapper } from "./organizations.module.scss";
import { OrganizationsStore } from "../../../entities/stores/entities";

const OrganizationsPage = () => {
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

export default observer(OrganizationsPage);
