import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {

  const { totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    <div className="container-counter">
      <h2 className="TodoCounter">🥇  {completedTodos} completadas  </h2>
      <h2 className="TodoCounter">  🕓  {totalTodos - completedTodos} pendientes  </h2>
    </div>
    
    
  );
}

export { TodoCounter };