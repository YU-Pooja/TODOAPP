import { ADD_TODO, DELETE_TODO } from "../actions/todos"

const initialState = {
  todos: [
    'Create Projects',
    'Go for 30 mins walk'
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      const newTodos = state.todos.filter((todo, index) => index !== action.payload)
      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}

export default reducer