"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
interface Task {
  _id: string;
  task: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [updatedTask, setUpdatedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todos");
      setTodos(res.data);
    } catch (error) {
      console.log("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [updatedTask, todos]);

  const handleSave = async () => {
    if (!updatedTask) return;

    try {
      await axios.put(`http://localhost:5000/api/todos/${updatedTask._id}`, {
        task: updatedTask.task,
      });
      // Fetch tasks again after updating the task
      fetchTasks();
      setUpdatedTask(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  //   useEffect(()=> {

  //   }, [])

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTasks();
    } catch (error) {
      console.log("Error deleting task: ", error);
    }
  };

  const handleEdit = (task: Task) => {
    setUpdatedTask(task);
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>TASK</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item._id}>
              <td>{item.task}</td>
              <td className="flex gap-4 items-center">
                <button onClick={() => handleEdit(item)}>
                  <FaRegEdit className="text-violet-500 w-6 h-6" />
                </button>
                <button onClick={() => handleDelete(item._id)}>
                  <FaTrashAlt className="text-red-500 w-6 h-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && updatedTask && (
        <dialog className="modal modal-middle lg:modal" open>
          <div className="modal-box w-11/12 max-w-5xl p-16 flex gap-4 flex-col">
            <form method="dialog">
              {/* Button to close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setUpdatedTask(null)}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Edit Task</h3>
            <input
              type="text"
              value={updatedTask.task}
              className="p-4 bg-gray-800 rounded-[24px]"
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, task: e.target.value })
              }
            />
            <button onClick={handleSave} className="btn bg-violet-500 hover:bg-violet-700 text-white/80">Save</button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default TodoList;
