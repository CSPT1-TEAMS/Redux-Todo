import { ADD_TODO, TOGGLE_TODO } from "../actions/index.js";
const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload);
      return [...todos, action.payload];
    case TOGGLE_TODO:
      // todos[action.payload].completed = !todos[action.payload].completed;
      console.log("todos working?");
      return todos;
    default:
      return todos;
  }
};

export { todosReducer };
