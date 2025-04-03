import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "M101",
    name: "Intro to MERN",
    description: "Module about setting up the MERN stack",
    course: "CS5610"
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${ASSIGNMENT_API_URL}`}>
        Get Assignment
      </a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${ASSIGNMENT_API_URL}/title`}>
        Get Title
      </a>
      <hr />

      <h4>Modifying Properties</h4>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end mt-2"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <hr />

      <a className="btn btn-success mb-2" href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><br />

      <a className="btn btn-success mb-2" href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><br />

      <input
        className="form-control mb-2"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        placeholder="Module Name"
      />
      <a
        className="btn btn-primary mb-3"
        href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
      >
        Update Module Name
      </a>

      <input
        className="form-control mb-2"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        placeholder="Module Description"
      />
      <a
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
      >
        Update Module Description
      </a>

      <hr />
    </div>
  );
}
