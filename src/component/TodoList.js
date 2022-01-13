import React, { useContext } from 'react';
import TodoListContext from '../context/TodoListContext';

const TodoList = () => {
  const { todoList, dispatch } = useContext(TodoListContext);
  return (
    <ul className='container'>
      {todoList.map((todoItem) => (
        <li
          className={`todoItem ${todoItem.completed ? 'completed' : ''}`}
          key={todoItem.id}
          onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', todoItem })}>
          {todoItem.todoItem}
          <button
            className='btn btn-sm btn-danger m'
            onClick={() => dispatch({ type: 'REMOVE_TODO_ITEM', todoItem })}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export { TodoList as default };
