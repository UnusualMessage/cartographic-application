import { MouseEventHandler, useCallback, useEffect, useState } from "react";

import { Resizes, MapStore } from "../../misc";

interface Props {
  initial: number;
  type: Resizes;
  bottomBorder: number;
}

export const useResizing = ({ initial, type, bottomBorder }: Props) => {
  const [size, setSize] = useState(initial);
  const [isResizing, setIsResizing] = useState(false);
  const map = MapStore.map;

  const toggle = () => {
    if (size > bottomBorder) {
      setSize(bottomBorder);
    } else {
      setSize(initial);
    }
  };

  const onMouseDown: MouseEventHandler = () => {
    setIsResizing(true);
  };

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isResizing) {
        setSize((size) => {
          let newSize: number;

          if (type === Resizes.width) {
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

  return { size, start: onMouseDown, isResizing, toggle };
};
