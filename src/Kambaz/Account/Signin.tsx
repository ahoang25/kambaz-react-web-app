import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import "./signin.css"; 

export default function Signin() {
  return (
    <Container className="signin-wrapper d-flex justify-content-center align-items-center vh-100">
      <div className="signin-container">
        <h2 className="signin-title">Sign In</h2>
        <Form>
          <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="Username" className="signin-input" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" className="signin-input" />
          </Form.Group>

          <Button variant="primary" className="signin-btn w-100">Signin</Button>
        </Form>

        <Link to="/Kambaz/Account/Signup" className="signin-link">Signup</Link>
      </div>
    </Container>
  );
}
