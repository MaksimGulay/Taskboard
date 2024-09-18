// файл оголошення екшенів програми

import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", text => {
    return {
        payload: {
            text,
            id: nanoid(),
            completed: false,
            important: false,
        }
    }
})

export const deleteTask = createAction("tasks/deleteTask") 

export const setImportant = createAction("tasks/setImportant")

export const toggleCompleted = createAction("tasks/toggleCompleted") 

export const setStatusFilter = createAction("filters/setStatusFilter")
    