export interface Reference {
  key: string;
  link: string;
  title: string;
  component: JSX.Element;
}

export interface References {
  departments: Reference;

  geozones: Reference;
  stores: Reference;
  destinations: Reference;

  worksCategories: Reference;
  worksPlans: Reference;
  annualPlans: Reference;
  operationalPlans: Reference;
  groupSchedule: Reference;
  groupPlans: Reference;

  goodsGroups: Reference;
  cropsCategories: Reference;
  goods: Reference;
  crops: Reference;

  posts: Reference;
  employees: Reference;
  users: Reference;
  roles: Reference;

  equipment: Reference;
  equipmentTypes: Reference;
  speeds: Reference;
  trailers: Reference;
  mounteds: Reference;
}
