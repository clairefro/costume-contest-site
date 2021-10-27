import React, { FC } from "react";

const GlobalLayout: FC = ({ children }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center w-full">{children}</div>
    </div>
  );
};

export default GlobalLayout;
