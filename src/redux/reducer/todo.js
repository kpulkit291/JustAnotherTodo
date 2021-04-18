const INIT_STATE = [];
const TO_BE_SHOWN = "all";
export default  function todo(state = INIT_STATE, action) {
    if(action.type == "addTodo") {
        return [...state, action.payload];
    } else if (action.type == "delTodo") {
        let arr = [...state];
        arr.splice(action.payload,1);
        return arr;
    } else if(action.type == "comTodo") {
        state && (state[action.payload.index].state = action.payload.currState);
        console.log(state);
        return [...state];
    } else {
        return state;
    }
}
