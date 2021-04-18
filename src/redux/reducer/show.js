export default function show(state="all", action) {
    if(action.type == "toBeShown") {
        (state = action.payload);
        return state;
    }
    return state;
}