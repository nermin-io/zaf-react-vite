import { useState } from "react";

export interface UseAdjustableHeightOptions {
  initial: number;
  maxHeight?: number;
  minHeight?: number;
}

export function useAdjustableHeight({
  initial,
  maxHeight = 500,
  minHeight = 200,
}: UseAdjustableHeightOptions) {
  const [height, setHeight] = useState(initial);

  const handleResize = (e: MouseEvent) => {
    if (e.clientY < maxHeight && e.clientY >= minHeight) {
      setHeight(e.clientY);
    }
  };

  const cancelResize = () => {
    document.removeEventListener("mousemove", handleResize, false);
    document.removeEventListener("mouseup", cancelResize, false);
  };

  const register = () => {
    return {
      onMouseDown: () => {
        document.addEventListener("mousemove", handleResize, false);
        document.addEventListener("mouseup", cancelResize, false);
      },
    };
  };

  return { height, register };
}
