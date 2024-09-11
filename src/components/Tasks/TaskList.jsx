import React, { useState } from "react";

export function TaskList({ tasks }) {
  return (
    <div>
      <h1>My Task</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
