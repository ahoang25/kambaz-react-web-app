import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/lab5/todos`;

export default function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });
    

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      <h4>Retrieving All Todos</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        id="wd-todo-id"
        className="form-control w-50 mb-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        placeholder="Enter todo ID"
      />
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-success"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <hr />

      <h3>Filtering Array Items</h3>
  <a id="wd-retrieve-completed-todos" className="btn btn-primary"
     href={`${API}?completed=true`}>
    Get Completed Todos
  </a><hr/>

  <h3>Creating new Items in an Array</h3>
  <a id="wd-retrieve-completed-todos" className="btn btn-primary"
     href={`${API}/create`}>
    Create Todo
  </a><hr/>

  <h3>Deleting from an Array</h3>
<input
  defaultValue={todo.id}
  className="form-control w-50 mb-2"
  onChange={(e) => setTodo({ ...todo, id: e.target.value })}
/>
<a
  id="wd-delete-todo"
  className="btn btn-danger"
  href={`${API}/${todo.id}/delete`}
>
  Delete Todo with ID = {todo.id}
</a>
<hr />

<h3>Updating an Item in an Array</h3>

<a
  id="wd-update-todo-title"
  className="btn btn-primary float-end"
  href={`${API}/${todo.id}/title/${todo.title}`}
>
  Update Todo
</a>

<input
  className="form-control w-25 float-start me-2"
  defaultValue={todo.id}
  onChange={(e) => setTodo({ ...todo, id: e.target.value })}
/>

<input
  className="form-control w-50 float-start"
  defaultValue={todo.title}
  onChange={(e) => setTodo({ ...todo, title: e.target.value })}
/>
<br /><br /><hr />

<h3>Updating Todo Description</h3>
<input
  className="form-control w-50 mb-2"
  defaultValue={todo.description}
  onChange={(e) => setTodo({ ...todo, description: e.target.value })}
/>
<a
  className="btn btn-primary"
  href={`${API}/${todo.id}/description/${todo.description}`}
>
  Update Description for Todo ID = {todo.id}
</a>
<hr />

<h3>Updating Todo Completed</h3>
<input
  className="form-check-input me-2"
  type="checkbox"
  checked={todo.completed}
  onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
/>
<label className="form-check-label">Completed</label>
<br />
<a
  className="btn btn-success mt-2"
  href={`${API}/${todo.id}/completed/${todo.completed}`}
>
  Update Completed for Todo ID = {todo.id}
</a>
<hr />


    </div>
  );
}
