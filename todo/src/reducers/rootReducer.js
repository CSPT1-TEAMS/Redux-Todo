import {ADD_TODO,GET_TODOS,TOGGLE_COMPLETED} from '../actions/actions'

//TODOS = [{id,title,content}]
//ADD_TODO = {type:ADD_TODO,payload:{title,content}}

export const todoReducer = (todos = [],action) => {
    switch(action.type) {
        case TOGGLE_COMPLETED:
        let temp = todos[action.payload]
        temp.completed = !temp.completed;
          let ret = todos.slice(0,action.payload).concat(todos.slice(action.payload,todos.length))
            return ret


            
            
        case GET_TODOS:
            return todos
        case ADD_TODO:
            return todos.concat(action.payload)
        default:
            return todos

    }
}