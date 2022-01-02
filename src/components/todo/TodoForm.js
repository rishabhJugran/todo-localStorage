import React, { useState } from 'react'

export default function TodoForm({ addTasks }) {

    const [ task, setTask ] = useState('')

    const taskHandler = (e) => {
        setTask(e.target.value)
    }

    const submitTask = () => {
        addTasks(task)
        setTask('')
    }

    return (
        <div className='row-2'>
            <input type='text' className='input-text' onChange={taskHandler} value={task} />
            <button className='addTask' onClick={submitTask}>Add Task</button>
        </div>
    )
}
