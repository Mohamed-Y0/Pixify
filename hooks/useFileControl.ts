import { useState } from "react";

// This Hook to cnotrol the file - quality - format (not-available yet)

function useFileControl() {
  const [quality, setQuality] = useState<number>(75);

  if (quality > 100 || quality < 0)
    throw Error("The Quality Must Be Between 0 - 100");

  return { quality, setQuality };
}

export default useFileControl;
