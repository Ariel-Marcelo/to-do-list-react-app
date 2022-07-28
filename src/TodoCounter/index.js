import React from 'react';

import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {

  return (
    <div className={`container-counter ${ loading && "TodoCounter--loading"}`}>
      <h2 className="TodoCounter">🥇  {completedTodos} completadas  </h2>
      <h2 className="TodoCounter">  🕓  {totalTodos - completedTodos} pendientes  </h2>
    </div>
    
    
  );
}

export { TodoCounter };