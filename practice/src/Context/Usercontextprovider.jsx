import React from "react";
import { useEffect, useState } from 'react'
import Usercontext from "./Usercontext";

const Usercontextprovider = ({children}) => {
    const[userdata,setuserdata] = useState(null)

    
    return(
        <Usercontext.Provider value = {{userdata,setuserdata}}>
            {children}
            
        </Usercontext.Provider>

    )
}
export default Usercontextprovider