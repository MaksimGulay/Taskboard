import React from "react";
import { useSelector } from "react-redux";

import { TaskItem } from "./TaskItem";
import { getStatusFilter, getTasks } from "../../redux/filters/selectors";
import { StatusFilter } from "../StatusFilter/StatusFIlter";
import {  ListItems, MainText, TaskListContainer } from "../../styles/taskPageStyle/TaskItem.style";
import { statusFilters } from "../../redux/filters/constants";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export function TaskList() {
  const tasks = useSelector(getTasks)
  const statusFilter = useSelector(getStatusFilter)
  console.log("tasks:", tasks); // Check if tasks is an array
  console.log("statusFilter:", statusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <TaskListContainer>
      <MainText>My Task</MainText>
      <StatusFilter/>
      <ListItems>
        {visibleTasks.map(task => (
          <li key={task.id}>
            <TaskItem task={task}/>
            </li>
        ))}
      </ListItems>
    </TaskListContainer>
  );
}
