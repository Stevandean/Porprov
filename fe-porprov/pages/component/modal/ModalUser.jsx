import React, { useState } from 'react'
import { useRouter } from 'next/router'

const ModalUser = (props) => {

    const router = useRouter()

    const showModal = props.showModal
    const [active, setActive] = useState('')

    const handleSave = () => {
        if (active == 'dewan') {
            router.push('./event/dewan')        
        } else if (active == 'juri') {
            router.push('./event/juri')
        } else if (active == 'timer') {
            router.push('./event/timer')
        } else if (active == 'layar') {
            router.push('./event/layar')
        }
    }

    return (
        <>
        {showModal ? (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-auto max-w-3xl">

                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#ffffff] outline-none focus:outline-none px-6">
                            {/*header Modal*/}
                            <div className='w-full mt-7 px-7'>
                                <h1 className='text-center font-montserrat text-5xl font-bold text-[#222954]'>{props.event}</h1>
                                <button onClick={props.handleClose}>
                                    <div className='font-montserrat font-bold text-4xl absolute right-8 top-4 cursor-pointer max-w-xs'>
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.4944 20.0827C23.8163 20.3849 23.9971 20.7947 23.9971 21.2221C23.9971 21.6495 23.8163 22.0593 23.4944 22.3615C23.1724 22.6637 22.7358 22.8335 22.2805 22.8335C21.8252 22.8335 21.3886 22.6637 21.0667 22.3615L12 13.8481L2.93047 22.3588C2.60854 22.661 2.17191 22.8308 1.71663 22.8308C1.26135 22.8308 0.82472 22.661 0.502789 22.3588C0.180859 22.0566 4.79714e-09 21.6468 0 21.2194C-4.79714e-09 20.7921 0.180859 20.3822 0.502789 20.08L9.57232 11.5693L0.505645 3.05584C0.183715 2.75365 0.00285616 2.34379 0.00285616 1.91642C0.00285617 1.48906 0.183715 1.0792 0.505645 0.777012C0.827576 0.474821 1.26421 0.305051 1.71949 0.305051C2.17476 0.305051 2.6114 0.474821 2.93333 0.777012L12 9.29043L21.0695 0.775671C21.3915 0.47348 21.8281 0.303711 22.2834 0.303711C22.7386 0.303711 23.1753 0.47348 23.4972 0.775671C23.8191 1.07786 24 1.48772 24 1.91508C24 2.34245 23.8191 2.75231 23.4972 3.0545L14.4277 11.5693L23.4944 20.0827Z" fill="#11121C"/>
                                        </svg>
                                    </div>
                                </button>
                            </div>

                            {/*Wrapper Input Field*/}
                            <div className="relative my-5 flex flex-col space-y-5 text-white text-lg">
                                <h1 className='text-[#222954] font-montserrat text-3xl text-center font-bold'>PILIH ROLE</h1>
                                <div className='grid grid-cols-4 gap-x-5'>
                                    <button className={`col-span-1 py-8 rounded-lg border-4 border-[#222954] ${active == 'dewan' ? 'bg-[#222954] text-white' : 'bg-white text-[#222954]'}`} onClick={() => setActive('dewan')}>
                                        <h1 className='text-center font-montserrat text-3xl font-bold'>DEWAN</h1>
                                    </button>
                                    <button className={`col-span-1 py-8 rounded-lg border-4 border-[#222954] ${active == 'juri' ? 'bg-[#222954] text-white' : 'bg-white text-[#222954]'}`} onClick={() => setActive('juri')}>
                                        <h1 className='text-center font-montserrat text-3xl font-bold'>JURI</h1>
                                    </button>
                                    <button className={`col-span-1 py-8 rounded-lg border-4 border-[#222954] ${active == 'timer' ? 'bg-[#222954] text-white' : 'bg-white text-[#222954]'}`} onClick={() => setActive('timer')}>
                                        <h1 className='text-center font-montserrat text-3xl font-bold'>TIMER</h1>
                                    </button>
                                    <button className={`col-span-1 py-8 rounded-lg border-4 border-[#222954] ${active == 'layar' ? 'bg-[#222954] text-white' : 'bg-white text-[#222954]'}`} onClick={() => setActive('layar')}>
                                        <h1 className='text-center font-montserrat text-3xl font-bold'>LAYAR</h1>
                                    </button>
                                </div>
                            </div>

                            {/*footer*/}
                            <div className="flex items-center justify-center mb-6 rounded-b">
                                <button
                                    disabled={active == '' ? true : false}
                                    className="bg-[#222954] w-full text-white hover:bg-white hover:text-[#222954] text-2xl font-bold uppercase px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    onClick={() => handleSave()}>
                                        PILIH
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
            </>
        ):null}
        </>
    )
}

export default ModalUser