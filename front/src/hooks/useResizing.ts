import { MouseEventHandler, useCallback, useEffect, useState } from "react";

export enum Resize {
  width,
  height,
}

interface Props {
  initial: number;
  type: Resize;
  bottomBorder: number;
}

const useResizing = ({ initial, type, bottomBorder }: Props) => {
  const [size, setSize] = useState(initial);
  const [isResizing, setIsResizing] = useState(false);

  const onMouseDown: MouseEventHandler = () => {
    setIsResizing(true);
  };

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isResizing) {
        setSize((size) => {
          let newSize: number = size;

          if (type === Resize.width) {
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

export default useResizing;
