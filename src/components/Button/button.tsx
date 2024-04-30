"use client";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  primary?: Boolean;
  label?: String;
  size?: String;
}

export const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} data-testid="button-test">
      {label}
    </button>
  );
};
