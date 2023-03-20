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
        <div className="Todo m-auto w-100">
            <input type="checkbox" className="w-5 h-5 mr-4 accent-pink-500 rounded:xl !imortant" checked={isComplete} onChange={()=>{handleCheckbox(id)}}></input>
            <input className="w-4/12 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none" type="text" value={todo_content} disabled={!isEditable} onChange={
                (event)=>{setContent(event.target.value);}} style={textStyle}></input>
            <button className="flex-row items-center w-32 h-12 text-white bg-pink-600 hover:bg-pink-900 focus:ring-1 focus:outline-none focus:ring-violet-900 font-medium rounded-lg text-sm ml-2" 
            onClick={(event)=>{handleEditButton(event)}}>
            {editButtonState}</button>
            <button className="flex-row items-center w-32 h-12 text-white bg-purple-600 hover:bg-purple-900 focus:ring-1 focus:outline-none focus:ring-violet-900 font-medium rounded-lg text-sm ml-2"
             onClick={()=>{handleButtonFunctionalites(id, true)}}>Delete</button>
        </div>
    )
}

export default Todo;