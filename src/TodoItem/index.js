import './TodoItem.css';
import {TodoCheck} from '../TodoIcon/TodoCheck';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import React from 'react';

function TodoItem({text,completed}) {

    return (
      <li className='TodoItem'>
        <TodoCheck 
        isDone={completed} 
        text={text} />
        <p>{text}</p>
        <DeleteIcon
          text={text}
          />
      </li>
    );
  }
  export {TodoItem};