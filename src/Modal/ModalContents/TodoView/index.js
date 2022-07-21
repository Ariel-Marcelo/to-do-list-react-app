import React from "react";
import { TodoContext } from "../../../TodoContext";
import "./TodoView.css";
import { useState } from "react";

function TodoView() {
  const { todoSearched, updateTodo, setOpenModal } = React.useContext(TodoContext);
  const [title, setTitle] = useState(todoSearched.text);
  const [description, setDescription] = useState(todoSearched.description);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    console.log(todoSearched);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
    console.log(todoSearched);
  };

  const update = () => {
    updateTodo(todoSearched, {
      completed: todoSearched.completed,
      text: title,
      description: description,
    });
    close();
  };

  const close = () => {
    setOpenModal(false);
  }
  return (
    <div className="container">
      <div className="scroll-container">
        <label className="label-sections">Titulo</label>
        <textarea
          type="text"
          className="my-input"
          value={title}
          onChange={onChangeTitle}
        />
        <label className="label-sections">Descripción</label>
        <textarea
          type="text"
          className="my-input description"
          value={description}
          onChange={onChangeDescription}
        />
        <label className="label-sections">Estado</label>
        <p className="margen-none my-input bg-secondary">
          {todoSearched.completed ? "Completada" : "No Completada"}
        </p>
        
      </div>
      <div className="save-button-container">
        <div className="save-button" onClick={update}> Actualizar </div>
        <div className="cancel-button" onClick={close}> Cancelar </div>
      </div>
      
    </div>
  );
}

export { TodoView };
