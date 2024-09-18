import React from "react";
import { useDispatch } from "react-redux";
// import { deleteTask, setImportant, toggleCompleted } from "../../redux/tasks/actions";
import {
  deleteTask,
  setImportant,
  toggleCompleted,
} from "../../redux/slices/tasksSlice";
import {
  ItemButton,
  ItemContainer,
  ItemText,
} from "../../styles/taskPageStyle/TaskItem.style";

export function TaskItem({ task }) {
  const dispach = useDispatch();

  const handleDelete = () => {
    dispach(deleteTask(task.id));
  };

  const handleImportant = () => {
    dispach(setImportant(task.id));
  };

  const changeStatus = () => {
    dispach(toggleCompleted(task.id));
  };
  return (
    <ItemContainer>
      <input
        type="checkbox"
        onClick={changeStatus}
        defaultChecked={task.completed}
      />
      <ItemText>{task.text}</ItemText>
      <ItemButton type="button" onClick={handleImportant}>
        Important
      </ItemButton>
      <ItemButton type="button" onClick={handleDelete}>
        Delete
      </ItemButton>
    </ItemContainer>
  );
}
