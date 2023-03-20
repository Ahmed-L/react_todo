import React, { useState, useEffect, createRef } from 'react';
import "./todo_inputform.css"
import {updateList, retrieveList} from './utils.js'


function InputForm(props)
{
    var todolist = retrieveList();
    const inputRef = createRef();


    const handleSubmit = (event)=>
    {
        const text_input = inputRef.current.value.trim();
        if(text_input === "")
            return;
        const generated = parseFloat(Math.random() * 10000)
        const status = false;
        todolist.unshift({content: text_input, id: generated, isComplete:status})
        updateList(todolist);
        inputRef.current.value = "";
        props.updateLength(todolist.length);
        event.preventDefault();
    }


    return(
        <div className=''>
            <h2 className='text-white'>Add a new task</h2>
            <form className='flex flex-row justify-center' onSubmit={(event)=>{
                handleSubmit(event)
            }}>
                <input ref={inputRef} className='w-4/12 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none' type="text" name='new-task' placeholder='task description' value={undefined}></input>
                <button className='md:w-32 bg-fuchsia-700 text-white font-bold py-3 px-3 rounded-lg mt-2 ml-2 hover:bg-purple-900 transition ease-in-out duration-350'>Submit</button>
            </form>
        </div>
    )
}

export {InputForm};