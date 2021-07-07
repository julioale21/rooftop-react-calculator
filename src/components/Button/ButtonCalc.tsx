import React from "react";
import { Button, Col } from "react-bootstrap";
import {
  addition,
  subtraction,
  equal,
  division,
  multiplication,
  del,
  resetDisplay,
  updateDisplay,
} from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import "./index.css";
interface Props {
  value: string;
  span?: number;
  shadow?: string;
  background?: "primary" | "secondary" | "success" | "danger" | "warning" | "light";
  onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const ButtonCalc: React.FC<Props> = ({
  value,
  background = "light",
  span = 3,
  shadow = "gray",
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    switch (value) {
      case "RESET":
        dispatch(resetDisplay());
        break;
      case "DEL":
        dispatch(del());
        break;
      case "+":
        dispatch(addition());
        break;
      case "-":
        dispatch(subtraction());
        break;
      case "%":
        dispatch(division());
        break;
      case "x":
        dispatch(multiplication());
        break;
      case "=":
        dispatch(equal());
        break;
      default:
        dispatch(updateDisplay(value));
    }
  };

  return (
    <Col className="p-1" xs={{ span: span }}>
      <Button
        className="button w-100 mx-0 my-1"
        style={{ boxShadow: `2px 3px 4px ${shadow}` }}
        variant={background}
        onClick={handleClick}
      >
        <p className="font-weight-bold m-0" style={{ fontSize: "2rem" }}>
          {value}
        </p>
      </Button>
    </Col>
  );
};

export default ButtonCalc;
