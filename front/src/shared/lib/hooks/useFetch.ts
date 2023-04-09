import { DependencyList, useEffect } from "react";

export const useFetch = (
  fetchCallback: () => Promise<any>,
  dependencyList: DependencyList
) => {
  useEffect(() => {
    void fetchCallback();
  }, dependencyList);
};
