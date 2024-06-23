import axios from "axios";
const API_URL = import.meta.env.PROD
  ? "https://ntdl-full-stack-3j53.onrender.com/"
  : "http://localhost:8000/api/tasks";

//Get a task | GET | READ
export const getTasks = () => {
  const response = axios
    .get(API_URL)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

// Create a task | POST | CREATE
export const createTask = (taskObject) => {
  // Send POST request to API
  const response = axios
    .post(API_URL, taskObject)
    .then((res) => res.data)
    .catch((error) => error);

  return response;
};

// Update a task | PATCH | UPDATE

export const updateTask = (id, updatedField) => {
  const response = axios
    .patch(`${API_URL}/${id}`, updatedField)
    .then((res) => res.data)
    .catch((error) => error);

  return response;
};

// Delete a task | DELETE |

export const deleteTask = (id) => {
  const response = axios
    .delete(`${API_URL}/${id}`)
    .then((res) => res.data)
    .catch((error) => error);

  return response;
};
