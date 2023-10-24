import { useContext, createContext } from "react";


export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todoMessage : "Todo Message",
            isCompleted : true
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;