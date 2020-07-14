import { GET_TODOS, POST_TODO, DELETE_TODO, TOGGLE_TODO } from './actionsTypes';

const initialState = {
  toDoItems: [],
};

export default (state = initialState, action) => {
  const { toDoItems } = state;

  switch (action.type) {
    case POST_TODO:
      return {
        ...state,
        toDoItems: [...state.toDoItems, action.payload],
      };
    case GET_TODOS:
      return {
        ...state,
        toDoItems: action.payload,
      };
    case DELETE_TODO:
      const newToDos = toDoItems.filter(
        toDoItem => toDoItem.id !== action.payload
      );
      return {
        ...state,
        toDoItems: newToDos,
      };
    case TOGGLE_TODO:
      const newToDoItems = toDoItems.map(toDoItem => {
        if (toDoItem.id === action.payload) toDoItem.completed = !toDoItem.completed;
        return toDoItem;
      });
    
      return {
        ...state,
        toDoItems: newToDoItems,
      };
    default:
      return state;
  }
};