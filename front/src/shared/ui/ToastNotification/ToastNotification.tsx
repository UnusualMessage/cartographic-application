import { Position, Toaster } from "@blueprintjs/core";
import React, { useLayoutEffect, useRef } from "react";

import { NotificationsService } from "@shared/api";

const ToastNotification = () => {
  const ref = useRef<Toaster>(null);

  useLayoutEffect(() => {
    NotificationsService.toaster = ref.current;
  }, []);

  return <Toaster position={Position.TOP} ref={ref} />;
};

export default ToastNotification;
