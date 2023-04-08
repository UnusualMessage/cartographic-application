import { AuthStore } from "@entities/auth";
import { Mounted, UpdateMounted } from "@shared/misc";

export const getDefaultValues = (mounted?: Mounted): Partial<UpdateMounted> => {
  const currentOrganization = AuthStore.user?.organization;

  return {
    id: mounted?.id,
    name: mounted?.name,
    width: mounted?.width,
    offset: mounted?.offset,
    organizationId: currentOrganization?.id,
    departmentId: mounted?.department?.id,
  };
};
