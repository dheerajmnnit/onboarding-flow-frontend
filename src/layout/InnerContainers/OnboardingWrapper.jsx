import React from "react";
import LayoutWrapper from "../LayoutWrapper";

const OnboardingWrapper = ({ children }) => {
  return (
    <LayoutWrapper>
      <div>{children}</div>
    </LayoutWrapper>
  );
};

export default OnboardingWrapper;
