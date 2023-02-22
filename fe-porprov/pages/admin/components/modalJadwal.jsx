import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import { globalState } from '../../../context/context';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalJadwal = () => {

    const location = useRouter()
    const {pathname} = location
    const splitLoc = pathname.split ('/admin/jadwal')

    const {showModalJadwal, setShowModalJadwal} = useContext (globalState)
    const {action, id} = useContext (globalState)

    // ini state
    const [dataPesertaTunggal, setDataPesertaTunggal] = useState ([])
    const [dataPesertaGanda, setDataPesertaGanda] = useState ([])
    const [dataPesertaRegu, setDataPesertaRegu] = useState ([])
    const [dataPesertaSoloKreatif, setDataPesertaSoloKreatif] = useState ([])
    const {dataJadwalTunggal, setDataJadwalTunggal} = useContext (globalState) 
    const {dataJadwalGanda, setDataJadwalGanda} = useContext (globalState)
    const {dataJadwalRegu, setDataJadwalRegu} = useContext (globalState)
    const {dataJadwalSoloKreatif, setDataJadwalSoloKreatif} = useContext (globalState)
    const {idJadwal, setIdJadwal} = useContext (globalState)
    const {gelanggang, setGelanggang} = useContext (globalState)
    const {partai, setPartai} = useContext (globalState)
    const {idMerah, setIdMerah} = useContext (globalState)
    const {idBiru, setIdBiru} = useContext (globalState)
    const {babak, setBabak} = useContext (globalState)
    const {jk, setJk} = useContext (globalState)

    const getPesertaTunggal = () => {
        axios.get (BASE_URL + `/api/peserta/seni/tunggal`)
        .then (res => {
            setDataPesertaTunggal (res.data.data)
            window.location.reload
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getPesertaGanda = () => {
        axios.get (BASE_URL + `/api/peserta/seni/ganda`)
        .then (res => {
            setDataPesertaGanda (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }
    
    const getPesertaRegu = () => {
        axios.get (BASE_URL + `/api/peserta/seni/regu`)
        .then (res => {
            setDataPesertaRegu (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getPesertaSoloKreatif = () => {
        axios.get (BASE_URL + `/api/peserta/seni/solo_kreatif`)
        .then (res => {
            setDataPesertaSoloKreatif (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getJadwalTunggal = () => {
        axios.get (BASE_URL + `/api/tgr/tunggal`)
        .then (res => {
            setDataJadwalTunggal (res.data.data)
        })
        .catch (err => {
            console.log(err.message)
        })
    }

    const getJadwalGanda = () => {
        axios.get (BASE_URL + `/api/tgr/ganda`)
        .then (res => {
            setDataJadwalGanda (res.data.data)
        })
        .catch (err => {
            console.log (err.message)
        })
    }

    const getJadwalRegu = () => {
        axios.get (BASE_URL + `/api/tgr/regu`)
        .then (res => {
            setDataJadwalRegu (res.data.data)
        })
        .catch (err => {
            console.log (err.message)
        })
    }

    const getJadwalSoloKreatif = () => {
        axios.get (BASE_URL + `/api/tgr/solo_kreatif`)
        .then (res => {
            setDataJadwalSoloKreatif (res.data.data)
        })
        .catch (err => {
            console.log(err.message)
        })
    }

    const handleSave = (e) =>{
        e.preventDefault()
        let form = {
            gelanggang : gelanggang,
            partai : partai,
            id_biru: idBiru,
            id_merah: idMerah,
            babak: babak,
        }
        if (action === 'insert') {
            if (splitLoc.toString() === (',Tunggal')) { 
                axios.post (BASE_URL + `/api/tgr/tunggal`, form)
                .then (res => {
                    getJadwalTunggal ()
                    setShowModalJadwal (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === (',Ganda')) {
                axios.post (BASE_URL + `/api/tgr/ganda`, form)
                .then (res => {
                    getJadwalGanda ()
                    setShowModalJadwal (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === (',SoloKreatif')) {
                axios.post (BASE_URL + `/api/tgr/solo_kreatif`, form)
                .then (res => {
                    getJadwalSoloKreatif ()
                    setShowModalJadwal (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === (',Regu')) {
                axios.post (BASE_URL + `/api/tgr/regu`, form)
                .then (res => {
                    getJadwalRegu ()
                    setShowModalJadwal (false)
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
                    getJadwalTunggal ()
                    setShowModalJadwal (false)
                })    
                .catch (err => {
                    console.log(err.message);
                    console.log(err.response.data.message);
                })
            } else if (splitLoc.toString() === (',Ganda')) {
                axios.put (BASE_URL + `/api/tgr/${idJadwal}`, form)
                .then (res => {
                    getJadwalGanda ()
                    setShowModalJadwal (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === (',SoloKreatif')) {
                axios.put (BASE_URL + `/api/tgr/${idJadwal}`, form)
                .then (res => {
                    getJadwalSoloKreatif ()
                    setShowModalJadwal (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === (',Regu')) {
                axios.put (BASE_URL + `/api/tgr/${idJadwal}`, form)
                .then (res => {
                    getJadwalRegu ()
                    setShowModalJadwal (false)
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
    
        getPesertaTunggal ()
        getPesertaGanda ()
        getPesertaRegu ()
        getPesertaSoloKreatif ()
        getJadwalTunggal ()
        getJadwalGanda ()
        getJadwalRegu ()
        getJadwalSoloKreatif ()

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
                                                        Tambah Jadwal {splitLoc} {jk}
                                                    </h3>
                                                </>
                                            )
                                        } else if (action === 'update') {
                                            return (
                                                <>    
                                                    <h3 className="text-3xl font-semibold text-white">
                                                        Edit Jadwal {splitLoc} {jk}
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
                                            <span>Gelanggang</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="number"
                                            value={gelanggang}
                                            onChange={(e) => setGelanggang((e.target.value).toUpperCase ())}
                                            required
                                            >        
                                            </input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Partai</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="number"
                                            value={partai}
                                            onChange={(e) => setPartai((e.target.value).toUpperCase ())}
                                            required
                                            >        
                                            </input>
                                        </div>
                                    </div>
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
                                                                        {dataPesertaTunggal.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString() === (',Ganda')) {
                                                                return (
                                                                    <>
                                                                        {dataPesertaGanda.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} - {item.nama2} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString () === (',SoloKreatif')) {
                                                                return (
                                                                    <>
                                                                        {dataPesertaSoloKreatif.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString () === (',Regu')) {
                                                                return (
                                                                    <>
                                                                        {dataPesertaRegu.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} - {item.nama2} - {item.nama3} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
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
                                                                        {dataPesertaTunggal.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString() === (',Ganda')) {
                                                                return (
                                                                    <>
                                                                        {dataPesertaGanda.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} - {item.nama2} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString() === (',SoloKreatif')) {
                                                                return (
                                                                    <>
                                                                        {dataPesertaSoloKreatif.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
                                                            } else if (splitLoc.toString () === (',Regu')) {
                                                                return (
                                                                    <>
                                                                        {dataPesertaRegu.filter(a => a.jk == jk).map (item => (
                                                                            <option value={item.id}>{item.nama1} - {item.nama2} - {item.nama3} ({item.kontingen})</option>
                                                                        ))}
                                                                    </>
                                                                )
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
                                            onChange={(e) => setBabak((e.target.value).toUpperCase ())}
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