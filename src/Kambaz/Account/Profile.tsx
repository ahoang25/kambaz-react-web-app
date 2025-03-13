import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer"; 
import { Form, Container, Button } from "react-bootstrap";
import "./profile.css";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  useEffect(() => {
    if (!currentUser) {
      navigate("/Kambaz/Account/Signin");
    }
  }, [currentUser, navigate]);

  const [profile, setProfile] = useState(currentUser || {});

  const signout = () => {
    dispatch(setCurrentUser(null)); 
    navigate("/Kambaz/Account/Signin"); 
  };

  return (
    <Container className="profile-container">
      <h2 className="profile-title">Profile</h2>
      {profile && (
        <Form>
          <Form.Group className="mb-2">
            <Form.Control 
              type="text" 
              defaultValue={profile.username} 
              placeholder="Username" 
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control 
              type="password" 
              defaultValue={profile.password} 
              placeholder="Password" 
              onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control 
              type="text" 
              defaultValue={profile.firstName} 
              placeholder="First Name" 
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control 
              type="text" 
              defaultValue={profile.lastName} 
              placeholder="Last Name" 
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control 
              type="date" 
              defaultValue={profile.dob} 
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control 
              type="email" 
              defaultValue={profile.email} 
              placeholder="Email" 
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select 
              defaultValue={profile.role} 
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </Form.Select>
          </Form.Group>

          <Button variant="danger" className="w-100" onClick={signout}>
            Sign out
          </Button>
        </Form>
      )}
    </Container>
  );
}
