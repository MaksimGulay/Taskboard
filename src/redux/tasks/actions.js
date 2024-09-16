// файл оголошення екшенів програми
import { nanoid } from "nanoid";

export const addTask = text => {
    return {
    type:  "tasks/addTast",
    payload: {
        id: nanoid(),
        text: "",
        compleated: false,
        text,
    }
}
}

export const deleteTask = taskId =>  {
    return {
        type: "tasks/deleteTast",
        payload: taskId}
    
}

export const toggleCompleted = taskId => {
    return {
        type: "tasks/toggleCompleted",
        payload: taskId}
    
  };
  
  export const setStatusFilter = value => {
    return {
        type: "filters/setStatusFilter",
        payload: "Filter value",
    }
    
  };