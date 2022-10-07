import React from "react";
import { useState } from "react";
import Task from "./task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          onToggle={onToggle}
          task={task}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Tasks;
