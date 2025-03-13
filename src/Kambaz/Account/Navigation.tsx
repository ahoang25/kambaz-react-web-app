import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux"; // Import Redux selector
import "./account.css";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation">
      <ListGroup variant="flush">
        {links.includes("Signin") && (
          <ListGroup.Item>
            <Link to="/Kambaz/Account/Signin" className="nav-link active">
              Signin
            </Link>
          </ListGroup.Item>
        )}
        {links.includes("Signup") && (
          <ListGroup.Item>
            <Link to="/Kambaz/Account/Signup" className="nav-link text-danger">
              Signup
            </Link>
          </ListGroup.Item>
        )}
        {links.includes("Profile") && (
          <ListGroup.Item>
            <Link to="/Kambaz/Account/Profile" className="nav-link text-danger">
              Profile
            </Link>
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}
