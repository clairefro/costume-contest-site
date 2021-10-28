import React, { useState } from "react";
import { useComponentMounted } from "./useComponentMounted";

const useStateIfMounted = <T>(
  initialVal: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const isMounted = useComponentMounted();
  const [state, setState] = useState<T>(initialVal);
  const safeSetState = (val: React.SetStateAction<T>) => {
    if (isMounted) {
      setState(val);
    }
  };
  return [state, safeSetState];
};

export { useStateIfMounted };
