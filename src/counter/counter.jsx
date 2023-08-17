import React from "react";
import { StyledCounter, Value } from "./styled";
import Button from "/src/button/button";

function Counter({ className, value, onChange, minValue }) {
  const isDisabledMinus = value === minValue;
  return (
    <StyledCounter className={className}>
      <Button
        size="small"
        disabled={isDisabledMinus}
        onClick={() => onChange && onChange(value - 1)}
      >
        -
      </Button>
      <Value
        value={value}
        size={1}
        onChange={(evt) => {
          const value = evt.target.value;
          onChange(value < minValue ? minValue : value);
        }}
      />
      <Button size="small" onClick={() => onChange && onChange(value + 1)}>
        +
      </Button>
    </StyledCounter>
  );
}

export default Counter;
