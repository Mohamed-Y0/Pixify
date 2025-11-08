import { useState } from "react";

function useFileControl() {
  const [quality, setQuality] = useState<number>(75);

  return { quality, setQuality };
}

export default useFileControl;
