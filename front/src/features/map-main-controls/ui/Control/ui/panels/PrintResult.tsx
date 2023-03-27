import { Button, Select } from "antd";
import { observer } from "mobx-react-lite";

import { MapStore } from "@shared/misc";

const PrintResult = () => {
  const onSelect = (value: "a4" | "a3") => {
    MapStore.printFormat = value;
  };

  return (
    <>
      <Select
        onChange={onSelect}
        value={MapStore.printFormat}
        options={[
          { value: "a4", label: "A4 (альбомный)" },
          { value: "a3", label: "A3 (альбомный)" },
        ]}
      />

      <Button onClick={() => MapStore.printMap()} type={"primary"}>
        Печать
      </Button>
    </>
  );
};

export default observer(PrintResult);
