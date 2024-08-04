"use client";
import React from "react";
import ThemeRegistry from "../ThemeRegistry";
const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ThemeRegistry>{children}</ThemeRegistry>
    </>
  );
};

export default Providers;
