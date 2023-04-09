import { useCallback, useState, MouseEventHandler } from "react";

interface Position {
  x?: number;
  y?: number;
}

type Returns = [Position, boolean, MouseEventHandler];

export const usePopup = (): Returns => {
  const [position, setPosition] = useState<Position>({});
  const [visible, setVisible] = useState(false);

  const onPopup: MouseEventHandler = useCallback((event) => {
    const newPosition = {
      x: event.clientX - 50,
      y: event.clientY,
    };

    setPosition(newPosition);
    setVisible(true);

    function onClickOutside() {
      setVisible(false);
      document.removeEventListener("click", onClickOutside);
    }

    document.addEventListener("click", onClickOutside);
  }, []);

  return [position, visible, onPopup];
};
