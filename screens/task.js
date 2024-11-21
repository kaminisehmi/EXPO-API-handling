import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { createTasks, deleteTasks, getTasks, updateTasks } from "./api";

const Task = () => {
  const [data, setData] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", title: "" });

  const fetchData = async () => {
    try {
      const result = await getTasks();
      console.log("Fetched Data is: ", result);
      setData(result);
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };

  const handleCreate = async () => {
    try {
      if (newTask.name && newTask.title) {
        const createdTask = await createTasks(newTask);
        setData([createdTask, ...data]); // Fix: Add the created task to the state
        setNewTask({ name: "", title: "" });
      } else {
        alert("Please fill in the details above.");
      }
    } catch (error) {
      console.error("Error in creating task: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTasks(id);
      setData(data.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error in deleting task: ", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const updatedTask = await updateTasks(id, { title: "Updated Title" });
      setData(data.map((task) => (task.id === id ? updatedTask : task)));
    } catch (error) {
      console.error("Error in updating task: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Add Task Section */}
      <Text style={styles.header}>TODO List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={newTask.name}
          onChangeText={(text) => setNewTask({ ...newTask, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Title"
          value={newTask.title}
          onChangeText={(text) => setNewTask({ ...newTask, title: text })}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleCreate}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* Task List Section */}
      <ScrollView>
        {data.length > 0 ? (
          data.map((task) => (
            <View key={task.id} style={styles.taskItem}>
              <Text>ID: {task.id}</Text>
              <Text>Name: {task.name}</Text>
              <Text>Title: {task.title}</Text>
              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => handleUpdate(task.id)}
              >
                <Text style={styles.buttonText}>Update Task</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(task.id)}
              >
                <Text style={styles.buttonText}>Delete Task</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>Loading tasks...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  taskItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  updateButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
