import { Button, ListGroup } from "react-bootstrap";

export default function TodoItem({
    todo,
    deleteTodo,
    setTodo
  }: {
    todo: { id: string; title: string };
    deleteTodo?: (id: string) => void; 
    setTodo?: (todo: { id: string; title: string }) => void; 
  }) {
    return (
      <ListGroup.Item key={todo.id} className="d-flex align-items-center justify-content-between">
        <div>{todo.title}</div>
        <div>
          {setTodo && (
            <Button
              variant="primary"
              className="me-2"
              onClick={() => setTodo(todo)}
              id="wd-set-todo-click"
            >
              Edit
            </Button>
          )}
  
          {deleteTodo && (
            <Button
              variant="danger"
              onClick={() => deleteTodo(todo.id)}
              id="wd-delete-todo-click"
            >
              Delete
            </Button>
          )}
        </div>
      </ListGroup.Item>
    );
  }
  