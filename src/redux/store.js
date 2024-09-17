// store.js - файл створення стор Redux

// redux-toolkit

/*
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
*/

// Redux

import { createStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { statusFilters } from "./filters/constants";

const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true, important: false },
    { id: 1, text: "Get good at JavaScript", completed: true, important: false },
    { id: 2, text: "Master React", completed: false, important: false },
    { id: 3, text: "Discover Redux", completed: false, important: false },
    { id: 4, text: "Build amazing apps", completed: false, important: false },
  ],
  filters: {
    status: statusFilters.all,
  },
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
    return state
  }
}

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

