import axios from 'axios';

import { GET_TODOS, POST_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';
import { generateId } from 'utils';

const url = process.env.REACT_APP_DB_LINK;

const getTodos = () => dispatch => {
  axios.get(url).then(res =>
    dispatch({
      type: GET_TODOS,
      payload: res.data,
    }),
  )
}

const postToDo = title => dispatch => {
  const newToDo = {
    id: generateId(),
    title,
    completed: false,
  };

  axios
    .post(url, newToDo)
    .then(res => {
      dispatch({
        type: POST_TODO,
        payload: res.data,
      })
  });
};

const deleteToDo = id => (dispatch, getState) => {
  const {toDoItems} = getState();
  const newToDos = toDoItems.filter(
    toDoItem => toDoItem.id !== id
  );

  axios
    .delete(`${url}/${id}`)
    .then(() => dispatch({
        type: DELETE_TODO,
        payload: newToDos,
      }))
    .catch(() => dispatch({
        type: DELETE_TODO,
        payload: newToDos,
      }));
};

const toggleToDo = id => (dispatch, getState) => {
  const {toDoItems} = getState();
  const newToDoItems = toDoItems.map(toDoItem => {
    if (toDoItem.id === id) toDoItem.completed = !toDoItem.completed;
    return toDoItem;
  });

  dispatch({
    type: TOGGLE_TODO,
    payload: newToDoItems,
  });
};


export { getTodos, postToDo, deleteToDo, toggleToDo }