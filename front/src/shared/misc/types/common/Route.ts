export interface Route {
  path: string;
}

export interface Routes extends Record<string, Route> {
  root: Route;
  current: Route;

  authorization: Route;
  admin: Route;

  system: Route;
  print: Route;
  monitoring: Route;
  references: Route;
  reports: Route;
}
