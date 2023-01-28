import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import socketIo from 'socket.io-client'
import { globalState } from '../../../context/context';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalJadwal = () => {

    // socket io
    const socket = socketIo (BASE_URL)

    const location = useRouter()
    const {pathname} = location
    const splitLoc = pathname.split ('/admin/jadwal')

    const {showModalJadwal, setShowModalJadwal} = useContext (globalState)
    const {action, id} = useContext (globalState)

    // ini state
    const [dataTunggal, setDataTunggal] = useState ([])
    const [dataGanda, setDataGanda] = useState ([])
    const [dataSoloKreatif, setDataSoloKreatif] = useState ([])
    const [dataRegu, setDataRegu] = useState ([])
    const {idJadwal, setIdJadwal} = useContext (globalState)
    const {idMerah, setIdMerah} = useContext (globalState)
    const {idBiru, setIdBiru} = useContext (globalState)
    const {babak, setBabak} = useContext (globalState)
    const {jk, setJk} = useContext (globalState)

    const getTunggal = () => {
        axios.get (BASE_URL + `/api/peserta/seni/tunggal`)
        .then (res => {
            setDataTunggal (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getGanda = () => {
        axios.get (BASE_URL + `/api/peserta/seni/ganda`)
        .then (res => {
            setDataGanda (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getSoloKreatif = () => {
        axios.get (BASE_URL + `/api/peserta/seni/solo_kreatif`)
        .then (res => {
            setDataSoloKreatif (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
        console.log(BASE_URL + `/api/peserta/seni/solo_kreatif`)
    }

    const getRegu = () => {
        axios.get (BASE_URL + `/api/peserta/seni/regu`)
        .then (res => {
            setDataRegu (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const handleSave = (e) =>{
        e.preventDefault()
        let form = {
            id_biru: idBiru,
            id_merah: idMerah,
            babak: babak,
        }
        if (action === 'insert') {
            if (splitLoc.toString() === (',Tunggal')) { 
                axios.post (BASE_URL + `/api/tgr/tunggal`, form)
                .then (res => {
                    getTunggal ()
                    setShowModalJadwal (false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === (',Ganda')) {
                axios.post (BASE_URL + `/api/tgr/ganda`, form)
                .then (res => {
                    getGanda ()
                    setShowModalJadwal (false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === (',SoloKreatif')) {
                axios.post (BASE_URL + `/api/tgr/solo_kreatif`, form)
                .then (res => {
                    getSoloKreatif ()
                    setShowModalJadwal (false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === (',Regu')) {
                axios.post (BASE_URL + `/api/tgr/regu`, form)
                .then (res => {
                    getRegu ()
                    setShowModalJadwal (false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else {
                console.log('gagal insert');
            } 
        } else if (action === 'update') {
            if (splitLoc.toString() === (',Tunggal')) {
                axios.put (BASE_URL + `/api/tgr/${idJadwal}`, form)
                .then (res => {
                    getTunggal ()
                    setShowModalJadwal (false)
                    socket.emit ('editData')
                })    
                .catch (err => {
                    console.log(err.message);
                    console.log(err.response.data.message);
                })
            } else if (splitLoc.toString() === (',Ganda')) {
                axios.put (BASE_URL + `/api/tgr/${idJadwal}`, form)
                .then (res => {
                    getGanda ()
                    setShowModalJadwal (false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === (',SoloKreatif')) {
                axios.put (BASE_URL + `/api/tgr/${idJadwal}`, form)
                .then (res => {
                    getGanda ()
                    setShowModalJadwal (false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === (',Regu')) {
                axios.put (BASE_URL + `/api/tgr/${idJadwal}`, form)
                .then (res => {
                    getRegu ()
                    setShowModalJadwal (false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else {
                console.log('gagal update');
            }
        }
    }

    useEffect(() => {
    
        getTunggal ()
        getGanda ()
        getRegu ()
        getSoloKreatif ()

    }, [])
    

  return (
    <>
        {showModalJadwal ? (
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
                                            <span>Sudut Biru</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <div className="relative w-full">
                                                <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-2'>
                                                    <select className='w-full bg-[#212437] focus:outline-none' name={idBiru} onChange = {(e) => setIdBiru (e.target.value)} required>
                                                        <option></option>
                                                        {(() => {
                                                            if (splitLoc.toString() === ',Tunggal') {
                                                                return (
                                                                    <>
                                                                        {dataTunggal.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString() === (',Ganda')) {
                                                                return (
                                                                    <>
                                                                        {dataGanda.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} - {item.nama2} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString () === (',SoloKreatif')) {
                                                                console.log(dataSoloKreatif);
                                                                return (
                                                                    <>
                                                                        {dataSoloKreatif.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1}</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString () === (',Regu')) {
                                                                return (
                                                                    <>
                                                                        {dataRegu.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} - {item.nama2} - {item.nama3} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else {
                                                                <option>test</option>
                                                            }
                                                        })()}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Sudut Merah</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <div className="relative w-full">
                                                <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-2'>
                                                    <select className='w-full bg-[#212437] focus:outline-none' name={idMerah} onChange = {(e) => setIdMerah (e.target.value)} required>
                                                        <option></option>
                                                        {(() => {
                                                            if (splitLoc.toString() === ',Tunggal') {
                                                                return (
                                                                    <>
                                                                        {dataTunggal.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString() === (',Ganda')) {
                                                                return (
                                                                    <>
                                                                        {dataGanda.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} - {item.nama2} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString() === (',SoloKreatif')) {
                                                                return (
                                                                    <>
                                                                        {dataSoloKreatif.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1}</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString () === (',Regu')) {
                                                                return (
                                                                    <>
                                                                        {dataRegu.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} - {item.nama2} - {item.nama3} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else {
                                                                <option>test</option>
                                                            }
                                                        })()}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Babak</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="text"
                                            value={babak}
                                            onChange={(e) => setBabak(e.target.value)}
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
                                    onClick={ () => setShowModalJadwal(false)}>
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

export default modalJadwal