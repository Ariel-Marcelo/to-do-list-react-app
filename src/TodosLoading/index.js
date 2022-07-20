import React from 'react';
import './TodosLoading.css';

function TodosLoading ( {error} ) {
  return (
    <div className='loadingTodo-container'>
      <span className="loadingTodo-completeIcon"></span>
      <p className='loadingTodo-text'> Cargando Todos ...</p>
      <span className='loadingTodo-completeIcon'></span>
    </div>
  );
}

export { TodosLoading }