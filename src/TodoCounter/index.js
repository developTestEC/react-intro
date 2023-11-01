import React from 'react';
import './TodoCounter.css';
import { TodosContext } from '../TodosContext';
function TodoCounter() {
 const {totalTodos,completedTodos} = React.useContext(TodosContext);
    return(
      <h1 className='TodoCounter'>
        Completaste {completedTodos} de {totalTodos} TODOs
      </h1>
    );
  }
  export {TodoCounter};