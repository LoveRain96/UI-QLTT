export const ADD_TODO = "addToDo";
export const UPDATE_TODO = "updateTodo";
export const CLEAR_TODO = "clearDone";

export function addTodo(todoName) {
    return {
        type: ADD_TODO,
        todo: todoName
    }
}

export  function updateTodo(todoId,todoDone ) {
    return {
        type : UPDATE_TODO,
        todoId : todoId,
        done : todoDone
    }
}

export  function clearDone( ) {
    return { type : CLEAR_TODO
    }
}