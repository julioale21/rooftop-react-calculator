import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Row
      className="w-100 d-flex flex-row align-items-center px-5 justify-content-between"
      style={{ height: "70px" }}
    >
      <Image
        height="80"
        src="https://www.rooftopacademy.com/6c17e93d0fca4da31f87012b78f5adc7.png"
      />
      <Col className="d-flex flex-row justify-content-end">
        <a
          className="mr-3"
          href="https://github.com/julioale21/rooftop-react-calculator"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="https://icongr.am/fontawesome/github.svg?size=35&color=ffffff" />
        </a>
        <a
          href="https://www.linkedin.com/in/julio-alejandro-romero-bb4197119/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="https://icongr.am/fontawesome/linkedin.svg?size=35&color=ffffff" />
        </a>
      </Col>
    </Row>
  );
};

export default Header;
