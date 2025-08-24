import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

//we can write component directly in main .jsx 
function Myapp(){
  return (
    <><h1>hi i am a developer</h1></>
  
  )
}
// But usually, developers prefer keeping them in separate files (like App.jsx, Chai.jsx, etc.) for clarity and reusability.

/*
const Reactelement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children:'click to visit google website'
}
*/
// this would not work in react beacuse here render function is expecting some other syntax parameters which is defined by react intial developers


/* this is correct syntax that original react uses to compile html css and js */
const another = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click on me to visit google'
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>   //for injecting
    {/* <reactelement/> */}
    {/* <Myapp/> */}
    {/* {another} */}
  </StrictMode>
)
