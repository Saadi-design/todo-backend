const express = require("express");
const serverlessHttp = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.get("/tasks", function (request, response) {
  const username = request.query.username;
    
  const sometasks = [
      {
          id : 001,
          taskDescription: "order inhalers",
          completed: false,
          creationDate: 2019-11-19,
          user: 2,
      },
      {
          id : 002,
          taskDescription: "complete shopping for trip",
          completed: true,
          creationDate: 2019-11-15,
          user: 1,
      },
      {
          id : 003,
          taskDescription: "book flight",
          completed: false,
          creationDate: 2019-11-18,
          user: 1,
      },
      {
          id : 004,
          taskDescription: "complete CV",
          completed: true,
          creationDate: 2019-11-05,
          user: 1,
      }
      {
          id : 005,
          taskDescription: "pay credit card",
          completed: false,
          creationDate: 2019-11-21,
          user: 2, 
      },
      {
          id : 006,
          taskDescription: "change energy suppliers",
          completed: true,
          creationDate: 2019-10-30,
          user: 1,
      }

  ]
})
  response.status(200).send("Getting all the tasks! Yay!");


app.post("/tasks", function (request, response) {

  const task = request.body;

  response.status(201).send("Successfully created task: " + task.text);
});
app.delete("/tasks/:taskId", function (request, response) {
  const taskId = request.params.taskId;
  response.status(200).send("Deleted task with id " + taskId);
});
app.put("/tasks/:taskId", function (request, response) {
  const taskId = request.params.taskId;
  const updatedTask = request.body;
  response.status(200).send("Updated task with id " + taskId);
});

module.exports.tasks = serverlessHttp(app);
