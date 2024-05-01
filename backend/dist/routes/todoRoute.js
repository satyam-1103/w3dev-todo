"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = __importDefault(require("../controllers/todoController"));
const router = express_1.default.Router();
// Create a new TODO item
router.post("/", todoController_1.default.createTodo);
// Get all TODO items
router.get("/", todoController_1.default.getAllTodos);
// Get a single TODO item by ID
router.get("/:id", todoController_1.default.getTodoById);
// Update a TODO item by ID
router.put("/:id", todoController_1.default.updateTodo);
// Delete a TODO item by ID
router.delete("/:id", todoController_1.default.deleteTodo);
exports.default = router;
