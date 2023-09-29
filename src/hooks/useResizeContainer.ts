import { useEffect } from "react";
import { zafClient } from "../sdk/zafClient.ts";

export interface UseResizeContainerOptions {
  height: string | number;
  width: string | number;
}

function dimensionString(amount: string | number) {
  if (typeof amount === "number") {
    return amount + "px";
  }

  return amount;
}

export function useResizeContainer(opts: UseResizeContainerOptions) {
  const height = dimensionString(opts.height);
  const width = dimensionString(opts.width);

  useEffect(() => {
    zafClient.invoke("resize", { height: height, width: width });
  }, [height, width]);
}
