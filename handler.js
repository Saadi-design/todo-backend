const express = require("express");
const serverlessHttp = require("serverless-http");
const cors = require("cors");
const bodyparser= require("body-parser");

const app = express();

// allows Express to parse JSON ddata that is sent on the body of any requests
app.use(bodyparser.json())
app.use(cors());


app.get("/tasks", function (request, response) {
  // Do the logic for getting all the tasks from the DB
  response.status(200).send({
    tasks: [
      {id : 001, taskDescription: "order inhalers", completed: false, creationDate: "2019-11-19", user: 2},
      {id : 002, taskDescription: "complete shopping for trip", completed: true, creationDate: "2019-11-15", user: 1},
      {id : 003, taskDescription: "book flight", completed: false, creationDate: "2019-11-18", user: 1},
      {id : 004, taskDescription: "complete CV", completed: true, creationDate: 2019-11-05, user: 1}
      {id : 005, taskDescription: "pay credit card", completed: false, creationDate: "2019-11-21", user: 2},
      {id : 006, taskDescription: "change energy suppliers", completed: true, creationDate: "2019-10-30", user: 1} 
    ]
  });
});

app.post("/tasks", function (request, response) {
  // Do the logic for saving the new task in the DB
  const task = request.body;
  // { text: "do the dishes", completed: true, date: "2019" }
  response.status(201).send("Successfully created task: " + task.text);
});

// my fields from state in app.js
// text
// completed
// dateDone
// dateDue
// id
// possibly userid

app.delete("/tasks/:taskId", function (request, response) {
  const taskId = request.params.taskId;
  response.status(200).send("Received request to Delete task with id " + taskId);
});
app.put("/tasks/:taskId", function (request, response) {
//update task
  const taskId = request.params.taskId;
  const updatedTask = request.body;
  // eslint-disable-next-line no-undef
  response.status(200).send(" Update task with id " + taskId + " with " + task.text + task.completed );
});


module.exports.tasks=serverlessHttp(app);
































     
