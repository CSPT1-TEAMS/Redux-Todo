export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const DELETE_TODO = 'DELETE_TODO';


export const addTodoToState = (todo) => {
    const todo = {
        value: todo, 
        completed: false};
        return {
            type: ADD_TODO, 
            payload: todoObj
        }
    }
export const toggleTodoOnState = (id, completed) => {
    return {
        type: TOGGLE_TODO,
        id: id,
        completed: completed
    }
}




export const completeTodo = () => {
    return { type: TOGGLE_TODO, payload: this.toggleTodo()}
};