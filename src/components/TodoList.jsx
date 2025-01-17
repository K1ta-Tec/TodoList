import React from 'react'
import TodoCard from './TodoCard'

export default function  TodoList(props) {
    const {todos} = props
  
  {/*when it comes to mapping the parent element has a unique key
     as for the todo with the list its key as specified is the todoIndex */}
    return ( 
        <ul className='main'>
            {todos.map((todo, todoIndex)=> {
                return(
                    <TodoCard {...props} key={todoIndex} index=
                    {todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
