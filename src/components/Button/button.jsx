import React from "react";

export const Button = ({ onClick }) => {
  if (!onClick) {
    return (
      <button
        onClick={() => {
          console.log("Hello");
        }}
        data-testid="button-test"
      >
        button
      </button>
    );
  }
  return (
    <button onClick={onClick} data-testid="button-test">
      button
    </button>
  );
};
