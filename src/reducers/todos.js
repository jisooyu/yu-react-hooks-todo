import { v4 as uuidv4 } from 'uuid';

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_TODO_ITEM':
      return action.todoList;

    case 'ADD_TODO_ITEM':
      return [
        ...state,
        {
          id: uuidv4(),
          todoItem: action.todoItem,
          completed: false,
        },
      ];

    case 'REMOVE_TODO_ITEM':
      return state.filter((todoItem) => todoItem.id !== action.todoItem.id);

    case 'TOGGLE_COMPLETED': {
      return state.map((todoItem) =>
        todoItem.id === action.todoItem.Id
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      );
    }

    default:
      return state;
  }
};

export { todosReducer as default };
