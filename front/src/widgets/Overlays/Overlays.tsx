import { GeozoneExport } from "@entities/geozone";
import { ToastNotification } from "@shared/ui";

const Overlays = () => {
  return (
    <>
      <GeozoneExport />
      <ToastNotification />
    </>
  );
};

export default Overlays;
