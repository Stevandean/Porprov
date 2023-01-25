import React, { useContext } from 'react'
import { globalState } from '../../../context/context'
import axios from 'axios'
import socketIo from 'socket.io-client'
import { useRouter } from 'next/router';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalPeserta = () => {

    const socket = socketIo (BASE_URL)

    const location = useRouter()
    const {pathname} = location
    const splitLoc = pathname.split ('/admin/peserta')

    const {showModalPeserta, setShowModalPeserta} = useContext (globalState)
    const {action, id} = useContext (globalState)

    // ini state
    const {dataTunggal, setDataTunggal} = useContext (globalState)
    const {dataGanda, setDataGanda} = useContext (globalState)
    const {dataRegu, setDataRegu} = useContext (globalState)
    const {kelas, setKelas} = useContext (globalState)
    const {jenisKelamin, setJenisKelamin} = useContext (globalState)
    const {nama1, setNama1} = useContext (globalState)
    const {nama2, setNama2} = useContext (globalState)
    const {nama3, setNama3} = useContext (globalState)
    const {kontingen, setKontingen} = useContext (globalState)

    const getTunggal = () => {
        axios.get (BASE_URL + `/api/peserta/seni/tunggal`)
        .then (res => {
            setDataTunggal (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getGanda = () => {
        axios.get (BASE_URL + `/api/peserta/seni/ganda`)
        .then (res => {
            setDataGanda (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getRegu = () => {
        axios.get (BASE_URL + `/api/peserta/seni/regu`)
        .then (res => {
            setDataRegu (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        let form = {
            kelas : kelas,
            jk : jenisKelamin,
            nama1 : nama1,
            nama2 : nama2,
            nama3 : nama3,
            kontingen : kontingen,
        }
        if (action === 'insert') {
            if (splitLoc.toString() === ',Tunggal') {
                axios.post (BASE_URL + `/api/peserta/seni/tunggal`, form)
                .then (res => {
                    getTunggal ()
                    setShowModalPeserta (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === ',Ganda') {
                axios.post (BASE_URL + `/api/peserta/seni/ganda`, form)
                .then(res => {
                    getGanda ()
                    setShowModalPeserta (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === ',Regu') {
                axios.post (BASE_URL + `/api/peserta/seni/regu`, form)
                .then (res => {
                    getRegu ()
                    setShowModalPeserta (false)
                })
            }
        } else if (action === 'update') {
            if (splitLoc.toString() === ',Tunggal') {
                axios.put (BASE_URL + `/api/peserta/seni/${id}`, form)
                .then (res => {
                    getTunggal ()
                    setShowModalPeserta (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === ',Ganda') {
                axios.put (BASE_URL + `/api/peserta/seni/${id}`, form)
                .then (res => {
                    getGanda ()
                    setShowModalPeserta (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === ',Regu') {
                axios.put (BASE_URL + `/api/peserta/seni/${id}`, form)
                .then (res => {
                    getRegu ()
                    setShowModalPeserta (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else {console.log('gagal update');}
        }
    }

    return (
    <>
        {showModalPeserta ? (
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
                                        <span>Kelas</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                        type="text"
                                        value={kelas}
                                        onChange={(e) => setKelas(e.target.value)}
                                        required
                                        >        
                                        </input>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Jenis Kelamin</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <div className="relative w-full">
                                            <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-2'>
                                                <select className='w-full bg-[#212437] focus:outline-none' name={jenisKelamin} onChange = {(e) => setJenisKelamin (e.target.value)} required>
                                                    <option></option>
                                                    <option value="putra">Putra</option>
                                                    <option value="putri">Putri</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {(() => {
                                    if (splitLoc.toString() === ',Tunggal') {
                                        return (
                                            <div className="flex flex-row space-x-3 w-full">
                                                <div className="w-2/6 flex justify-between">
                                                    <span>Nama 1</span>
                                                    <span>:</span>
                                                </div>
                                                <div className="w-4/6">
                                                    <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                                    type="text"
                                                    value={nama1}
                                                    onChange={(e) => setNama1(e.target.value)}
                                                    required
                                                    >        
                                                    </input>
                                                </div>
                                            </div>
                                        )
                                    } else if (splitLoc.toString() === ',Ganda') {
                                        return (
                                            <>
                                                <div className="flex flex-row space-x-3 w-full">
                                                    <div className="w-2/6 flex justify-between">
                                                        <span>Nama 1</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="w-4/6">
                                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                                        type="text"
                                                        value={nama1}
                                                        onChange={(e) => setNama1(e.target.value)}
                                                        required
                                                        >        
                                                        </input>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row space-x-3 w-full">
                                                    <div className="w-2/6 flex justify-between">
                                                        <span>Nama 2</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="w-4/6">
                                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                                        type="text"
                                                        value={nama2}
                                                        onChange={(e) => setNama2(e.target.value)}
                                                        required
                                                        >        
                                                        </input>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    } else if (splitLoc.toString() === ',Regu') {
                                        return (
                                            <>
                                                <div className="flex flex-row space-x-3 w-full">
                                                    <div className="w-2/6 flex justify-between">
                                                        <span>nama 1</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="w-4/6">
                                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                                        type="text"
                                                        value={nama1}
                                                        onChange={(e) => setNama1(e.target.value)}
                                                        required
                                                        >        
                                                        </input>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row space-x-3 w-full">
                                                    <div className="w-2/6 flex justify-between">
                                                        <span>nama 2</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="w-4/6">
                                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                                        type="text"
                                                        value={nama2}
                                                        onChange={(e) => setNama2(e.target.value)}
                                                        required
                                                        >        
                                                        </input>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row space-x-3 w-full">
                                                    <div className="w-2/6 flex justify-between">
                                                        <span>nama 3</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="w-4/6">
                                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                                        type="text"
                                                        value={nama3}
                                                        onChange={(e) => setNama3(e.target.value)}
                                                        required
                                                        >        
                                                        </input>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    } else {
                                        console.log('gagal');
                                    }
                                })()}
                                <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Kontingen</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                        type="text"
                                        value={kontingen}
                                        onChange={(e) => setKontingen(e.target.value)}
                                        required
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
                                onClick={ () => setShowModalPeserta(false)}>
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

export default modalPeserta