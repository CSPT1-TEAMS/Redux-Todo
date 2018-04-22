export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodoToState = (todo) => {
    const todoObj = { value: todo, completed: false };
    return {
        type: ADD_TODO,
        payload: todoObj
    }
}

export const toggleTodoOnState = (id, completed) => {
    return {
        type: TOGGLE_TODO,
        id,
        completed
    }
}