import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { BsGithub, BsLinkedin } from "react-icons/bs"
const Footer = () => {
  return (
    <div className="bg-teagreen p-3">
      <div className="d-flex flex justify-content-center">
        <a href="https://github.com/crystalbroderick" className="text-dark">
          <BsGithub />
        </a>

        <span className="ms-2">
          <a
            href="https://www.linkedin.com/in/crystalbroderick/"
            className="text-dark"
          >
            <BsLinkedin />
          </a>
        </span>
      </div>
      <div className="text-center">
        <span className="text-reset fw-bold">© 2023 Crystal Broderick</span>
      </div>
    </div>
  )
}
export default Footer
