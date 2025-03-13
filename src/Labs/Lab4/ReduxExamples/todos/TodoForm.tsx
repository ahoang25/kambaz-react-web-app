import { useSelector, useDispatch } from "react-redux";
import { Button, FormControl, ListGroup } from "react-bootstrap";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between">
      <FormControl
        value={todo.title}
        onChange={(e) =>
          dispatch(setTodo({ ...todo, title: e.target.value }))
        }
        className="me-2"
        style={{ maxWidth: "250px" }}
        placeholder="Enter todo..."
      />

      <div>
        <Button
          variant="warning"
          onClick={() => dispatch(updateTodo(todo))}
          id="wd-update-todo-click"
          className="me-2"
        >
          Update
        </Button>

        <Button
          variant="success"
          onClick={() => dispatch(addTodo(todo))}
          id="wd-add-todo-click"
        >
          Add
        </Button>
      </div>
    </ListGroup.Item>
  );
}
