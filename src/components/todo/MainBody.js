import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function MainBody() {
    
    const [ refresh, setRefresh ] = useState(false)
    const todoArray = JSON.parse(localStorage.getItem("tasks")||"[]");

    //add Task from Todoform into localStorage
    const addTasks = (task) => {
        setRefresh(!refresh)
        if (todoArray.length>0) {
            todoArray.push({"id":todoArray.length, "title":task, "status":false})
            localStorage.setItem("tasks",JSON.stringify(todoArray))
        } else {
            todoArray.push({"id":todoArray.length, "title":task, "status":false})
            localStorage.setItem("tasks",JSON.stringify(todoArray))
        }
    }

    //deleting task from localStorage
    const deleteTask = (id) => {
        const todos = todoArray.filter(item => {
            return item.id !== id
        })
        console.log(todos)
        localStorage.setItem("tasks",JSON.stringify(todos))
        setRefresh(!refresh)
    }

    //changing status of the task
    const statusHandler = (id) => {
        const todos = todoArray.map(item => {
            if(item.id === id){
                return item = {"id":id,"title":item.title,"status":!item.status}
            } else {
                return item
            }
        })

        localStorage.setItem("tasks",JSON.stringify(todos))
        setRefresh(!refresh)
    }

    return (
        <div>
            <TodoForm addTasks={addTasks} />
            <TodoList refresh={refresh} deleteTask={deleteTask} statusHandler={statusHandler}/>
        </div>
    )
}
