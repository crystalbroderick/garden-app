import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { BsGithub, BsLinkedin } from "react-icons/bs"
const Footer = () => {
  return (
    <>
      <Row className="bg-offwhite p-2 justify-content-md-center mt-auto ">
        <Col md="auto">
          <a href="https://github.com/crystalbroderick">
            <BsGithub />
          </a>

          <span className="ms-2">
            <a href="https://www.linkedin.com/in/crystalbroderick/">
              <BsLinkedin />
            </a>
          </span>
        </Col>
      </Row>
      <Row
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <span className="text-reset fw-bold">© 2023 Crystal Broderick</span>
      </Row>
    </>
  )
}
export default Footer
