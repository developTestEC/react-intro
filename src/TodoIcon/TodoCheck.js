import {TodoIcon} from './';
import React from 'react';
import {TodosContext} from '../TodosContext';
function TodoCheck({isDone, text} ) {
    
    const {markTodoAsCompleted} = React.useContext(TodosContext);
    return (
        <TodoIcon
           type="check"
           color={isDone? 'green' : 'gray'}
           onClick={() => {
            console.log("la tarea completada es : " + text + "_____");
            markTodoAsCompleted(text)}}
       />        
    );
}
export {TodoCheck};