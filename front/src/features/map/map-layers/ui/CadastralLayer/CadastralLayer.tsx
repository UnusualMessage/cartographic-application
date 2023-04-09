import { FeatureCollection } from "@turf/turf";
import { useState, useEffect } from "react";

import { VectorLayer } from "@entities/map";
import { SourceType } from "@entities/map/map-layers/ui/VectorLayer/VectorLayer";
import { adminLayerId } from "@shared/constants";

const CadastralLayer = () => {
  const [featureCollection, setFeatureCollection] =
    useState<FeatureCollection>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const response = await fetch("/rf/admin_level_5.geojson");
      const result = await response.json();
      setFeatureCollection(result);
      setLoading(false);
    };

    void get();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <VectorLayer
          id={adminLayerId}
          collection={featureCollection}
          type={SourceType.geojson}
        />
      )}
    </>
  );
};

export default CadastralLayer;
