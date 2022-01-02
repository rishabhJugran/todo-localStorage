import React from 'react'

export default function Todo({ task,deleteTask,statusHandler }) {

    return (
        <div className='row'>
            {
                task.status ? 
                <li style={{color:'red',textTransform:'uppercase',fontWeight:'bold'}}>{task.title}</li> :
                <li>{task.title}</li>
            }
            <button className='btn' onClick={() => deleteTask(task.id)}>Delete</button>
            <input type='checkbox' className='check' onChange={() => statusHandler(task.id)} />
        </div>
    )
}
