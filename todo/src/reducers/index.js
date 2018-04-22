import { ADD_TODO, TOGGLE_TODO } from '../actions';

export default (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
          return [...state, action.payload];
        case TOGGLE_TODO:
          return state.map( (todoObj, index) => {
              if (index === action.id) {
                  todoObj.completed = action.completed
              }
              return todoObj;
          })
          default:
            return state;
    }
}