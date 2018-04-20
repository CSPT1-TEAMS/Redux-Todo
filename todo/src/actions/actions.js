export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

//ADD_TODO = {type:ADD_TODO,payload:{title,content}}
export const addTodo =(title,todo,id) => {
    return {
        type: ADD_TODO,
        payload: 
        {   id,
            title,
            todo,
            completed:false
            
        }
    }
}

export const getTodos = (todos) => {

    return{
    type:GET_TODOS
    }
}

export const toggleCompleted = (index) => {
    return {
        type: TOGGLE_COMPLETED,
        payload: index
            
    }

}