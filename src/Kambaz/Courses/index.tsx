import { useParams, useLocation } from "react-router";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { useEffect, useState } from "react";
import * as courseClient from "./client"; 
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams(); 
  const { pathname } = useLocation(); 
  const [users, setUsers] = useState<any[]>([]);

  const course = courses.find((course) => course._id === cid);
  const breadcrumb = pathname.split("/")[4];

  useEffect(() => {
    const fetchUsers = async () => {
      if (!cid) return;
      try {
        const result = await courseClient.findUsersForCourse(cid);
        const enrolledUsers = result
          .map((enr: any) => enr.user)
          .filter((u: any) => u); 
        setUsers(enrolledUsers);
      } catch (e) {
        console.error("Failed to load users for course", e);
      }
    };
    fetchUsers();
  }, [cid]);

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
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
