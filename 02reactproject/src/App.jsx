import { useState } from "react";
import { useCallback } from "react";
import { useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length,setlength] = useState(1);
  const [charallow,setcharallow] = useState(false);
  const [numberallow,setnumberallow] = useState(false);
  const [password,setpassword] = useState("");
  
  const passwordref = useRef(null)

  //this usecallback is used to optimise render id any of our dependency has been changed.
  const pass = useCallback(()=>{
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(charallow) string += "#@!~%^&*()_}{[]><?/";
    if(numberallow) string += "0123456789";

    for (let i = 0; i < length; i++) {
      let randomindex = Math.floor(Math.random() * string.length);
      pass += string.charAt(randomindex); 
    }
    setpassword(pass);
  },[
    length, charallow, numberallow, setpassword
  ])
  
  //how to copy password method with optimization using useCallback
  const copypassword = useCallback(()=>{
    passwordref.current.select();
    passwordref.current.setSelectionRange(0,16)
    window.navigator.clipboard.writeText(password)

  },
  [password])
  
  // this hook is used to run everytime when something is changed from our dependencies
  useEffect(()=>{
    pass()
  },
  [length,charallow,numberallow,setpassword])



  return (
    <>
      <div className="w-screen h-screen bg-gray-900 ">
        <div className="w-screen h-22  p-2 flex justify-center">
          <h1 className="text-amber-100 font-bold">Password Generator</h1>
        </div>

        <div className="w-full h-63 ">
          <div className="p-4  flex justify-center gap-2">
            <input
              type="text"
              placeholder="generate password" 
              defaultValue={password}
              className="w-xl border border-gray-300 rounded-md p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 "
              readOnly 
              ref={passwordref}
              /> 

            <button 
            onClick={copypassword}
            >Copy me</button>
          </div>

          <div className="w-full h-22  flex justify-center gap-7">
            <label htmlFor="length" className="text-xl mt-7 text-cyan-50">
              Length:{length}
            </label>

            <input
              type="range"
              min={1}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{
                setlength(e.target.value)
              }
            }
            />

            <label htmlFor="check1" className="text-xl mt-7 text-cyan-50">
              Characters
            </label>
            <input
              type="checkbox"
              id="check1"
              defaultChecked={charallow}
              className="size-5 mt-8"
              onChange={()=>{
                setcharallow((prev)=> !prev);
              }
            }
            />

            <label htmlFor="check2()" className="text-xl mt-7 text-cyan-50">
              Numbers
            </label>
            <input
              type="checkbox"
              id="check2"
              defaultChecked={numberallow}
              className="size-5 mt-8"
              onChange={()=>{
                setnumberallow((prev)=> !prev);
              }
            }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
