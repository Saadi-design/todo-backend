const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/tasks", function(request, response){
  response.status(200).send({
    tasks: [
      {
          id : 001,
          taskDescription: "order inhalers",
          completed: false,
          creationDate: "2019-11-19",
          user: 2,
      },
      {
          id : 002,
          taskDescription: "complete shopping for trip",
          completed: true,
          creationDate: "2019-11-15",
          user: 1,
      },
      {
          id : 003,
          taskDescription: "book flight",
          completed: false,
          creationDate: "2019-11-18",
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
          creationDate: "2019-11-21",
          user: 2, 
      },
      {
          id : 006,
          taskDescription: "change energy suppliers",
          completed: true,
          creationDate: "2019-10-30",
          user: 1,
      }
    
  ]
});
});

app.delete("/tasks/:taskId", function(request, response){
const id = request.params.taskId;
response.status(200).send("Received a request to delete task ID: "+id);
});

app.post("/tasks", function(request, response){
//Create a new task
const task = request.body;
response.status(201).send("Created a new task with text: "+task.text);
});

app.put("/tasks/:taskId",function (request, response){
// Update task
const id = request.params.taskId;
const task = request.body;
response.status(200).send("Received request to update task: " + task.text);
});
module.exports.tasks = serverless(app);