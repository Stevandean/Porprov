import React, { useContext, useEffect, useState } from 'react'
import { globalState } from '../../../context/context'

const timer = () => {

  const {duration, setDuration} = useContext(globalState)  

  const countDown = (() => {
    let milliseconds = duration
  
    let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
  
    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);

    if (duration > 0){
      setTimeout (() => {
        setDuration (duration - 1000)
      },1000)

      if (minutes <= 0 && seconds <= 0) {
        return (
          <div  >00 : 00</div>
        )
      }

      if (minutes <= 10 && seconds < 10) {
        return `0${minutes} : 0${seconds}`
      
      } else if (minutes <= 10 && seconds >= 10) {
        return `0${minutes} : ${seconds}`
      } else {
        return `${minutes} : ${seconds}`
      }

    } else {
      if (minutes <= 0 && seconds <= 0) {
        return (
          <div className="">00 : 00</div>
        )
      }
      return `${minutes} : ${seconds}`
    }

  })

  return (
    <div>{countDown()}</div>
  )
}

export default timer