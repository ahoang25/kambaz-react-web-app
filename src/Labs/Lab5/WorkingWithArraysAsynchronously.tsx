import { useEffect, useState } from "react";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  const createTodo = async () => {
    const todos = await client.createTodo();
    setTodos(todos);
  };

  const postTodo = async () => {
    const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false });
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      const updated = todos.filter((t) => t.id !== todo.id);
      setTodos(updated);
      setErrorMessage(null);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response?.data?.message || "Error deleting todo");
    }
  };

  const editTodo = (todo: any) => {
    const updated = todos.map((t) =>
      t.id === todo.id ? { ...todo, editing: true } : t
    );
    setTodos(updated);
  };

  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      const updated = todos.map((t) =>
        t.id === todo.id ? { ...todo, editing: false } : t
      );
      setTodos(updated);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Error updating todo");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
  <div
    id="wd-todo-error-message"
    className="alert alert-danger mt-2 mb-2"
  >
    {errorMessage}
  </div>
)}
      <h4>
        Todos
        <FaPlusCircle
          onClick={createTodo}
          className="text-success float-end fs-3"
          id="wd-create-todo"
        />
        <FaPlusCircle
          onClick={postTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
      </h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            
            <FaTrash
              onClick={() => client.removeTodo(todo).then(setTodos)}
              className="text-danger float-end mt-1 me-3"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-3 fs-3"
              id="wd-delete-todo"
            />
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-3 mt-1"
            />

            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />

            {!todo.editing ? (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            ) : (
              <input
                className="form-control w-50 d-inline"
                value={todo.title}
                onChange={(e) =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, title: e.target.value } : t
                    )
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo(todo);
                  }
                }}
              />
            )}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
