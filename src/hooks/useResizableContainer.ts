import { useEffect, useState } from "react";
import { useDebouncedValue } from "./useDebouncedValue.ts";
import { zafClient } from "../lib/zendesk/zafClient.ts";

export interface UseResizeContainerParams {
  defaultHeight: number;
  width?: string;
  maxHeight?: number;
  minHeight?: number;
  debounce?: number;
}

const STORAGE_KEY = "APP_HEIGHT";

function getPersistedHeightOrDefault(defaultHeight: number) {
  const height = localStorage.getItem(STORAGE_KEY);
  if (!height) {
    return defaultHeight;
  }

  return parseInt(height);
}

function toDimensionString(amount: string | number) {
  if (typeof amount === "number") {
    return amount + "px";
  }

  return amount;
}

export function useResizeableContainer({
  defaultHeight,
  width = "100%",
  maxHeight = 500,
  minHeight = 200,
  debounce = 500,
}: UseResizeContainerParams) {
  const [height, setHeight] = useState(
    getPersistedHeightOrDefault(defaultHeight)
  );
  const debouncedHeight = useDebouncedValue(height, debounce);

  const isResizing = height !== debouncedHeight;

  useEffect(() => {
    zafClient.invoke("resize", {
      height: toDimensionString(height),
      width: width,
    });
  }, [height, width]);

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

  return { register, isResizing, height };
}
