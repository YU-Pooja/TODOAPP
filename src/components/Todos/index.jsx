import React from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../../actions/todos'

function Todos() {
  const todos = useSelector(store => store.todos)
  const dispatch = useDispatch()

  const handleDeleteTodo = (todoIndex) => {
    dispatch(deleteTodo(todoIndex))
  }

  return (
    <div id='todo-container'> 
      {todos.map((todo, index) => (
        <div className='todo-item' key={index}>
          <span>{todo}</span>
          <span 
            className='cross-btn'
            onClick={() => handleDeleteTodo(index)}
          >❌</span>
        </div>
      ))}
    </div>
  )
}

export default Todos