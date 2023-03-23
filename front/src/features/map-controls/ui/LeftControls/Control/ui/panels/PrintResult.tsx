import { Button } from "antd";

import { MapStore } from "@shared/misc";

const PrintResult = () => {
  return (
    <Button onClick={() => MapStore.printMap()} type={"text"}>
      Печать
    </Button>
  );
};

export default PrintResult;
