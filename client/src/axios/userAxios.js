import axios from "axios";
const API_URL = "http://localhost:8000/users";
export const createUser = (userObject) => {
  // Send POST request to API
  const response = axios
    .post(API_URL, userObject)
    .then((res) => res.data)
    .catch((error) => error);

  return response;
};
