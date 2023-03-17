import { Speed, UpdateSpeed } from "@shared/misc";

export const getSpeedDefaultValues = (speed?: Speed): Partial<UpdateSpeed> => {
  return {
    id: speed?.id,
    title: speed?.title,
    min: speed?.min,
    max: speed?.max,
    timeLimit: speed?.timeLimit,
    organizationId: speed?.organization.id,
  };
};
