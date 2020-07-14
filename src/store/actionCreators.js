import { GET_TODOS, POST_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';

const getTodosCreator = (todos) => ({
  type: GET_TODOS,
  payload: todos,
})

const postToDoCreator = (todo) => ({
  type: POST_TODO,
  payload: todo,
})

const deleteToDoCreator = (todos) => ({
  type: DELETE_TODO,
  payload: todos,
})

const toggleToDoCreator = (todos) => ({
  type: TOGGLE_TODO,
  payload: todos,
})

export {
  getTodosCreator,
  postToDoCreator,
  deleteToDoCreator,
  toggleToDoCreator
}