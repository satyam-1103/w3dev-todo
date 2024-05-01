import { Request, Response } from "express";
import Todo from "../models/todoModel";

const TodoController = {
  createTodo: async (req: Request, res: Response) => {
    try {
      const { task } = req.body;
      const newTodo = await Todo.create({ task });
      res.status(201).json(newTodo);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllTodos: async (req: Request, res: Response) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  getTodoById: async (req: Request, res: Response) => {
    try {
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json(todo);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  updateTodo: async (req: Request, res: Response) => {
    try {
      const { task } = req.body;
      const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { task },
        { new: true }
      );
      if (!updatedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json(updatedTodo);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteTodo: async (req: Request, res: Response) => {
    try {
      const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
      if (!deletedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json({ message: "Todo deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default TodoController;
