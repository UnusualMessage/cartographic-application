import { DependencyList, useEffect } from "react";

const useFetch = (
  fetchCallback: () => Promise<any>,
  dependencyList: DependencyList
) => {
  useEffect(() => {
    void fetchCallback();
  }, dependencyList);
};

export default useFetch;
