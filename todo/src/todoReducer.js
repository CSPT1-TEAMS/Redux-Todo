import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todoAction';
import { v4 } from 'uuid';

const localTodos = localStorage.getItem('todos');
const initialState = localTodos === undefined ? [] : JSON.parse(localTodos);

const addToLocalStorage = newState => {
  // storage.push(newTodo)
  localStorage.setItem('todos', JSON.stringify(newState))
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_TODO:
    const newTodo = {
      value: action.payload,
      completed: false,
      id: v4()
    }
    addToLocalStorage([...state, newTodo])
    return [...state, newTodo]
  case TOGGLE_TODO:
    addToLocalStorage(JSON.parse(localTodos).map((todo => (
      todo.id === action.payload ? { ...todo, completed: !todo.completed} : todo
    ))));
    return state.map(todo => (
      todo.id === action.payload ? { ...todo, completed: !todo.completed} : todo
    ))
  case DELETE_TODO:
    return state.filter(({ id }) => id !== action.payload)
  default:
    return state;
  }
}

export default todoReducer;
