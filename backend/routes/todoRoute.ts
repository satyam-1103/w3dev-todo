import express from "express";
import TodoController from "../controllers/todoController";

const router = express.Router();

// Create a new TODO item
router.post("/", TodoController.createTodo);

// Get all TODO items
router.get("/", TodoController.getAllTodos);

// Get a single TODO item by ID
router.get("/:id", TodoController.getTodoById);

// Update a TODO item by ID
router.put("/:id", TodoController.updateTodo);

// Delete a TODO item by ID
router.delete("/:id", TodoController.deleteTodo);

export default router;
