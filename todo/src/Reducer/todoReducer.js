import { ADD_TODO, TOGGLE_COMPLETED } from '../Actions/actions';

// state = [ { todos, completed } ]
// action = { type: ADD_TODO, payload: todoItem }

export default(todos = [], action) => {
    switch(action.type) {
        case ADD_TODO:
        // add to our todo

        const newTodo = {
             todoItem: action.payload,
             completed: false,
        }
        console.log(newTodo, "our new item");
        return [...todos, newTodo]

        case TOGGLE_COMPLETED:
        // if set is complete vs is not complete
        return todos.map((todo, index) => {
            return index !== action.payload ? todo : 
                Object.assign({}, todo, {completed: !todo.completed});
        });

        default:
        return todos;
    }
};