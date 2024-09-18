// store.js - файл створення стор Redux

// redux-toolkit

import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/tasksSlice";
import { filtersReducer } from "./slices/filtersSlice";
// import { filtersReducer, tasksReducer } from "./tasks/reducer";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// const store = configureStore({
//   reducer: rootReducer,
// });

// Redux

// import { createStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./tasks/reducer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
