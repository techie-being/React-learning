import {  createSlice,nanoid } from "@reduxjs/toolkit";

// default state of todo
const initialstate = {
    todos:[{id:1,text:""}]
}

// create a slicer using  create slice it contains 3 things name,initialstate,reducer
export const todoslice = createSlice({
    name:"todo",
    initialState:initialstate,
    // reducer properties contains 2 things "state":gives us access to todo object current state,"action":it gives us values access such as id,
    reducers:{
        addtodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },

        removetodo: (state,action)=>{
            // here loop runs on every todo object and all todo with id not matched with selected todo will be returned in same arrray.
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);

        }
    }
})

export const {addtodo,removetodo}=todoslice.actions;
export default todoslice.reducer;

