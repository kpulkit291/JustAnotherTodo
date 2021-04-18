import { combineReducers } from 'redux';
import todo from "./reducer/todo"
import show from "./reducer/show";
const rootReducer = combineReducers({
    todo,
    show
});

export default rootReducer;