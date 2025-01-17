import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() { 
{/*functional components e.g function App function name is always capitalized just like the component App.Jsx is captialized 
  in the function we can have a whole lot of logic, but we return from the function is known as JSX- JSX is plain old HTML with javascript within*/}
const [todos, setTodos] =useState([])
const [todoValue, setTodoValue] = useState('')

function persistData(newList) {
  localStorage.setItem('todos', JSON.stringify({todos: 
   newList }))
}

function handleAddTodos(newTodo) {
  const newTodoList = [...todos, newTodo ]
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo, todoIndex) => {
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
 
}

function handleEditTodo(index){
   const valueToBeEdited = todos[index]
   setTodoValue(valueToBeEdited)
   handleDeleteTodo(index)
}

useEffect(() => {
  if (!localStorage) {
    return
  }

  let localTodos = localStorage.getItem('todos')
  if (!localTodos) {
    return
    
  }
   
  localTodos = JSON.parse(localTodos).todos
   setTodos(localTodos)
}, [])
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} 
        handleAddTodos={ handleAddTodos} />
      <TodoList  handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
