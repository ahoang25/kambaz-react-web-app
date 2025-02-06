import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import "./signup.css"; 

export default function Signup() {
  return (
    <Container className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <Form>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>


        <Button variant="primary" className="w-100 mb-2" as={Link} to="/Kambaz/Account/Profile">
          Signup
        </Button>

        <Link to="/Kambaz/Account/Signin" className="signup-link">
          Signin
        </Link>
      </Form>
    </Container>
  );
}
