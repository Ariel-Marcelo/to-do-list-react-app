import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section>
      {/* Si hay un error entonces muestra el error */}
      {props.error && props.onError()}
      {/* Si NO esta cargando y NO hay Todos muestra el mensaje de no hay todos */}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {/* Si hay Todos  y NO hay todos con caracters de búsqueda coincidentes entonces muestra el mensaje de no hay coincidencias */}
      {!!props.totalTodos && !props.searchedTodos.length && props.onEmptySearchResults(props.searchText)}
      {/* Si NO esta cargando y hay Todos entonces muestra los Todos */}
      <ul>{!props.loading && !props.error && props.searchedTodos.map(renderFunc)}</ul>
    </section>
  );
}

export { TodoList };
