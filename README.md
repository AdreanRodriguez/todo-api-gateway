# Todo API
### This project is a simple Todo API built with AWS Lambda and API Gateway. It provides basic CRUD operations for managing a list of tasks.

## Features
* GET /todos: Retrieve all tasks.
* GET /todos/{id}: Get a specific task by ID.
* POST /todos: Add a new task (expects a JSON body with a task property).
* PUT /todos/{id}: Toggle the done status of a task.
* DELETE /todos/{id}: Delete a task by ID.
## Technologies
AWS Lambda for backend logic.
API Gateway for exposing HTTP endpoints.
Node.js as the runtime.
