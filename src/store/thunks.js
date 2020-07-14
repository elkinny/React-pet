import axios from 'axios';

import {
  getTodosCreator,
  postToDoCreator,
  deleteToDoCreator,
  toggleToDoCreator
} from './actionCreators';
import { generateId } from 'utils';

const url = process.env.REACT_APP_DB_LINK;

const getTodos = () => dispatch => {
  axios.get(url).then(res =>
    dispatch(getTodosCreator(res.data)),
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
    .then(res => dispatch(postToDoCreator(res.data)));
};

const deleteToDo = id => (dispatch, getState) => {
  const {toDoItems} = getState();
  const newToDos = toDoItems.filter(
    toDoItem => toDoItem.id !== id
  );

  axios
    .delete(`${url}/${id}`)
    .then(() => dispatch(deleteToDoCreator(newToDos)))
    .catch(() => dispatch(deleteToDoCreator(newToDos)));
};

const toggleToDo = id => (dispatch, getState) => {
  const {toDoItems} = getState();
  const newToDoItems = toDoItems.map(toDoItem => {
    if (toDoItem.id === id) toDoItem.completed = !toDoItem.completed;
    return toDoItem;
  });

  dispatch(toggleToDoCreator(newToDoItems));
};


export { getTodos, postToDo, deleteToDo, toggleToDo }