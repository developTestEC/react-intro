import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodosContext = React.createContext();
function TodoProvider({children}) {
    
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const  completedTodos = todos.filter(todo => todo.completed).length
    const  totalTodos = todos.length
    const [searchValue, setSearchValue] = React.useState('');
    const filterTodos = todos.filter(todo => { return todo.text.toLowerCase().includes(searchValue.toLowerCase())});
    const [openModal, setOpenModal] = React.useState(false);
    const addTodos = (todo) =>{
        console.log(todo);
        saveTodos([...todos, todo]);
    
    };
    const deleteTodos = (text) =>{
    console.log("DeleteTodos");
    console.log(text);
    saveTodos(todos.filter(t => t.text !== text));
    
    };
    const markTodoAsCompleted = (text) => {
        console.log('marcar como completado');
        console.log(todos);
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        console.log(newTodos[todoIndex]);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };
    return (
        <TodosContext.Provider value={{
            addTodos,
            filterTodos,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            deleteTodos,
            saveTodos,
            markTodoAsCompleted,
            loading,
            error,
            openModal,
            setOpenModal}}>
            {children}
        </TodosContext.Provider>
    );
}
export {TodosContext, TodoProvider};
