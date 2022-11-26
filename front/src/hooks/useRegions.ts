import { useEffect, useState } from "react";
import { Region, Regions } from "@blueprintjs/table";

type Action = (rowIndex: number) => void;

const useRegions = (action: Action) => {
  const [regions, setRegions] = useState<Region[]>([]);

  const onSelection = (regions: Region[]) => {
    const row = regions[0].rows;

    if (row) {
      const rowIndex = row[0];
      const region = Regions.row(rowIndex);

      setRegions([region]);
      action(rowIndex);
    }
  };

  useEffect(() => {
    setRegions([]);
  }, []);

  return {
    regions,
    onSelection,
  };
};

export default useRegions;
