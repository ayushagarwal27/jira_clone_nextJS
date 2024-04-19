import React from "react";

export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} data-testid="button-test">
      button
    </button>
  );
};
