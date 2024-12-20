import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import './App.css';
import React from 'react'
import { useLocalStorage } from './useLocalStorege';
// import {TodoClick} from './TodoClick'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: ' Tomar el curso de react', completed: false},
//   { text: 'Llorar con la Llorona', completed: false}, 

// ];

// localStorage.setItem('TODOS_V1',)

// localStorage.removeItem('TODOS_V1')



function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan: ' + searchValue)
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase()
        .includes(searchValue.toLowerCase())
    }
  )
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        {[]}
      </TodoList>
      <CreateTodoButton />
      {/* <TodoClick/> */}
    </>
  );
}

export default App;
