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

// const updateInput = (state: IState, action: IAction) => {
//   const { input } = action.payload;
//   let newInput = input;

//   if (state.isNewInput) {
//     if (input === ".") {
//       newInput = "0.";
//     }

//     return {
//       ...state,
//       display: newInput,
//       isNewInput: false,
//     };
//   }

//   if (input.length > 24) {
//     return { ...state };
//   }

//   if (input === "." && state.display.includes(".")) {
//     return { ...state };
//   }

//   if (state.display === "0" && input !== ".") {
//     return { ...state, display: input };
//   }

//   return { ...state, display: (state.display += input) };
// };

// function executeArithmetic(arithmeticType: string, input1: string, input2: string): string {
//   if (!isInputValid(input1)) {
//     input1 = "0";
//   }
//   if (!isInputValid(input2)) {
//     input2 = "0";
//   }

//   let result = null;

//   switch (arithmeticType) {
//     case ADD:
//       result = Number(input1) + Number(input2);
//       break;
//     case SUBTRACT:
//       result = Number(input1) - Number(input2);
//       break;
//     case MULTIPLY:
//       result = Number(input1) * Number(input2);
//       break;
//     case DIVIDE:
//       result = Number(input1) / Number(input2);
//       break;
//     default:
//       result = Number(input2);
//   }

//   return String(result);
// }

// function showResult(state: IState, result: string, arithmetic: string) {
//   if (state.isNewInput === true) {
//     return { ...state, result: state.display, arithmetic };
//   }
//   if (!isInputValid(result)) {
//     result = "ERROR";
//   }

//   return {
//     ...state,
//     display: `${result}`,
//     result: `${result}`,
//     isNewInput: true,
//     arithmetic: arithmetic,
//   };
// }

// function isInputValid(input: string) {
//   let i = new Number(input);

//   return !Number.isNaN(i);
// }

export default reducer;
