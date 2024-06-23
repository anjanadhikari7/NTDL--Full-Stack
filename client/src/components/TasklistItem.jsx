import { Badge, Button, Stack } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight, BsTrash } from "react-icons/bs";
import { deleteTask, updateTask } from "../axios/taskAxios";

const TasklistItem = (props) => {
  const { task, fetchTasks } = props;

  const handleOnSwitch = async () => {
    // Call an api update the task
    const updatedTaskType = task.type === "entry" ? "unwanted" : "entry";
    const result = await updateTask(task._id, { type: updatedTaskType });
    if (result.status === "success") {
      fetchTasks();
    }
  };
  // Delete an task
  const handleOnDelete = async () => {
    window.confirm("Do you want to delete this task?");
    const result = await deleteTask(task._id);
    if (result.status === "success") {
      fetchTasks();
    }
  };
  return (
    <>
      <Stack gap={2}>
        <strong>
          {task.name} - {task.time} hrs
        </strong>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary">{task.priority}</Badge>
          <Badge bg="info">{task.difficulty}</Badge>
        </Stack>
      </Stack>
      <Stack gap={2} direction="horizontal">
        <Button variant="warning" onClick={handleOnSwitch}>
          {task.type === "entry" && <BsArrowRight />}
          {task.type === "unwanted" && <BsArrowLeft />}
        </Button>
        <Button variant="danger" onClick={handleOnDelete}>
          <BsTrash />
        </Button>
      </Stack>
    </>
  );
};

export default TasklistItem;
