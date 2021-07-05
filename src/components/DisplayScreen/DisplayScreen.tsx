import React from "react";
import { Container } from "react-bootstrap";

const DisplayScreen: React.FC = () => {
  return (
    <Container className="bg-dark px-3 py-2 mb-2 shadow-lg">
      <p className="display-4 text-white font-weight-bold text-right">0</p>
    </Container>
  );
};

export default DisplayScreen;
