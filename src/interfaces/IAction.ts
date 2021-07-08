import { Action } from "redux";

export default interface IAction extends Action {
  type: string;
  payload: {
    operation: string;
    input: string;
  };
}
