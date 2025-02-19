import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { useParams } from "react-router";
import * as db from "../../Database"; 
import "./modules.css";

export default function Modules() {
  const { cid } = useParams();
  const courseModules = db.modules.filter((module) => module.course === cid);

  return (
    <Container fluid>
      <Row>
        <Col md={9}>
          <ModulesControls />

          <ListGroup className="rounded-0" id="wd-modules">
            {courseModules.map((module) => (
              <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="fw-bold">{module.name}</span>
                  <div className="ms-auto"><GreenCheckmark /></div>
                </div>

                {module.lessons && (
                  <ListGroup className="wd-lessons rounded-0">
                    {module.lessons.map((lesson) => (
                      <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1 d-flex align-items-center published">
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name}
                        <div className="ms-auto">
                          <LessonControlButtons />
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
