import React, {createContext, useState} from 'react'
export const globalState = createContext();

function Context({ children }) {
    const [duration,setDuration]= useState(0)
    const [running,setRunning]= useState(false)
    const [isFullscreen, setIsFullscreen] = useState (false)
    const [round, setRound] = useState()
    const [showModalDewan, setShowModalDewan] = useState(false)
    const [showModalJuri, setShowModalJuri] = useState(false)
    const [showModalLayar, setShowModalLayar] = useState(false)
    const [infoVerif, setInfoVerif] = useState('')
    const [clickedBlue,setClickedBlue] = useState(true)
    const [clickedRed,setClickedRed] = useState(true)
    const [clickedYellow,setClickedYellow] = useState(true)

    return (
      <globalState.Provider value={{ 
        duration, setDuration, 
        running, setRunning, 
        isFullscreen, setIsFullscreen,
        round, setRound,
        showModalDewan, setShowModalDewan,
        showModalJuri, setShowModalJuri,
        showModalLayar, setShowModalLayar,
        infoVerif, setInfoVerif,
        clickedBlue, setClickedBlue,
        clickedRed, setClickedRed,
        clickedYellow, setClickedYellow
        }}>
        {children}
      </globalState.Provider>
    );
  }
export default Context;