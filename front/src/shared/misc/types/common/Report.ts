export interface Report {
  key: string;
  link: string;
  title: string;
  disabled?: boolean;
  component: JSX.Element;
}

export interface Reports {
  equipmentCoordinates: Report;
  equipmentDailyWorks: Report;
  finishedWorks: Report;
}
