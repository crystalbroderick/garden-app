import { Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="curved-bottom shadow hero-overlay mt-2">
      <Container>
        <h1>Grow your own food</h1>
        <span>Even on your balcony</span>
      </Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <Link to="/plants">
            <Button variant="light" className="m-3">
              All Plants
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default Home
