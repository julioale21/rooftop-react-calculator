import React from "react";
import { Button, Col } from "react-bootstrap";
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
  return (
    <Col className="p-1" xs={{ span: span }}>
      <Button
        className="button w-100 mx-0 my-1"
        style={{ boxShadow: `2px 3px 4px ${shadow}` }}
        variant={background}
      >
        <p className="font-weight-bold m-0" style={{ fontSize: "2rem" }}>
          {value}
        </p>
      </Button>
    </Col>
  );
};

export default ButtonCalc;
