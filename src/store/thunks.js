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

const deleteToDo = id => dispatch => {
  axios
    .delete(`${url}/${id}`)
    .then(() => dispatch(deleteToDoCreator(id)))
    .catch(() => dispatch(deleteToDoCreator(id)));
};

const toggleToDo = id => dispatch => {
  dispatch(toggleToDoCreator(id));
};

export { getTodos, postToDo, deleteToDo, toggleToDo }