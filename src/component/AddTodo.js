import React, { useContext, useState } from 'react';
import TodoListContext from '../context/TodoListContext';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const { dispatch } = useContext(TodoListContext);

  return (
    <div className='container'>
      <input
        type='text'
        value={inputValue}
        placeholder={'Type and add todo item'}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className='btn btn-sm btn-success m'
        onClick={() => {
          dispatch({ type: 'ADD_TODO_ITEM', todoItem: inputValue });
          setInputValue('');
        }}>
        Add
      </button>
    </div>
  );
};

export { AddTodo as default };
