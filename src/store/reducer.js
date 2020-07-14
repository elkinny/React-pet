import { GET_TODOS, POST_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  toDoItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_TODO:
      return {
        ...state,
        toDoItems: [...state.toDoItems, action.payload],
      };
    case GET_TODOS:
    case DELETE_TODO:
    case TOGGLE_TODO:
      return {
        ...state,
        toDoItems: action.payload,
      };
    default:
      return state;
  }
};