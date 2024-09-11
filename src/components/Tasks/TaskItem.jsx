import React from "react";
import { useParams } from "react-router-dom";

export function TaskItem() {
  const { taskId } = useParams();
  return (
    <div>
      <h1>Task item</h1>
      <p>Now showing task with id {taskId}</p>
    </div>
  );
}
