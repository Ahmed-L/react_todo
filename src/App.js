import './App.css';
import React, { useState } from 'react';
// import Todo from './Todo.js'
import {Container_TodoList} from './Container_TodoList';
import {InputForm} from './Todo_InputForm';
import { retrieveList } from './utils';


function App() {

  const [list_size, setListsize] = useState(retrieveList().length);
  const handleLocalStorageLength = (size)=>{
    setListsize(size);
  }

  return (
    <div className="App bg-inherit dark:bg-inherit">
      <header className="text-3xl text-white font-bold mb-5">Todo List</header>
      <div>
        <InputForm updateLength={handleLocalStorageLength}/>
      </div>
      <div className='container mt-32'>
      <h2 className='text-3xl text-white font-bold mb-5'>Tasks</h2>
        <Container_TodoList updateLength={handleLocalStorageLength}/>
      </div>
    </div>
  );
}

export default App;
