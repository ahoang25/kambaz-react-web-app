import { useParams } from "react-router";
import { useEffect, useState } from "react";
import PeopleTable from "./Table";
import * as client from "../client";

export default function PeoplePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await client.findUsersForCourse(cid!);
        setUsers(data);
      } catch (err) {
        console.error("Failed to load users:", err);
      }
    };

    if (cid) fetchUsers();
  }, [cid]);

  return (
    <div className="p-2">
      <h4>People</h4>
      <PeopleTable users={users} />
    </div>
  );
}
