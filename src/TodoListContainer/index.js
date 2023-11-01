import './TodoListContainer.css';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoLIst';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import React from 'react';


function TodoListContainer ({todos,loading,error}) {
    
    let recivedTodos = todos;
    return (
        <section className='TodoListContainer'>
            <h1>Your Tasks</h1>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && recivedTodos.length === 0)&& <EmptyTodos/>}
                {recivedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    />
                ))}

            </TodoList>
            
           
        </section>
        
    );
}

export {TodoListContainer};