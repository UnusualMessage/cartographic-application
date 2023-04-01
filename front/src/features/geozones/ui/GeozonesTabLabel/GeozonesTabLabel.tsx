import { Badge } from "antd";
import { observer } from "mobx-react-lite";

import { GeozonesStore } from "@entities/geozone";

const GeozonesTabLabel = () => {
  const geozones = GeozonesStore.geozones;

  return (
    <Badge
      count={geozones.length}
      size={"small"}
      color="blue"
      offset={[-10, -5]}
    >
      Геозоны
    </Badge>
  );
};

export default observer(GeozonesTabLabel);
