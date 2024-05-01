"use client";
import React, { useState } from "react";
import axios from "axios";

const NewTask = () => {
  const [taskName, setTaskName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = async () => {
    if (!taskName) return;

    try {
      await axios.post("http://localhost:5000/api/todos", {
        task: taskName,
      });
      setTaskName("");
      setIsModalOpen(false);
      // Optionally, you can trigger a function to fetch updated task list
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <>
      <button
        className="btn w-full bg-violet-500 hover:bg-violet-700 text-white/80"
        onClick={() => setIsModalOpen(true)}
      >
        Add new Task
      </button>

      {/* Modal for creating new task */}
      {isModalOpen && (
        <dialog className="modal" open>
          <div className="modal-box w-11/12 max-w-5xl p-16 flex gap-4 flex-col">
            <form method="dialog">
              {/* Button to close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Create New Task</h3>
            <label htmlFor="taskName">Task Name:</label>
            <input
              id="taskName"
              type="text"
              className="p-4 bg-gray-800 rounded-[24px] text-muted"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Add your task here"
            />
            <button onClick={handleSave} className="btn bg-violet-500 hover:bg-violet-700 text-white/80">Save</button>
          </div>
        </dialog>
      )}
    </>
  );
};

export default NewTask;
