import axios from "axios";
const API_BASE_URL = "https://672d668afd89797156424642.mockapi.io";
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getTasks = async () => {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (error) {
    console.error("error in fetching data: ", error);
    throw error;
  }
};
export const deleteTasks = async (id) => {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("error in deleting data: ", error);
    throw error;
  }
};
export const createTasks = async (newtask) => {
  try {
    const response = await api.post("/tasks", newtask);
    return response.data;
  } catch (error) {
    console.error("error in creating data: ", error);
    throw error;
  }
};
export const updateTasks = async (id, updatefield) => {
  try {
    const response = await api.put(`/tasks/${id}`, updatefield);
    return response.data;
  } catch (error) {
    console.error("error in updating data: ", error);
    throw error;
  }
};
