require("dotenv").config();

const express = require("express");
const app = express ();

const PORT = process.env.PORT || 3000;

//Fake Databases
const tasks = [
  {id: 1, task: "Learn JavaScript basics", status: "pending"},
  {id: 2, task: "Build Task Manager API", status: "pending"},
  {id: 3, task: "Test API with Postman", status: "completed"},
  {id: 4, task: "Push project to GitHub", status: "pending"},
  {id: 5, task: "Review backend concepts", status: "completed"},
];


app.get("/tasks", (req, res) => {
  res.status(200).json(tasks); // Send the list of tasks as a JSON response
});


// Get a single task by ID
app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id); // Convert id from string to number

  const task = tasks.find(t => t.id === taskId); // Find the task with matching ID

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task); // Return the task
});






































app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
