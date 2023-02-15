/* eslint-disable no-case-declarations */

import { TASK } from "../../constants/data/task";

const initialState = {
  tasks: TASK,
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [
          ...state.tasks,
          {
            id: action.id,
            value: action.value,
            isTaskFinished: action.isTaskFinished,
          },
        ],
      };
    case "TOGGLE_TASK":
      let todos = [...state.tasks];
      let indexOfUpdate = todos.findIndex((todo) => {
        return todo.value == action.item.value;
      });
      todos[indexOfUpdate] = {
        id: action.item.id,
        value: action.item.value,
        isTaskFinished: !action.item.isTaskFinished,
      };
      return {
        ...state,
        tasks: todos,
      };
      // return {                    //or this
      // ...state,
      // tasks: state.tasks.map((task) =>
      //   task.id === action.item.id
      //     ? { ...task, isTaskFinished: !action.item.isTaskFinished }
      //     : task
      //  );
      // };
    default:
      return state;
  }
};

export default tasks;
