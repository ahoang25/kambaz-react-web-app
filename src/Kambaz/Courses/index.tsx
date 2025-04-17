import { useParams, useLocation } from "react-router";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

import PeoplePage from "./People";
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams(); 
  const { pathname } = useLocation(); 

  console.log("Captured cid from URL:", cid);

  const course = courses.find((course) => {
    return course._id === cid;
  });


  const breadcrumb = pathname.split("/")[4];

  return (
    <div id="wd-courses" style={{ marginLeft: "110px" }}>
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? `${course.name} > ${breadcrumb || ""}` : "Course Not Found"}
      </h2>
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>

        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeoplePage />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
}
