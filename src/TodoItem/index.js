import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  /* // alternative solution without stateless and stateful
  const onComplete = () => {
    const newTodos = props.todos.map((todo) => {
      if (todo.text === props.text) {
        todo.completed = !props.completed;
      }
      return todo;
    });
    props.setTodos(newTodos);
  };
  const onDelete = () => {
    const newTodos = props.todos.filter((todo) => {
      return todo.text !== props.text;
    });
    props.setTodos(newTodos);
  };
 */
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
