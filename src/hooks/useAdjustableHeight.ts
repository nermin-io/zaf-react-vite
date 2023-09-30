import { useEffect, useState } from "react";
import { useDebouncedValue } from "./useDebouncedValue.ts";

export interface UseAdjustableHeightOptions {
  initial: number;
  maxHeight?: number;
  minHeight?: number;
}

const STORAGE_KEY = "APP_HEIGHT";

function getInitialHeight(initial: number) {
  const height = localStorage.getItem(STORAGE_KEY);
  if (!height) {
    return initial;
  }

  return parseInt(height);
}

export function useAdjustableHeight({
  initial,
  maxHeight = 500,
  minHeight = 200,
}: UseAdjustableHeightOptions) {
  const [height, setHeight] = useState(getInitialHeight(initial));
  const debouncedHeight = useDebouncedValue(height, 500);

  const isAdjusting = height !== debouncedHeight;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, debouncedHeight.toString());
  }, [debouncedHeight]);

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

  return { height, register, isAdjusting };
}
