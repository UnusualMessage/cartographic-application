import { Speed, TableSpeed } from "../../../../misc";

export const mapSpeedToTable = (speed: Speed): TableSpeed => {
  return {
    id: speed.id,
    key: speed.id,
    title: speed.title,
    max: speed.max,
    min: speed.min,
    timeLimit: speed.timeLimit,
    organization: speed.organization.title,
    department: speed.department?.title,
  };
};
