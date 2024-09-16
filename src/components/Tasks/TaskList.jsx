import React from "react";
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/filters/constants";
import { TaskItem } from "./TaskItem";


const getVisibleTasks = (tasks, statusFilters) => {
  switch( statusFilters) {
    case statusFilters.active:
      return tasks.filter(task => task.complited);
      case statusFilters.complited:
        return tasks.filter(task => task.complited);
        default:
          return tasks
  }
}

export function TaskList() {
  const tasks = useSelector(state => state.tasks)
  const statusFilter = useSelector(state => state.filters.status)

  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <div>
      <h1>My Task</h1>
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task}/>
            </li>
        ))}
      </ul>
    </div>
  );
}
