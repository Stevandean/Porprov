import React, { useContext, useEffect, useState } from 'react'
import { globalState } from '../../../context/context'

const timer = () => {

  const {duration, setDuration} = useContext(globalState)  
  const {running, setRunning} = useContext(globalState)  

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setDuration((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="font-sans lg:text-7xl text-5xl font-bold tracking-widest">
      <span>{("0" + Math.floor((duration / 1000 / 60) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((duration / 1000) % 60)).slice(-2)}</span>
    </div>
  )
}

export default timer