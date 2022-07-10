import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoView.css';

function TodoView () {

  const { todoSearched } = React.useContext(TodoContext);
  return (
    <div className="container">
      <div className="scroll-container">
        Titulo : {todoSearched.text}
        <hr></hr>
        Descripción : {todoSearched.description}
        <hr></hr>
        Estado : {todoSearched.completed ? 'Completada' : 'No Completada' }
        
      </div>
    </div>
  );

}

export { TodoView }