import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "./account.css";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Link to="/Kambaz/Account/Signin" className="nav-link active">
            Signin
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Kambaz/Account/Signup" className="nav-link text-danger">
            Signup
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/Kambaz/Account/Profile" className="nav-link text-danger">
            Profile
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
