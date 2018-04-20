// action = { type: ADD_TODO, payload: todoItem }
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = todoItem => {
    return {
        type: ADD_TODO,
        payload: todoItem
    };
};

export const toggleComplete = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    };
};