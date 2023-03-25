import { Input } from "antd";
import { useLocation } from "react-router-dom";

const ShareResult = () => {
  const url = useLocation();

  return (
    <Input
      defaultValue={"https://localhost:3000" + url.pathname + url.search}
    />
  );
};

export default ShareResult;
