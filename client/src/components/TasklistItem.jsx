import { Alert, Badge, Button, Stack } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight, BsTrash } from "react-icons/bs";
import { deleteTask, updateTask } from "../axios/taskAxios";
import { useEffect, useState } from "react";

const TasklistItem = (props) => {
  const { task, fetchTasks } = props;
  const [priorityColor, setPriorityColor] = useState("warning");
  const [difficultyColor, setDifficultyColor] = useState("warning");
  const [results, setResults] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleOnSwitch = async () => {
    const updatedTaskType = task.type === "entry" ? "unwanted" : "entry";
    const result = await updateTask(task._id, { type: updatedTaskType });
    if (result.status === "success") {
      fetchTasks();
    }
  };

  const handleOnDelete = async () => {
    const isConfirmed = window.confirm("Do you want to delete this task?");
    if (isConfirmed) {
      try {
        const result = await deleteTask(task._id);
        console.log(result.status); // Log the status received from deleteTask
        setResults(result.status); // Update results state with the status
        if (result.status === "success") {
          fetchTasks();
        } else {
          console.error("Failed to delete the task");
        }
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  useEffect(() => {
    if (results === "success") {
      setIsDeleted(true);
      const timer = setTimeout(() => {
        setIsDeleted(false);
        setResults(null);
      }, 10000); // 10000 milliseconds = 10 seconds

      return () => clearTimeout(timer);
    }
  }, [results]);

  useEffect(() => {
    switch (task.priority) {
      case "low":
        setPriorityColor("success");
        break;
      case "medium":
        setPriorityColor("info");
        break;
      case "high":
        setPriorityColor("danger");
        break;
      default:
        setPriorityColor("warning");
    }

    switch (task.difficulty) {
      case "easy":
        setDifficultyColor("success");
        break;
      case "medium":
        setDifficultyColor("info");
        break;
      case "hard":
        setDifficultyColor("danger");
        break;
      default:
        setDifficultyColor("warning");
    }
  }, [task.priority, task.difficulty]);

  return (
    <>
      <Stack gap={2}>
        <strong>
          {task.name} - {task.time} hrs
        </strong>
        <Stack direction="horizontal" gap={2}>
          <Badge bg={priorityColor}>{task.priority}</Badge>
          <Badge bg={difficultyColor}>{task.difficulty}</Badge>
        </Stack>
      </Stack>
      <Stack gap={2} direction="horizontal">
        {task.type === "entry" && (
          <Button variant="warning" onClick={handleOnSwitch}>
            <BsArrowRight />
          </Button>
        )}
        {task.type === "unwanted" && (
          <Button variant="success" onClick={handleOnSwitch}>
            <BsArrowLeft />
          </Button>
        )}

        <Button variant="danger" onClick={handleOnDelete}>
          <BsTrash />
        </Button>
      </Stack>
      {isDeleted && (
        <Alert key="danger" variant="danger">
          Task successfully deleted
        </Alert>
      )}
    </>
  );
};

export default TasklistItem;
