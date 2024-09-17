import React from "react";
import { useSelector } from "react-redux";

import { TaskItem } from "./TaskItem";
import { getStatusFilter, getTasks } from "../../redux/filters/selectors";
import { StatusFilter } from "../StatusFilter/StatusFIlter";
import {  ListItems, MainText, TaskListContainer } from "../../styles/taskPageStyle/TaskItem.style";



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
  const tasks = useSelector(getTasks)
  const statusFilter = useSelector(getStatusFilter)

  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <TaskListContainer>
      <MainText>My Task</MainText>
      <StatusFilter/>
      <ListItems>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task}/>
            </li>
        ))}
      </ListItems>
    </TaskListContainer>
  );
}
