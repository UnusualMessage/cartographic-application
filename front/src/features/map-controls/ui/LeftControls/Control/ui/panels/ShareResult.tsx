import { Input } from "antd";
import { useLocation } from "react-router-dom";

const ShareResult = () => {
  const url = useLocation();

  return <Input defaultValue={url.search} />;
};

export default ShareResult;
