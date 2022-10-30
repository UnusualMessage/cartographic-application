import { MouseEventHandler, useCallback, useEffect, useState } from "react";

export enum Resize {
  width,
  height,
}

export interface Limit {
  top: number;
  bottom: number;
}

interface Props {
  initial: number;
  type: Resize;
  limit: Limit;
}

const useResizing = ({ initial, type, limit }: Props) => {
  const [size, setSize] = useState(initial);
  const [isResizing, setIsResizing] = useState(false);

  const onMouseDown: MouseEventHandler = () => {
    setIsResizing(true);
  };

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isResizing) {
        switch (type) {
          case Resize.height:
            setSize((size) => {
              const newSize = size - event.movementY;

              if (newSize < limit.bottom || newSize > limit.top) {
                return size;
              } else {
                return newSize;
              }
            });

            break;

          case Resize.width:
            setSize((size) => {
              const newSize = size + event.movementX;

              if (newSize < limit.bottom || newSize > limit.top) {
                return size;
              } else {
                return newSize;
              }
            });

            break;
        }
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
