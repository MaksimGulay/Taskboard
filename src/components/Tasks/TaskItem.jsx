import React from "react";

export function TaskItem({task}) {
  return (
    <div>
      <p>{task.text}</p>
    </div>
  );
}
