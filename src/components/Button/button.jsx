"use client";
import React from "react";

export const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} data-testid="button-test">
      {children}
    </button>
  );
};
