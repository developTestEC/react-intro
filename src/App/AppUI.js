import React from "react";
import { TodoCreatorCountainer } from '../TodoCreatorCountainer';
import { TodoListContainer } from '../TodoListContainer';
import { TodosContext } from "../TodosContext";
function AppUI (
    // {
    // setNewTodo,
    // addTodos,
    // filterTodos,
    // completedTodos,
    // totalTodos,
    // searchValue,
    // setSearchValue,
    // deleteTodos,
    // saveTodos,
    // markTodoAsCompleted,
    // loading,
    // error}
    ) {
    return (
        <div className='App'>
    <TodosContext.Consumer>
      {({addTodos}) => (
        <TodoCreatorCountainer
        addNewTodos = {addTodos}
        />
      )}
    </TodosContext.Consumer>
      <TodosContext.Consumer>
        {({filterTodos, saveTodos, loading, error}) => (
          <TodoListContainer
          todos = {filterTodos}
          setTodos={saveTodos}
          loading={loading}
          error={error}
          />
        )}
      </TodosContext.Consumer>    
    </div>
    );
}
export { AppUI} ;