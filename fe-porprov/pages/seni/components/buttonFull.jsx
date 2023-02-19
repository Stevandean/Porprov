import React, { useContext } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { globalState } from '../../../context/context';

const buttonFull = () => {

    const {isFullscreen, setIsFullscreen} = useContext (globalState)

    const handleFull = () => {
        setIsFullscreen (true)
        // console.log(isFullscreen)
    }

    return (
        <button onClick={() => handleFull()} className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
            </svg>
        </button>     
    )
}

export default buttonFull