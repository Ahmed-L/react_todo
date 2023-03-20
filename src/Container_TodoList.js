import React, { useState, useEffect } from 'react';
import "./container_todolist.css"
import Todo from "./Todo.js"
import { retrieveList } from './utils';

function Container_TodoList(props)
{
    var todolist = retrieveList()
    if(todolist.length==0)
    {
        return(
            <div className='container mt-5'>
                <p className='text-white font-medium text-md'>It's currently empty. Add a new task.</p>
            </div>
        )
    }
    return(
        <div className='container mt-5'>
            {todolist.map((element)=>
            {
                return <Todo key={element.id} id={element.id} content={element.content} isComplete={element.isComplete} updateLength={props.updateLength}/>
            })
            }
        </div>
    )
}

export {Container_TodoList}