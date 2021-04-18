export function addTodo(todo) {
    return {
        type : "addTodo",
        payload: todo
    }
}

export function deleteTodo(index) {
    return {
        type: "delTodo",
        payload: index
    }
}

export function completeTodo(index, currState) {
    return {
        type: "comTodo",
        payload: {index, currState}
    }
}

export function toBeShown(type) {
    return {
        type: "toBeShown",
        payload: type
    }
}