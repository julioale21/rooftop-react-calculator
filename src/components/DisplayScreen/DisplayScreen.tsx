import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";

interface Props {
  value: string;
}

const DisplayScreen: React.FC<Props> = ({ value }) => {
  return (
    <Container className="display bg-dark px-3 py-2 mb-2 shadow-lg">
      <p className="display-text display-4 text-white font-weight-bold text-right">{value}</p>
    </Container>
  );
};

export default DisplayScreen;
