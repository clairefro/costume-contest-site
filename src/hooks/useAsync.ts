import React, { useEffect } from "react";

/** from https://stackoverflow.com/a/60907638 */

const useAsync = (
  asyncFn: (args?: any) => any,
  onSuccess: (data: any) => any
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((data: any) => {
      if (isActive) onSuccess(data);
    });
    return () => {
      isActive = false;
    };
  }, [asyncFn, onSuccess]);
};

export { useAsync };
