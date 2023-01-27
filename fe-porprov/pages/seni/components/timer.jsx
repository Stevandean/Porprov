import React, { useContext, useEffect, useState } from 'react'
import { globalState } from '../../../context/context'

const timer = () => {

  const {duration, setDuration} = useContext(globalState)  
  const {running, setRunning} = useContext(globalState)  

  useEffect(() => {
    let interval;
    let waktu = 0
    if (running || duration > 0) {
      interval = setInterval(() => {
        waktu = duration + 1000
        setDuration((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="font-sans">
      <span>{("0" + Math.floor((duration / 1000 / 60) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((duration / 1000) % 60)).slice(-2)}</span>
    </div>
  )
}

export default timer