import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";

export const useQueryNavigate = () => {
  const [viewParams] = useSearchParams();

  const navigate = useNavigate();

  const navigateWithQuery = (path: string, ...keys: string[]) => {
    const params: Record<string, string> = {};

    for (const key of keys) {
      params[key] = viewParams.get(key) ?? "0";
    }

    navigate({
      pathname: path,
      search: createSearchParams(params).toString(),
    });
  };

  return { navigateWithQuery };
};
