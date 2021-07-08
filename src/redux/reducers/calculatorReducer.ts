/* eslint-disable no-console */
import { ADD, UPDATE, DEL, RESET, SUBTRACT, MULTIPLY, DIVIDE, EQUAL } from "../actions/actionTypes";
import IAction from "../../interfaces/IAction";
import IState from "../../interfaces/IState";
import { calculatorService } from "../calculatorService";

const INITIAL_STATE: IState = {
  display: "0",
  isNewInput: true,
  result: "0",
  arithmetic: "",
};

const reducer = (state = INITIAL_STATE, action: IAction): IState => {
  const { type } = action;
  let result;

  switch (type) {
    case RESET:
      return INITIAL_STATE;

    case UPDATE:
      return calculatorService.updateInput(state, action);

    case DEL:
      return {
        ...state,
        display: state.display.length === 1 ? "0" : state.display.slice(0, -1),
      };
    case ADD:
    case SUBTRACT:
    case MULTIPLY:
    case DIVIDE:
      result = calculatorService.executeArithmetic(state.arithmetic, state.result, state.display);

      return calculatorService.showResult(state, result, action.type);
    case EQUAL:
      result = calculatorService.executeArithmetic(state.arithmetic, state.result, state.display);

      return calculatorService.showResult(state, result, "");
    default:
      return state;
  }
};

export default reducer;
