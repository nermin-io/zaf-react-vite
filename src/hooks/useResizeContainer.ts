import { useEffect } from "react";
import { zafClient } from "../sdk/zafClient.ts";

export interface UseResizeContainerOptions {
  height: string | number;
  width: string | number;
}

function ensureDimensionString(amount: string | number) {
  if (typeof amount === "number") {
    return amount + "px";
  }

  return amount;
}

export function useResizeContainer({
  height,
  width,
}: UseResizeContainerOptions) {
  const h = ensureDimensionString(height);
  const w = ensureDimensionString(width);

  useEffect(() => {
    zafClient.invoke("resize", {
      height: h,
      width: w,
    });
  }, [h, w]);
}
