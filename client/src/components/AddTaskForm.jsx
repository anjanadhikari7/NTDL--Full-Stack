import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { createTask } from "../axios/taskAxios";
const initialFormData = {
  name: "",
  time: 1,
  difficulty: "easy",
  priority: "low",
};

const AddTaskForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { name, time, difficulty, priority } = formData;

  //Handle On change
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handle form submit
  const handleOnSumbit = async (e) => {
    e.preventDefault();

    // Create task -> calls an api to add task to database

    const result = await createTask(formData);
    console.log(result);
  };

  return (
    <Form onSubmit={handleOnSumbit}>
      <Row>
        <Col>
          {/* Task Name */}
          <Form.Group>
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              placeholder="Enter Task Name"
              onChange={handleOnchange}
              required
            />
          </Form.Group>
        </Col>

        <Col>
          {/* Task Time */}
          <Form.Group>
            <Form.Label>Time Taken</Form.Label>
            <Form.Control
              type="number"
              name="time"
              placeholder="Enter time taken"
              min={1}
              max={24}
              value={time}
              onChange={handleOnchange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {/*Difficulty */}
        <Col>
          <Form.Label>Difficulty</Form.Label>
          <Form.Select name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            value = {difficulty}
            onChange={handleOnchange}
          </Form.Select>
        </Col>

        {/*Priority */}
        <Col>
          <Form.Label>Priority</Form.Label>
          <Form.Select name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            value = {priority}
            onChange={handleOnchange}
          </Form.Select>
        </Col>
      </Row>

      <Button variant="primary" type="submit" className="d-block  mx-auto my-4">
        Add Task
      </Button>
    </Form>
  );
};

export default AddTaskForm;