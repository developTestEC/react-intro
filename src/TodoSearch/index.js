import './TodoSearch.css';
import React from 'react';
import {TodosContext} from '../TodosContext';
function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodosContext);
    return(
      <input 
      className='TodoSearch' 
      type="text"
      value={searchValue}
      placeholder="Coloca el elemento a Buscar"
      onChange={(e) => setSearchValue(e.target.value)} 
      />
    );
  }
  export {TodoSearch};