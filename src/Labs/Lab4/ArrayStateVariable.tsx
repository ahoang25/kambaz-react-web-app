import { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

export default function ArrayStateVariables() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setNumbers([...numbers, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>Array State Variables</Card.Title>

        <Button variant="success" onClick={addElement} className="mb-3">
          Add Element
        </Button>

        <ListGroup id="wd-array-state-variables">
          {numbers.map((num, idx) => (
            <ListGroup.Item
              key={idx}
              className="d-flex justify-content-between align-items-center"
            >
              {num}
              <Button variant="danger" onClick={() => deleteElement(idx)}>
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
