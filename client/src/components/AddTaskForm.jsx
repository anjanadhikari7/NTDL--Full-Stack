import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { createTask } from "../axios/taskAxios";
const initialFormData = {
  name: "",
  time: 1,
  difficulty: "easy",
  priority: "low",
};

const AddTaskForm = (props) => {
  const { fetchTasks } = props;
  const [formData, setFormData] = useState(initialFormData);
  const [isAdded, setIsAdded] = useState(false);
  const [resultStatus, setResultStatus] = useState(null);
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
    if (result.status === "success") {
      fetchTasks();
    }
    setResultStatus(result.status);
  };
  useEffect(() => {
    if (resultStatus === "success") {
      setIsAdded(true);
      const timer = setTimeout(() => {
        setIsAdded(false);
        setResultStatus(null);
      }, 10000); // 10000 milliseconds = 10 seconds

      return () => clearTimeout(timer);
    } else {
      setIsAdded(false);
    }
  }, [resultStatus]);

  return (
    <>
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
            <Form.Select
              name="difficulty"
              value={difficulty}
              onChange={handleOnchange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Form.Select>
          </Col>

          {/*Priority */}
          <Col>
            <Form.Label>Priority</Form.Label>
            <Form.Select
              name="priority"
              value={priority}
              onChange={handleOnchange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Form.Select>
          </Col>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="d-block  mx-auto my-4"
        >
          Add Task
        </Button>
      </Form>
      {isAdded && (
        <Alert key="success" variant="success">
          Task successfully added
        </Alert>
      )}
    </>
  );
};

export default AddTaskForm;
