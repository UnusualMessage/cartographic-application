import { Mounted, TableMounted } from "../../../../misc";

export const mapMountedToTable = (mounted: Mounted): TableMounted => {
  return {
    id: mounted.id,
    key: mounted.id,
    name: mounted.name,
    width: mounted.width,
    offset: mounted.offset,
    organization: mounted.organization.title,
    department: mounted.department?.title,
  };
};
