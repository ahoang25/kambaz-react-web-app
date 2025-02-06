import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Container } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> 
      <hr />
      
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {/* CS1234 React JS */}
          <Col style={{ maxWidth: "270px" }}>
            <Card className="mx-auto">
              <Link to="/Kambaz/Courses/1234/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" height={160} />
                <Card.Body>
                  <Card.Title>CS1234 React JS</Card.Title>
                  <Card.Text>Full Stack Software Developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* CS3650 Computer Systems */}
          <Col style={{ maxWidth: "270px" }}>
            <Card className="mx-auto">
              <Link to="/Kambaz/Courses/3650/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/CS3650.jpg" height={160} />
                <Card.Body>
                  <Card.Title>CS3650</Card.Title>
                  <Card.Text>Computer Systems</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* CS4550 Web Development */}
          <Col style={{ maxWidth: "270px" }}>
            <Card className="mx-auto">
              <Link to="/Kambaz/Courses/4550/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/CS4550.jpg" height={160} />
                <Card.Body>
                  <Card.Title>CS4550</Card.Title>
                  <Card.Text>Web Development</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* CS4400 Programming Languages */}
          <Col style={{ maxWidth: "270px" }}>
            <Card className="mx-auto">
              <Link to="/Kambaz/Courses/4400/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/CS4400.jpg" height={160} />
                <Card.Body>
                  <Card.Title>CS4400</Card.Title>
                  <Card.Text>Programming Languages</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* CS3700 Networks */}
          <Col style={{ maxWidth: "270px" }}>
            <Card className="mx-auto">
              <Link to="/Kambaz/Courses/3700/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/CS3700.jpg" height={160} />
                <Card.Body>
                  <Card.Title>CS3700</Card.Title>
                  <Card.Text>Networks & Distributed Systems</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* CS3800 Theory */}
          <Col style={{ maxWidth: "270px" }}>
            <Card className="mx-auto">
              <Link to="/Kambaz/Courses/3800/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/CS3800.jpg" height={160} />
                <Card.Body>
                  <Card.Title>CS3800</Card.Title>
                  <Card.Text>Theory & Computation</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* CS3520 C++ */}
          <Col style={{ maxWidth: "270px" }}>
            <Card className="mx-auto">
              <Link to="/Kambaz/Courses/3520/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/CS3520.jpg" height={160} />
                <Card.Body>
                  <Card.Title>CS3520</Card.Title>
                  <Card.Text>Programming in C++</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* CS4530 Software Engineering */}
          <Col style={{ maxWidth: "270px" }}>
            <Card className="mx-auto">
              <Link to="/Kambaz/Courses/4530/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/CS4530.jpg" height={160} />
                <Card.Body>
                  <Card.Title>CS4530</Card.Title>
                  <Card.Text>Fundamentals of Software Engineering</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}