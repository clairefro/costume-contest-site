import { useRef, useEffect } from "react";

const useComponentMounted = () => {
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted.current;
};

export { useComponentMounted };
