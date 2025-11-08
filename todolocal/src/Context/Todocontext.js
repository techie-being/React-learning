import React from "react";
import { createContext, useContext } from "react";

export const Todocontext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: "false",
    },
  ],
  addtodo: (todo)=> {},
  removetodo: (id) => {},
  updatetodo: (id,todo) => {},
  togglecomplete : (id) => {}

  
});

export const Todoprovider = Todocontext.Provider;

export const usetodo = () => {
  return useContext(Todocontext);
};
