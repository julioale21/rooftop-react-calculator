import React from "react";
import { Button, Col } from "react-bootstrap";

interface Props {
  value: string;
  span?: number;
  background?: "primary" | "secondary" | "success" | "danger" | "warning";
  onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const ButtonCalc: React.FC<Props> = ({ value = "0", background = "secondary", span = 3 }) => {
  return (
    <Col className="p-1" xs={{ span: span }}>
      <Button className="w-100 m-0 font-weight-bold" variant={background}>
        {value}
      </Button>
    </Col>
  );
};

export default ButtonCalc;
