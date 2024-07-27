export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo
})

export const deleteTodo = (todoIndex) => ({
  type: DELETE_TODO,
  payload: todoIndex
})