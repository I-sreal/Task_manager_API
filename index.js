require("dotenv").config();

const express = require("express");
const app = express ();

const PORT = process.env.PORT || 3000;

//Fake Databases
const tasks = [
  {id: 1, task: "Learn JavaScript basics", status: "pending"},
  {id: 2, task: "Build Task Manager API", status: "pending"},
  {id: 3, task: "Test API with Postman", status: "completed"},
  { id: 4, task: "Push project to GitHub", status: "pending"},
  {id: 5, task: "Review backend concepts", status: "completed"},
];










































app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
