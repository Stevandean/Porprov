import React, { useContext, useState } from 'react'
import axios from 'axios'
import { globalState } from '../../../context/context';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const ModalEvent = () => {

    const {showModalEvent, setShowModalEvent} = useContext (globalState)
    const {action, id} = useContext (globalState)
    const {nama, setNama} = useContext (globalState)
    const [logo, setLogo] = useState(null)
    const [icon1, setIcon1] = useState()
    const [icon2, setIcon2] = useState()

    const {event, setEvent} = useContext (globalState)

    const headerConfig = () => {
        let token = localStorage.getItem("token")
        let header = {
          headers : { Authorization : `Bearer ${token}` }
        }
        return header
    }

    const handleSave = (e) => {
        e.preventDefault ()
        let form = new FormData() 
        form.append("nama",nama)
        form.append("logo", logo)
        form.append("icon1", icon1)
        form.append("icon2", icon2)


        axios.put (BASE_URL + `/api/event/${id}`, form, headerConfig())
        .then (res => {
            setShowModalEvent (false)
            getEvent ()
        })
        .catch (err => {
            console.log(err.message);
            console.log(err.response.data.message);
        })
    }

    const handleLogo = (e) =>{
        setLogo (e.target.files[0])
    }
    const handleIcon1 = (e) =>{
        setIcon1 (e.target.files[0])
    }
    const handleIcon2 = (e) =>{
        setIcon2 (e.target.files[0])
    }

    const getEvent = () => {
        axios.get (BASE_URL + `/api/event/${id}`, headerConfig())
        .then (res => {
            setEvent (res.data.data)
        })
        .catch (err => [
            console.log(err.message)
        ]) 
    }

  return (
    <>
    {showModalEvent ? (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full my-6 mx-auto max-w-3xl">

                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#212437] outline-none focus:outline-none">
                        <form action='POST' onSubmit={handleSave}>
                            {/*header Modal*/}
                            <div className="flex justify-center p-5 border-b border-solid border-slate-500 rounded-t">
                                {(() => {
                                    if (action === 'insert') {
                                        return (
                                            <>    
                                                <h3 className="text-3xl font-semibold text-white">
                                                    Tambah Jadwal Tanding
                                                </h3>
                                            </>
                                        )
                                    } else if (action === 'update') {
                                        return (
                                            <>    
                                                <h3 className="text-3xl font-semibold text-white">
                                                    Edit Event
                                                </h3>
                                            </>
                                        )
                                    }
                                })()}
                            </div>

                            {/*Wrapper Input Field*/}
                            <div className="relative p-6 flex flex-col space-y-5 text-white text-lg">

                            {/* Input */}
                            <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Nama Event</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                        type="text"
                                        value={nama}
                                        onChange={(e) => setNama(e.target.value)}
                                        required
                                        >        
                                        </input>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Logo</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                        type="file"
                                        onChange={handleLogo}
                                        >        
                                        </input>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Icon 1</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                        type="file"
                                        onChange={handleIcon1}
                                        >        
                                        </input>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Icon 2</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                        type="file"
                                        onChange={handleIcon2}
                                        >        
                                        </input>
                                    </div>
                                </div>
                            </div>

                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                                <button
                                className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={ () => setShowModalEvent(false)}>
                                Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit">
                                        Edit Event
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
    ):null}
    </>

  )
}

export default ModalEvent