import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { getTasks } from "../axios/taskAxios";
import { Alert, Col, Container, ListGroup, Row } from "react-bootstrap";
import TasklistItem from "./TasklistItem";

const TaskContainer = () => {
  const [taskList, setTasklist] = useState([]);
  // Fetch Date / task from database
  const fetchTasks = async () => {
    const result = await getTasks();

    console.log("result", result);
    if (result.status === "success") {
      setTasklist(result.data);
    }
  };
  const entryTask = taskList.filter((task) => task.type === "entry");
  const unwantedTask = taskList.filter((task) => task.type === "unwanted");
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <AddTaskForm fetchTasks={fetchTasks} />

      <Row>
        <Col>
          <Container className="border border-primary rounded p-2">
            {/* All Task */}
            <Alert> All Tasks</Alert>
            <ListGroup>
              {entryTask.map((task) => (
                <ListGroup.Item
                  key={task._id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <TasklistItem task={task} fetchTasks={fetchTasks} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
        </Col>

        <Col>
          <Container className="border border-danger rounded p-2">
            <Alert variant="danger">Unwanted task</Alert>
            <ListGroup>
              {unwantedTask.map((task) => (
                <ListGroup.Item
                  key={task._id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <TasklistItem task={task} fetchTasks={fetchTasks} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default TaskContainer;
