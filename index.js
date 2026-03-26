require("dotenv").config();

const express = require("express");
const app = express ();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

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
})


// Create a new task
app.post("/tasks", (req, res) => {
  const { task, status } = req.body;
  if (!task) {
    return res.status(400).json({message: '"task" field is required'})
  }
  const newTask = {
    id: tasks.length + 1, // Auto-generate ID
    task: task,          // From request body
    status: status || "pending" // Default to "pending" if not provided
  }
  tasks.push(newTask);   // Add to the fake database

  res.status(201).json({
    message: "Task created successfully",
    data: newTask
  });
});


// Update a task by ID
app.patch("/task/:id", (req, res) => {
  const taskId = parseInt(req.params.id); // Convert id from string to number
  const { task, status } = req.body; 

  const existingTask = tasks.find(t => t.id === taskId);

  // If task with the given ID does not exist, return 404
  if (!existingTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  //Update only provided fields
  if (task) existingTask.task = task;
  if (status) existingTask.status = status;

  res.status(200).json({
    message: "Task updated successfully",
    data: existingTask
  });

});


// Delete; Remove user
app.delete("/task/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const initialLength = tasks.length;

  tasks = tasks.filter(t => t.id !== taskId); 

  if (tasks.length === initialLength) 
    return res.status(404).json({ message: "Task not found" });
  
  res.status(204).send()
});







app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
