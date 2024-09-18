import { createSlice, nanoid } from "@reduxjs/toolkit";

const taskInitialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: taskInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
            important: false,
          },
        };
      },
    },
    deleteTask: {
      reducer(state, action) {
        const index = state.findIndex((task) => task.id === action.payload);
        state.splice(index, 1);
      },
    },
    setImportant: {
      reducer(state, action) {
        for (const task of state) {
          if (task.id === action.payload) {
            task.important = !task.important;
            break;
          }
        }
      },
    },
    toggleCompleted: {
      reducer(state, action) {
        for (const task of state) {
          if (task.id === action.payload) {
            task.completed = !task.completed;
            break;
          }
        }
      },
    },
  },
});

export const { addTask, deleteTask, setImportant, toggleCompleted } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
