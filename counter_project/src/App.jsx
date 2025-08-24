
import { useState } from "react"; // it used to import hooks from react library, in this it is importing usestate hook from react
function App() {

  let username = "rakesh"
  let [counter,setCounter] = useState(1); // 0 is the default value we can set anthing instead of 0, and this use state give an array that consist of counter variable and Setcounter function that propagates the states change in UI.
  const addValue = ()=>{
    if(counter > 0 && counter < 20){
      setCounter(counter + 1);
    }
    
    console.log("value added",counter)  //it shows ame old value because of asynchronous behaviour of setCounter
    
  }
  

  const removeValue = ()=>{
    if(counter <= 20 && counter > 0 ){
      setCounter(counter - 1);
    }
    
    console.log("value removed",counter);
  }

  return (
    <>
    <h1>jai shree jagaganth</h1>
    <h2>Hi! I am {username}. i am a web-developer</h2>
    <h2>counter value: {counter}</h2>

    <button id="add" onClick={addValue}>
      add value</button>

    <br/>

    <button id="remove" onClick={removeValue}>
      remove value</button>
    
    </>
    
  )
}

export default App
