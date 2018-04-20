import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todoAction';
import { v4 } from 'uuid';

const localTodos = localStorage.getItem('todos');
const initialState = localTodos === null ? [] : JSON.parse(localTodos);

const addToLocalStorage = newState => {
  // storage.push(newTodo)
  localStorage.setItem('todos', JSON.stringify(newState));
}

const toggleTodo = payload => (todo => todo.id === payload ? { ...todo, completed: !todo.completed} : todo);
const deleteTodo = payload => (todo => todo.id !== payload);

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_TODO:
    const newTodo = {
      value: action.payload,
      completed: false,
      id: v4(),
    }
    addToLocalStorage([...state, newTodo]);
    return [...state, newTodo];
  case TOGGLE_TODO:
    addToLocalStorage(JSON.parse(localStorage.getItem('todos'))
      .map(toggleTodo(action.payload)));

    return state.map(toggleTodo(action.payload));
  case DELETE_TODO:
    addToLocalStorage(JSON.parse(localStorage.getItem('todos'))
      .filter(deleteTodo(action.payload)));

    return state.filter(deleteTodo(action.payload));
  default:
    return state;
  }
}

export default todoReducer;
