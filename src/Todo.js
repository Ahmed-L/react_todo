import React, { useState } from 'react';
import './todo.css';
import { retrieveList, updateList } from './utils';

function Todo(props)
{
    const id = props.id;
    const[todo_content, setContent] = useState(props.content);
    const [isComplete, setComplete] = useState(props.isComplete);
    const[editButtonState, setEditButtonState] = useState("Edit");
    const[isEditable, setEditable] = useState(false);
    const textStyle = {textDecoration: isComplete?"line-through":"none"};


    const handleEditButton = (event) => {
        if(isEditable)
        {
            setEditable(false);
            setEditButtonState("Edit");
            setContent(todo_content);
            handleButtonFunctionalites(props.id, false);
        }
        else
        {
            setEditable(true);
            setEditButtonState("Save");
        }
    }

    const handleCheckbox = (id)=>{
        let list = retrieveList();
        const currentElement = list[list.findIndex((element)=>element.id===id)];
        setComplete(!isComplete);
        currentElement.isComplete = !isComplete;
        console.log(currentElement);
        updateList(list);
    }


    const handleButtonFunctionalites = (id, isDelete)=>{
        let list = retrieveList();
        const idx = list.findIndex((element)=>element.id===id)
        if(!isDelete)
        {
            list[idx].content = todo_content;
            updateList(list);
        }
        else
        {
            console.log("DELETING ",id)
            console.log(idx)
            list.splice(idx, 1);
            console.log(list)
            updateList(list);
            props.updateLength(list.length);
        }
    }
    

    return(
        <div className="flex flex-row justify-end mt-5">
            <div className='flex-row grow'>
                <input type="checkbox" className="w-6 h-6 mx-4 accent-pink-500 rounded:xl" checked={isComplete} onChange={()=>{handleCheckbox(id)}}></input>
                <input className="w-10/12 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none" type="text" value={todo_content} disabled={!isEditable} onChange={
                    (event)=>{setContent(event.target.value);}} style={textStyle}></input>
            </div>
            <div className='flex flex-row gap-x-2'>
                <button className="flex-row items-center w-28 h-12 text-white bg-pink-600 hover:bg-pink-900 focus:ring-1 focus:outline-none focus:ring-violet-900 font-medium rounded-lg text-sm" 
                onClick={(event)=>{handleEditButton(event)}}>
                {editButtonState}</button>
                <button className="flex-row items-center w-28 h-12 text-white bg-purple-600 hover:bg-purple-900 focus:ring-1 focus:outline-none focus:ring-violet-900 font-medium rounded-lg text-sm"
                onClick={()=>{handleButtonFunctionalites(id, true)}}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;