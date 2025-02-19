import { useParams, useLocation } from "react-router";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams(); // Capture course ID from URL
  const { pathname } = useLocation(); // Capture current URL path

  console.log("Captured cid from URL:", cid);

  // Find course based on ID
  const course = courses.find((course) => {
    return course._id === cid;
  });


  // Extract breadcrumb name from URL (e.g., Home, Modules, Assignments)
  const breadcrumb = pathname.split("/")[4]; // 4th segment of path is the breadcrumb name

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {/* Display breadcrumb if available */}
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
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
