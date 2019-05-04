import React, { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

import './App.css'

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false
    },
    {
      text: 'Redux Learn',
      isCompleted: false
    },
    {
      text: 'Context Api',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodo = [...todos, { text }]
    setTodos(newTodo)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
