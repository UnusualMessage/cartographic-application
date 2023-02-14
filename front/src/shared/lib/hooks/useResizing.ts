import { MouseEventHandler, useCallback, useEffect, useState } from "react";

import { ResizeType } from "@shared/misc/types";

import MapStore from "../../misc/stores/map/MapStore";

interface Props {
  initial: number;
  type: ResizeType;
  bottomBorder: number;
}

export const useResizing = ({ initial, type, bottomBorder }: Props) => {
  const [size, setSize] = useState(initial);
  const [isResizing, setIsResizing] = useState(false);
  const map = MapStore.map;

  const onMouseDown: MouseEventHandler = () => {
    setIsResizing(true);
  };

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isResizing) {
        setSize((size) => {
          let newSize: number;

          if (type === ResizeType.width) {
            newSize = size + event.movementX;

            if (newSize > window.innerWidth) {
              newSize = size;
            }
          } else {
            newSize = size - event.movementY;

            if (newSize > window.innerHeight) {
              newSize = size;
            }
          }

          if (newSize < bottomBorder) {
            return size;
          } else {
            return newSize;
          }
        });

        map?.updateSize();
      }
    },
    [isResizing]
  );

  const onMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [isResizing]);

  return { size, start: onMouseDown, isResizing };
};
