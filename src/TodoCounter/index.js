import React from 'react';

import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {

  return (
    <div className="container-counter">
      <h2 className="TodoCounter">🥇  {completedTodos} completadas  </h2>
      <h2 className="TodoCounter">  🕓  {totalTodos - completedTodos} pendientes  </h2>
    </div>
    
    
  );
}

export { TodoCounter };