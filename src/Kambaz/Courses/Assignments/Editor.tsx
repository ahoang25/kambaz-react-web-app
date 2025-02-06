import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container fluid className="p-4">
      <Row>
        <Col md={8}>
          <Form>
            <Form.Group controlId="assignmentName" className="mb-3">
              <Form.Label className="fw-bold">Assignment Name</Form.Label>
              <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
            </Form.Group>

            <Form.Group controlId="assignmentDescription" className="mb-3">
              <Form.Label className="fw-bold">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Links to all relevant source code repositories
- The Kanbas application should include a link to navigate back to the landing page.`}
              />
            </Form.Group>

            <Form.Group controlId="points" className="mb-3">
              <Form.Label className="fw-bold">Points</Form.Label>
              <Form.Control type="number" defaultValue="100" />
            </Form.Group>

            <Form.Group controlId="assignmentGroup" className="mb-3">
              <Form.Label className="fw-bold">Assignment Group</Form.Label>
              <Form.Select defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="displayGradeAs" className="mb-3">
              <Form.Label className="fw-bold">Display Grade as</Form.Label>
              <Form.Select defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Letter Grade">Letter Grade</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="submissionType" className="mb-3">
              <Form.Label className="fw-bold">Submission Type</Form.Label>
              <Form.Select defaultValue="Online">
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
                <option value="External Tool">External Tool</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Online Entry Options</Form.Label>
              <div>
                <Form.Check type="checkbox" label="Text Entry" />
                <Form.Check type="checkbox" label="Website URL" />
                <Form.Check type="checkbox" label="Media Recordings" />
                <Form.Check type="checkbox" label="Student Annotation" />
                <Form.Check type="checkbox" label="File Uploads" />
              </div>
            </Form.Group>

            <Form.Group controlId="assignTo" className="mb-3">
              <Form.Label className="fw-bold">Assign to</Form.Label>
              <Form.Control type="text" defaultValue="Everyone" />
            </Form.Group>

            <Form.Group controlId="dueDate" className="mb-3">
              <Form.Label className="fw-bold">Due</Form.Label>
              <Form.Control type="date" defaultValue="2024-05-13" />
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="availableFrom">
                  <Form.Label className="fw-bold">Available from</Form.Label>
                  <Form.Control type="date" defaultValue="2024-05-06" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="availableUntil">
                  <Form.Label className="fw-bold">Until</Form.Label>
                  <Form.Control type="date" defaultValue="2024-05-20" />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-end mt-3">
              <Button variant="secondary" className="me-2">
                Cancel
              </Button>
              <Button variant="danger">Save</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
