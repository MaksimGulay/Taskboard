import React, { useState } from "react";

export function TaskList({ tasks }) {
  const [text, setText] = useState("");
  const handleClick = function () {
    setText("Hello world");
  };
  return (
    <div>
      <button onClick={handleClick}>set title text</button>
      <h1>{text}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
