import React from "react";
import { Row } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <Row className="w-100 d-flex justify-content-center mt-2">
      <p className="text-white">
        Solved by{" "}
        <span>
          <a
            className="text-decoration-none text-dark font-weight-bold"
            href="https://github.com/julioale21"
            rel="noopener noreferrer"
            target="_blank"
          >
            @julioale21
          </a>
        </span>
      </p>
    </Row>
  );
};

export default Footer;
