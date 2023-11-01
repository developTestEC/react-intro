import './TodoCreatorCountainer.css';
import {CreateTodoButton} from '../CreateTodoButton';
import { TodoTextCreate } from '../TodoTextCreate';
import { TodosContext } from '../TodosContext';
import { Modal } from '../Modal';
import React from 'react';
function TodoCreatorCountainer({addNewTodos}) {
       
       const [newTask, setNewTask] = React.useState('');
       const {openModal, setOpenModal} = React.useContext(TodosContext)
       const createNewTodo = (text) => {
           console.log(newTask);
           //setNewTodo( {text, completed: false});  
           addNewTodos({text, completed: false});  
           setNewTask("")      
       };
        return(
            <section className='TodoCreatorCountainer'>
                <h1>Create new Task</h1>
                <h2>Task Name</h2>
                <TodoTextCreate newTask={newTask} setNewTask={setNewTask}/>
                <CreateTodoButton createNewTodo={ () => createNewTodo(newTask)}/>
                <img src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="tasknot loading" />
                <button onClick={() => setOpenModal(!openModal)} style={{zIndex:1000}}>Open Modal</button>
               {openModal && (
               <Modal>
               <h1>Modal</h1>
               </Modal>
               )}
            </section>
        );
    }

  export {TodoCreatorCountainer};