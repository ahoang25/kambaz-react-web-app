import { BsThreeDotsVertical, BsGripVertical } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import GreenCheckmark from "./GreenCheckmark";
import { Link, useParams } from "react-router-dom"; 
import * as db from "../../Database"; 
import "./assignments.css";

export default function Assignments() {
  const { cid } = useParams(); 
  const courseAssignments = db.assignments.filter((assignment) => assignment.course === cid); 

  return (
    <Container fluid>
      <Row>
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <input
              type="text"
              placeholder="Search for Assignments"
              className="form-control w-50"
            />
            <div>
              <Button variant="light" className="me-2">+ Group</Button>
              <Button variant="danger">+ Assignment</Button>
            </div>
          </div>

          <ListGroup className="rounded-0">
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3 bg-light">
              <div className="fw-bold">
                <BsGripVertical className="me-2" />
                ASSIGNMENTS
              </div>
              <div className="d-flex align-items-center">
                <span className="text-secondary me-3">40% of Total</span>
                <Button variant="light" className="p-0 border-0">
                  <BsThreeDotsVertical />
                </Button>
              </div>
            </ListGroup.Item>

            {courseAssignments.map((assignment) => (
              <ListGroup.Item
                key={assignment._id}
                className="d-flex align-items-center border rounded p-3 position-relative"
              >
                <div className="border-success border-4 position-absolute start-0 top-0 bottom-0"></div>
                <BsGripVertical className="me-2 fs-5 text-secondary" />
                <FaFileAlt className="me-2 text-success" />
                <div className="flex-grow-1">
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="fw-bold text-primary text-decoration-none"
                  >
                    {assignment.title}
                  </Link>
                  <p className="mb-0">
                    <span className="text-danger">Multiple Modules</span> |  
                    <strong> Not available until {assignment.available}</strong>
                  </p>
                  <p className="mb-0 text-secondary">
                    <strong>Due</strong> {assignment.due} | {assignment.points} pts
                  </p>
                </div>
                <GreenCheckmark />
                <Button variant="light" className="p-0 border-0 ms-3">
                  <BsThreeDotsVertical />
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
