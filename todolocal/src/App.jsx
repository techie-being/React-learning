import React from 'react'
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Todoprovider} from "./Context/Todocontext"
import { Todoform, Todoitem } from "./Components";



function App() {
  //this use state todos store all arrays todo states 
  const [todos,settodos] = useState([]);

  //this to do is value that is taken from users input.
  //prev is previous state of todo used to acess all previoud to do array present in one main todos defined in create context.
  //prevtodo is an individual array
  const addtodo = (todo)=>{
    settodos((prev) => [{id: Date.now(), ...todo},...prev]);
  }

  const removetodo = (id) =>{
    settodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const updatetodo = (id,todo)=>{
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  }

  const togglecomplete = (id) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }
  

  //these useffect one is to set todos content in local storage of browser in users side
  //and other is used to get item from local storage when application loads if we dont do this evrytime when we close
  //this page all todo vanish away.
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      settodos(todos)
    }

  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

    
  //here toprovider(contextprovider) is used to pass values or functionalities to all components wrapped inside it
  //then that value changes state which is updated in ui by use state hook that tracks state of component.
  return (
    <>
    
    <Todoprovider value = {{todos,addtodo,removetodo,updatetodo,togglecomplete}}>
      
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            
          </h1>
          <div className="mb-4">{/* Todo form goes here */}<Todoform/></div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id}
              className="w-full">
                <Todoitem todo={todo}/>

              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
    </>
  );
}

export default App;
