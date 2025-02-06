import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import "./modules.css"

export default function Modules() {
  return (
    <Container fluid>
      <Row>
        <Col md={9}>
          <ModulesControls />

          <ListGroup className="rounded-0" id="wd-modules">
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="fw-bold">Week 1</span>
                <div className="ms-auto"><GreenCheckmark /></div>
              </div>

              <ListGroup className="wd-lessons rounded-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center published">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="fw-bold">LEARNING OBJECTIVES</span>
                  <div className="ms-auto">
                    <LessonControlButtons />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center published">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to the course
                  <div className="ms-auto">
                    <LessonControlButtons />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center published">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn what is Web Development
                  <div className="ms-auto">
                    <LessonControlButtons />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center published">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1
                  <div className="ms-auto">
                    <LessonControlButtons />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center published">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 2
                  <div className="ms-auto">
                    <LessonControlButtons />
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item> 

            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="fw-bold">Week 2</span>
                <div className="ms-auto"><GreenCheckmark /></div>
              </div>

              <ListGroup className="wd-lessons rounded-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center published">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="fw-bold">LEARNING OBJECTIVES</span>
                  <div className="ms-auto">
                    <LessonControlButtons />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center published">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 1
                  <div className="ms-auto">
                    
                    <LessonControlButtons />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center published">
                  <BsGripVertical className="me-2 fs-3" />
                  LESSON 2
                  <div className="ms-auto">
                    <LessonControlButtons />
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item> 
          </ListGroup>
        </Col>

        
      </Row>
    </Container>
  );
}
