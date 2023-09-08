import React, { useContext } from 'react'
import { globalState } from '../../../context/context'
import axios from 'axios'
import { useRouter } from 'next/router';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalPeserta = () => {

    const location = useRouter()
    const {pathname} = location
    const splitLoc = pathname.split ('/admin/peserta')

    const {showModalPeserta, setShowModalPeserta} = useContext (globalState)
    const {action, id} = useContext (globalState)

    // ini state
    const {dataTunggal, setDataPesertaTunggal} = useContext (globalState)
    const {dataGanda, setDataPesertaGanda} = useContext (globalState)
    const {dataRegu, setDataPesertaRegu} = useContext (globalState)
    const {dataSoloKreatif, setDataPesertaSoloKreatif} = useContext (globalState)
    const {golongan, setGolongan} = useContext (globalState)
    const {jenisKelamin, setJenisKelamin} = useContext (globalState)
    const {nama1, setNama1} = useContext (globalState)
    const {nama2, setNama2} = useContext (globalState)
    const {nama3, setNama3} = useContext (globalState)
    const {kontingen, setKontingen} = useContext (globalState)

    const headerConfig = () => {
        let token = localStorage.getItem("token")
        let header = {
          headers : { Authorization : `Bearer ${token}` }
        }
        return header
    }

    const getPesertaTunggal = () => {
        axios.get (BASE_URL + `/api/seni/peserta/tunggal`, headerConfig())
        .then (res => {
            setDataPesertaTunggal (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getPesertaGanda = () => {
        axios.get (BASE_URL + `/api/seni/peserta/ganda`, headerConfig())
        .then (res => {
            setDataPesertaGanda (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getPesertaSoloKreatif = () => {
        axios.get (BASE_URL + `/api/seni/peserta/solo_kreatif`, headerConfig())
        .then (res => {
            setDataPesertaSoloKreatif (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getPesertaRegu = () => {
        axios.get (BASE_URL + `/api/seni/peserta/regu`, headerConfig())
        .then (res => {
            setDataPesertaRegu (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        let form = {
            golongan : golongan,
            jk : jenisKelamin,
            nama1 : nama1,
            nama2 : nama2,
            nama3 : nama3,
            kontingen : kontingen,
        }
        if (action === 'insert') {
            if (splitLoc.toString() === ',Tunggal') {
                axios.post (BASE_URL + `/api/seni/peserta/tunggal`, form, headerConfig())
                .then (res => {
                    getPesertaTunggal ()
                    setShowModalPeserta (false)
                })
                .catch (err => {
                    console.log(err.message);
                    console.log(err.response.data.message);
                })
            } else if (splitLoc.toString() === ',Ganda') {
                axios.post (BASE_URL + `/api/seni/peserta/ganda`, form, headerConfig())
                .then(res => {
                    getPesertaGanda ()
                    setShowModalPeserta (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === ',SoloKreatif') {
                axios.post (BASE_URL + `/api/seni/peserta/solo_kreatif`, form, headerConfig())
                .then (res => {
                    getPesertaSoloKreatif ()
                    setShowModalPeserta (false)
                })
            } else if (splitLoc.toString() === ',Regu') {
                axios.post (BASE_URL + `/api/seni/peserta/regu`, form, headerConfig())
                .then (res => {
                    getPesertaRegu ()
                    setShowModalPeserta (false)
                })
            } else {
                console.log('gagal insert');
            }
        } else if (action === 'update') {
            if (splitLoc.toString() === ',Tunggal') {
                axios.put (BASE_URL + `/api/seni/peserta/${id}`, form, headerConfig())
                .then (res => {
                    getPesertaTunggal ()
                    setShowModalPeserta (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === ',Ganda') {
                axios.put (BASE_URL + `/api/seni/peserta/${id}`, form, headerConfig())
                .then (res => {
                    getPesertaGanda ()
                    setShowModalPeserta (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === ',SoloKreatif') {
                axios.put (BASE_URL + `/api/seni/peserta/${id}`, form, headerConfig())
                .then (res => {
                    getPesertaSoloKreatif ()
                    setShowModalPeserta (false)
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === ',Regu') {
                axios.put (BASE_URL + `/api/seni/peserta/${id}`, form, headerConfig())
                .then (res => {
                    getPesertaRegu ()
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
                                                    Tambah Peserta {splitLoc}
                                                </h3>
                                            </>
                                        )
                                    } else if (action === 'update') {
                                        return (
                                            <>    
                                                <h3 className="text-3xl font-semibold text-white">
                                                    Edit Peserta {splitLoc}
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
                                        <span>Golongan</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <div className="relative w-full">
                                            <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-2'>
                                                <select className='w-full bg-[#212437] focus:outline-none' value={golongan.toUpperCase()} onChange = {(e) => setGolongan (e.target.value)} required>
                                                    <option></option>
                                                    <option value="SINGA">Singa</option>
                                                    <option value="MACAN">Macan</option>
                                                    <option value="USIA DINI">Usia Dini</option>
                                                    <option value="PRA REMAJA">Pra Remaja</option>
                                                    <option value="REMAJA">Remaja</option>
                                                    <option value="DEWASA">Dewasa</option>
                                                    <option value="MASTER A">Master A</option>
                                                    <option value="MASTER B">Master B</option>
                                                </select>
                                            </div>
                                        </div>
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
                                                <select className='w-full bg-[#212437] focus:outline-none' value={jenisKelamin} onChange = {(e) => setJenisKelamin (e.target.value)} required>
                                                    <option></option>
                                                    <option value="PUTRA">Putra</option>
                                                    <option value="PUTRI">Putri</option>
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
                                                    onChange={(e) => setNama1((e.target.value).toUpperCase())}
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
                                                        onChange={(e) => setNama1((e.target.value).toUpperCase())}
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
                                                        onChange={(e) => setNama2((e.target.value).toUpperCase())}
                                                        required
                                                        >        
                                                        </input>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    } else if (splitLoc.toString () === ',SoloKreatif') {
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
                                                    onChange={(e) => setNama1((e.target.value).toUpperCase())}
                                                    required
                                                    >        
                                                    </input>
                                                </div>
                                            </div>
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
                                                        onChange={(e) => setNama1((e.target.value).toUpperCase())}
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
                                                        onChange={(e) => setNama2((e.target.value).toUpperCase())}
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
                                                        onChange={(e) => setNama3((e.target.value).toUpperCase())}
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