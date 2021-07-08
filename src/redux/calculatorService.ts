import IAction from "../interfaces/IAction";
import IState from "../interfaces/IState";
import { ADD, DIVIDE, MULTIPLY, SUBTRACT } from "./actions/actionTypes";

export class calculatorService {
  static updateInput = (state: IState, action: IAction) => {
    const { input } = action.payload;
    let newInput = input;

    if (state.isNewInput) {
      if (input === ".") {
        newInput = "0.";
      }

      return {
        ...state,
        display: newInput,
        isNewInput: false,
      };
    }

    if (state.display.length > 10) {
      return { ...state };
    }

    if (input === "." && state.display.includes(".")) {
      return { ...state };
    }

    if (state.display === "0" && input !== ".") {
      return { ...state, display: input };
    }

    return { ...state, display: (state.display += input) };
  };

  static executeArithmetic(arithmeticType: string, input1: string, input2: string): string {
    if (!this.isInputValid(input1)) {
      input1 = "0";
    }
    if (!this.isInputValid(input2)) {
      input2 = "0";
    }

    let result = null;

    switch (arithmeticType) {
      case ADD:
        result = Number((Number(input1) + Number(input2)).toFixed(9));
        break;
      case SUBTRACT:
        result = Number((Number(input1) - Number(input2)).toFixed(9));
        break;
      case MULTIPLY:
        result = Number(input1) * Number(input2);
        break;
      case DIVIDE:
        result = Number(input1) / Number(input2);
        break;
      default:
        result = Number(input2);
    }

    return String(result).slice(0, 13);
  }

  static showResult(state: IState, result: string, arithmetic: string) {
    if (state.isNewInput === true) {
      return { ...state, result: state.display, arithmetic };
    }
    if (!this.isInputValid(result)) {
      result = "ERROR";
    }

    return {
      ...state,
      display: `${result}`,
      result: `${result}`,
      isNewInput: true,
      arithmetic: arithmetic,
    };
  }

  private static isInputValid(input: string) {
    let i = new Number(input);

    return !Number.isNaN(i);
  }
}
