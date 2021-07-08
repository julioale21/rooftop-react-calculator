import { UPDATE } from "./actionTypes";
import { ADD } from "./actionTypes";
import { DEL } from "./actionTypes";
import { SUBTRACT } from "./actionTypes";
import { MULTIPLY } from "./actionTypes";
import { DIVIDE } from "./actionTypes";
import { RESET } from "./actionTypes";
import { EQUAL } from "./actionTypes";

export const updateDisplay = (value: string) => ({
  type: UPDATE,
  payload: {
    input: value,
  },
});

export const addition = () => ({
  type: ADD,
});

export const subtraction = () => ({
  type: SUBTRACT,
});

export const multiplication = () => ({
  type: MULTIPLY,
});

export const division = () => ({
  type: DIVIDE,
});

export const resetDisplay = () => ({
  type: RESET,
});

export const equal = () => ({
  type: EQUAL,
});

export const del = () => ({
  type: DEL,
});
