// reducer.js - файл оголошення функцій-редюсерів для оновлення стану
// import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import { statusFilters } from "../filters/constants";
import {
  addTask,
  deleteTask,
  setImportant,
  setStatusFilter,
  toggleCompleted,
} from "./actions";

const taskInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true, important: false },
  { id: 1, text: "Get good at JavaScript", completed: true, important: false },
  { id: 2, text: "Master React", completed: false, important: false },
  { id: 3, text: "Discover Redux", completed: false, important: false },
  { id: 4, text: "Build amazing apps", completed: false, important: false },
];

export const tasksReducer = createReducer(taskInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    })
    .addCase(setImportant, (state, action) => {
      for (const task of state) {
        if (task.id === action.payload) {
          task.important = !task.important;
          break;
        }
      }
    })
    .addCase(toggleCompleted, (state, action) => {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    });
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
  });
});
