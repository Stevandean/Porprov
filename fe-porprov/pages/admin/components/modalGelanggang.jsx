import React, { useContext, useState } from 'react'
import axios from 'axios'
import { globalState } from '../../../context/context';
import swal from 'sweetalert';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const ModalGelanggang = () => {

    const {showModalGelanggang, setShowModalGelanggang} = useContext (globalState)
    const {action, id} = useContext (globalState)
    const {nomor, setNomor} = useContext (globalState)
    const {status, setStatus} = useContext (globalState)

    const {gelanggang, setGelanggang} = useContext (globalState)

    const headerConfig = () => {
        let token = localStorage.getItem("token")
        let header = {
          headers : { Authorization : `Bearer ${token}` }
        }
        return header
    }

    const handleSave = (e) => {
        e.preventDefault ()
        let form = {
            gelanggang: nomor,
            status: status
        }

        if (action == 'insert') {
            axios.post(BASE_URL + '/api/gelanggang', form, headerConfig())
            .then (res => {
                setShowModalGelanggang (false)
                getGelanggang ()
            })
            .catch (err => {
                console.log(err.message);
                console.log(err.response.data.message);
                swal({
                    title: "Failed!",
                    text: "Invalid Token!",
                    icon: "error",
                    timer: '1300',
                    buttons: false
                })
            })
        } else if (action == 'update') {
            axios.put (BASE_URL + `/api/gelanggang/${id}`, form, headerConfig())
            .then (res => {
                setShowModalGelanggang (false)
                getGelanggang ()
            })
            .catch (err => {
                console.log(err.message);
                console.log(err.response.data.message);
            })
            
        }
    }

    const getGelanggang = () => {
        axios.get (BASE_URL + `/api/gelanggang/event`, headerConfig())
        .then (res => {
            setGelanggang (res.data.data)
        })
        .catch (err => [
            console.log(err.message)
        ]) 
    }

  return (
    <>
    {showModalGelanggang ? (
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
                                                    Tambah Gelanggang
                                                </h3>
                                            </>
                                        )
                                    } else if (action === 'update') {
                                        return (
                                            <>    
                                                <h3 className="text-3xl font-semibold text-white">
                                                    Edit Gelanggang
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
                                        <span>Nama</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                        type="text"
                                        value={nomor}
                                        onChange={(e) => setNomor(e.target.value)}
                                        required
                                        >        
                                        </input>
                                    </div>
                                </div>

                                <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Status</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <div className="relative w-full">
                                            <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-2'>
                                                <select className='w-full bg-[#212437] focus:outline-none' value={status} onChange = {(e) => setStatus (e.target.value)} required>
                                                    <option></option>
                                                    <option value="seni">Seni</option>
                                                    <option value="tanding">Tanding</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                                <button
                                className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={ () => setShowModalGelanggang(false)}>
                                Close
                                </button>
                                {(() => {
                                    if (action === 'insert') {
                                        return (
                                            <>
                                                <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit">
                                                    Tambah Gelanggang
                                                </button>
                                            </>
                                        )
                                    } else if (action === 'update') {
                                        return (
                                            <>
                                                <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="submit">
                                                        Edit Gelanggang
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

export default ModalGelanggang