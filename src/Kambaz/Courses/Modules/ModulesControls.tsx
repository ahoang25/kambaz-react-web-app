import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import "./modules.css"


export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex flex-nowrap gap-2 justify-content-end align-items-center overflow-auto mb-3">
      <Button variant="secondary" size="lg" id="wd-collapse-all">
        Collapse All
      </Button>
      <Button variant="secondary" size="lg" id="wd-view-progress">
        View Progress
      </Button>

      <Dropdown>
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            Unpublish all modules and items
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="danger" size="lg" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
    </div>
  );
}
