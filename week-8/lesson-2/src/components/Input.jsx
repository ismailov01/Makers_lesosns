import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <div style={{width: 500, margin: "10px auto"}}>
      <Form onSubmit={(e) => {
          e.preventDefault();
          props.addTask(value);
          setValue("");
        }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter title"
          />
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
};

export default Input;
