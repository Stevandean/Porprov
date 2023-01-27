import React, {createContext, useState} from 'react'
export const globalState = createContext();

function Context({ children }) {
    const [duration,setDuration]= useState(0)
    const [running,setRunning]= useState(false)
  
    return (
      <globalState.Provider value={{ duration, setDuration, running, setRunning }}>
        {children}
      </globalState.Provider>
    );
  }
export default Context;