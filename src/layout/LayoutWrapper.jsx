import React from "react";

const LayoutWrapper = ({ children }) => {
  return (
    <div
      className="max-w-5xl px-4 py-28 mx-auto sm:px-6 xl:max-w-6xl xl:px-0 h-screen
                flex flex-col  items-center "
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
