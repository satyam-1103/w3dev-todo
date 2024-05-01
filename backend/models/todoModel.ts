import mongoose, { Schema, Document } from "mongoose";

// Define interface for Todo document
export interface TodoInterface extends Document {
  task: string;
}

// Define Mongoose schema for Todo
const TodoSchema: Schema = new Schema({
  task: {type: String, required: true}
});

// Define Todo model
const Todo = mongoose.model<TodoInterface>("Todo", TodoSchema);

export default Todo;
