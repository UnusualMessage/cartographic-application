import { Mounted, UpdateMounted } from "@shared/misc";

export const getDefaultValues = (mounted?: Mounted): Partial<UpdateMounted> => {
  return {
    id: mounted?.id,
    name: mounted?.name,
    width: mounted?.width,
    offset: mounted?.offset,
    organizationId: mounted?.organization.id,
    departmentId: mounted?.department?.id,
  };
};
