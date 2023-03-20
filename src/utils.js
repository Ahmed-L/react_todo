function retrieveList()
{
    try{
        if(localStorage.getItem("todo-list")!==undefined && localStorage.getItem("todo-list")!==null)
            return JSON.parse(localStorage.getItem("todo-list"))
        else
            return [];
    }
    catch(e)
    {
        console.log(e.message);
    }
    
}

function updateList(list)
{
    try{
        localStorage.setItem("todo-list", JSON.stringify(list));
    }
    catch(e)
    {
        console.log(e.message);
    }
}

export {retrieveList, updateList}