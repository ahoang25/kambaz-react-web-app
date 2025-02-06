import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import "./profile.css"; 

export default function Profile() {
  return (
    <Container className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <Form>
        <Form.Group className="mb-2">
          <Form.Control type="text" defaultValue="alice" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control type="password" defaultValue="123" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control type="text" defaultValue="Alice" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control type="text" defaultValue="Wonderland" placeholder="Last Name" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control type="date" defaultValue="2000-01-01" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control type="email" defaultValue="alice@wonderland.com" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select defaultValue="USER">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
        </Form.Group>

        <Button variant="danger" className="w-100" as={Link} to="/Kambaz/Account/Signin">
          Signout
        </Button>
      </Form>
    </Container>
  );
}
