import React from 'react'
import { useState } from 'react/cjs/react.development';
import Todo from './Todo'

function TodoList({deleteTask, statusHandler}) {

    const tasks = JSON.parse(localStorage.getItem("tasks")||"[]")

    return (
        <div>
            <ul>
                {tasks.length ? tasks.map(task => <Todo key={task.id} task={task} statusHandler={statusHandler} deleteTask={deleteTask}/>) : <h3 className='main-heading'>Nothing to do</h3>}    
            </ul>            
        </div>
    )
}

export default TodoList
