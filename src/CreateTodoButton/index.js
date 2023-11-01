import './CreateTodoButton.css';
function CreateTodoButton( {createNewTodo} ) {
    return(
      <button 
      onClick={() => createNewTodo()}
      >Create new task</button>
    );
  }

  export {CreateTodoButton};