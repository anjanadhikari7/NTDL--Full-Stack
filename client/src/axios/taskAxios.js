import axios from "axios";
const API_URL = "http://localhost:8000/api/tasks";
// Create a task | POST | CREATE
export const createTask = (taskObject) => {
  // Send POST request to API
  const response = axios
    .post(API_URL, taskObject)
    .then((res) => res.data)
    .catch((error) => error);

  return response;
};
