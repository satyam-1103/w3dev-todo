import TodoList from "@/components/TodoList";
import React from "react";
import axios from "axios";
import NewTask from "@/components/NewTask";
const Home = () => {
  return (
    <main className="max-w-4xl mx-auto mt-8 ">
      <div className="text-center my-5 flex flex-col gap-4">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
          Todo List Application
        </h2>
      </div>

      <NewTask />

      <div className="mt-8 ">
        <TodoList />
      </div>
    </main>
  );
};

export default Home;
