import React, { useContext, useState } from 'react'
import axios from 'axios';
import { globalState } from '../../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalNavbar = () => {

    const {showModalNavbar, setShowModalNavbar} = useContext (globalState)
    const {navbar, setNavbar} = useContext (globalState)
    const {action} = useContext (globalState)
    const {nama, setNama} = useContext (globalState)

    const [selectedFile, setSelectedFile] = useState (null)

    const getNavbar = () => {
        axios.get (BASE_URL + `/api/event`)
        .then (res => {
            setNavbar (res.data.data)
        })
        .then (err => {
            console.log(err.response.data.message);
        })
    }

    const handleSave = (e) => {
        e.preventDefault ()
        let form = {
            nama : nama,
        }
        form.append ('selectedFile', selectedFile)
        if (action == 'insert') {
            axios.post (BASE_URL + `/api/event`, form)
            .then (res => {
                setShowModalNavbar (false)
                getNavbar ()
            })
            .catch (err => {
                console.log(err.message);
            })
        } else {
            console.log('gagal');
        }
    }

    const handleFileSelected = (e) => {
        setSelectedFile (e.target.files[0])
    }

    return (
        <>
        {showModalNavbar ? (
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
                                                        Edit Jadwal Tanding
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
                                    {/* icon1 */}
                                    <div className="flex space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>File</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='block w-full border-2 border-white rounded-lg cursor-pointer text-gray-400 bg-[#2E335A] focus:outline-none' aria-describedby='file_input_help' id='file_input' type="file"  onChange={handleFileSelected} />
                                            <p className='mt-2 text-sm text-gray-400' id='file_input_help'>*CSV File Only</p>
                                        </div>
                                    </div>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                                    <button
                                    className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={ () => setShowModalNavbar(false)}>
                                    Close
                                    </button>
                                    {(() => {
                                        if (action === 'insert') {
                                            return (
                                                <>
                                                    <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="submit">
                                                        Tambah Jadwal Tanding
                                                    </button>
                                                </>
                                            )
                                        } else if (action === 'update') {
                                            return (
                                                <>
                                                    <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="submit">
                                                            Edit Jadwal Tanding
                                                    </button>
                                                </>
                                            )
                                        }
                                    })()}
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

export default modalNavbar