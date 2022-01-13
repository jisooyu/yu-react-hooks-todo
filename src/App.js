import React, { useEffect, useReducer } from 'react';
import './styles.css';
import todosReducer from './reducers/todos';
import TodoListContext from './context/TodoListContext';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';

export default function App() {
  const [todoList, dispatch] = useReducer(todosReducer, []);

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todoList'));
    if (todoList) {
      dispatch({ type: 'POPULATE_TODO_ITEM', todoList });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoListContext.Provider value={{ todoList, dispatch }}>
      <AddTodo />
      <TodoList />
    </TodoListContext.Provider>
  );
}
