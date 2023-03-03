import { Plan, TablePlan } from "../../../../misc";

export const mapPlanToTable = (plan: Plan): TablePlan => {
  return {
    id: plan.id,
    key: plan.id,
    title: plan.title,
    year: plan.year,
    target: plan.target,
    type: plan.type,
  };
};
