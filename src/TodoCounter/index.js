import React from 'react';
import './TodoCounter.css';

function TodoCounter({todosCompleted, totalTodos}) {
  return (
    <h2 className="TodoCounter">Has completado {todosCompleted} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };