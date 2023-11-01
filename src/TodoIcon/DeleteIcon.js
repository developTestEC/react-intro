import React from "react";
import { TodoIcon } from ".";
import { TodosContext } from "../TodosContext";
function DeleteIcon({text}) {
    const {deleteTodos} = React.useContext(TodosContext);
    return (
        <TodoIcon 
        type="delete"
        color= "red"
        onClick={() => {
            deleteTodos(text);
            console.log(text);
        }
        }/>
    );
}
export{DeleteIcon}