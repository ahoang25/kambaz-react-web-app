import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./assignmentEditor.css";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course ID and assignment ID from URL
  const assignment = db.assignments.find((a) => a._id === aid); // Find assignment by ID

  return (
    <Container fluid className="p-4">
      <Row>
        <Col md={8}>
          <Form>
            {/* Assignment Name */}
            <Form.Group controlId="assignmentName" className="mb-3">
              <Form.Label className="fw-bold">Assignment Name</Form.Label>
              <Form.Control type="text" defaultValue={assignment?.title || ""} />
            </Form.Group>

            {/* Description */}
            <Form.Group controlId="assignmentDescription" className="mb-3">
              <Form.Control
                as="textarea"
                rows={8}
                defaultValue={`The assignment is available online.\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n- Your full name and section\n- Links to each of the lab assignments\n- Links to all relevant source code repositories\n- The Kanbas application should include a link to navigate back to the landing page.`}
                style={{
                  border: "1px solid #ced4da",
                  borderRadius: "8px",
                  backgroundColor: "#f8f9fa",
                  padding: "15px",
                  fontSize: "16px",
                }}
              />
            </Form.Group>

            {/* Points */}
            <Form.Group controlId="points" className="mb-3">
              <Form.Label className="fw-bold">Points</Form.Label>
              <Form.Control
                type="number"
                defaultValue={assignment?.points || ""}
                placeholder="Enter points"
              />
            </Form.Group>

            {/* Assign Section */}
            <Form.Group controlId="assignSection" className="mb-3">
              <Form.Label className="fw-bold fs-5">Assign</Form.Label>

              <Form.Group controlId="assignTo" className="mb-3">
                <Form.Label className="fw-bold">Assign to</Form.Label>
                <Form.Control type="text" defaultValue="Everyone" />
              </Form.Group>

              {/* Due Date */}
              <Form.Group controlId="dueDate" className="mb-3">
                <Form.Label className="fw-bold">Due</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={assignment?.due || ""}
                  placeholder="mm/dd/yyyy"
                />
              </Form.Group>

              {/* Available From & Until */}
              <Row>
                <Col>
                  <Form.Group controlId="availableFrom">
                    <Form.Label className="fw-bold">Available from</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={assignment?.available || ""}
                      placeholder="mm/dd/yyyy"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="availableUntil">
                    <Form.Label className="fw-bold">Until</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="mm/dd/yyyy"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form.Group>

            {/* Buttons */}
            <div className="d-flex justify-content-end mt-4">
              <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                <Button variant="secondary" className="me-2">
                  Cancel
                </Button>
              </Link>
              <Button variant="danger">Save</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
