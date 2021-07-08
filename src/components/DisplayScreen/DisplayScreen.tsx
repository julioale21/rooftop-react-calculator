import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  value: string;
}

const DisplayScreen: React.FC<Props> = ({ value }) => {
  return (
    <Container
      className="bg-dark px-3 py-2 mb-2 shadow-lg overflow-hidden"
      style={{ minHeight: "100px" }}
    >
      <p className="display-4 text-white font-weight-bold text-right">{value}</p>
    </Container>
  );
};

export default DisplayScreen;
