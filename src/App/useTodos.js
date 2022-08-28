import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {
  // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronizeItem: sincronizeTodos,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [todoSearch, setTodoSearch] = useState('');
  

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  let todoSearched = '';

  if (!todoSearch.length >= 1) {
    todoSearched = todos;
  } else {
    const index = todos.findIndex((todo) => { 
      return todoSearch === todo.text
    });
    if (index === -1) {
      todoSearched =  { completed: 'None', text: 'Not found', description: 'El dato buscado no se encuentra en el local storage' }
    } else {
      todoSearched = todos[index];
    }
    
  }


  // Función para añadir un nuevo TODO
  const addTodo = (text, description) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      description,
    });
    console.log(newTodos);
    saveTodos(newTodos);
    
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const deleteAllTodo = () => {
    saveTodos([]);
  }

  const updateTodo = (oldTodo, newTodo) => {
    const index = todos.findIndex((todo) => todo === oldTodo);
    todos[index] = newTodo;
    saveTodos([...todos]);
  }

  // Aqui es donde a mi contexto le proveeo de todos los datos globales
  return ({
    
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
        todoSearched,
        todoSearch,
        setTodoSearch,
        updateTodo,
        sincronizeTodos,
        deleteAllTodo    
  });
}
// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { useTodos };
