import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { globalState } from '../../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalJadwalTanding = () => {

    // state modal
    const {showModalJadwalTanding, setShowModalJadwalTanding} = useContext (globalState)
    
    // ini state
    const {dataJadwalTanding, setDataJadwalTanding} = useContext (globalState)
    const [dataPesertaTanding, setDataPesertaTanding] = useState ([])
    const [dataGelanggang, setDataGelanggang] = useState([])

    const {action, id} = useContext (globalState)
    const {idJadwal, setIdJadwal} = useContext (globalState)
    const {gelanggang, setGelanggang} = useContext (globalState)
    const {partai, setPartai} = useContext (globalState)
    const {kelas, setKelas} = useContext (globalState)
    const {jk, setJk} = useContext (globalState)
    const {golongan, setGolongan} = useContext (globalState)
    const {idBiru, setIdBiru} = useContext (globalState)
    const {idMerah, setIdMerah} = useContext (globalState)
    const {babak, setBabak} = useContext (globalState)

    const headerConfig = () => {
        let token = localStorage.getItem("token")
        let header = {
          headers : { Authorization : `Bearer ${token}` }
        }
        return header
    }

    const getGelanggang = () => {
        let user = JSON.parse(localStorage.getItem("admin"))
        axios.get (BASE_URL + `/api/gelanggang/event/${user.event_id}`, headerConfig())
        .then (res => {
        setDataGelanggang (res.data.data)
        })
        .catch (err => {
        console.log(err.response.data.message);
        })
    }

    const getPesertaTanding = () => {
        axios.get (BASE_URL + `/api/tanding/peserta/`, headerConfig())
        .then (res => {
            setDataPesertaTanding (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getJadwalTanding = () => {
        axios.get (BASE_URL + `/api/tanding/jadwal`, headerConfig())
        .then (res => {
            setDataJadwalTanding (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const handleSave = (e) => {
        e.preventDefault ()
        let form = {
            gelanggang_id : gelanggang,
            partai : partai,
            kelas : kelas,
            jk : jk,
            golongan : golongan,
            id_peserta_biru : idBiru,
            id_peserta_merah : idMerah,
            babak : babak
        }
        if (action == 'insert') {
            axios.post (BASE_URL + `/api/tanding/jadwal`, form, headerConfig())
            .then (res => {
                getJadwalTanding ()
                setShowModalJadwalTanding (false)
            })
            .catch (err => {
                console.log (err.response.data.message)
            })
        } else if (action == 'update') {
            axios.put (BASE_URL + `/api/tanding/jadwal/${idJadwal}`, form, headerConfig())
            .then (res => {
                getJadwalTanding ()
                console.log('berhasil');
                setShowModalJadwalTanding (false)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else {
            console.log('gagal');
        }
    }

    useEffect (() => {
        if(showModalJadwalTanding){
            getGelanggang()
            getPesertaTanding ()
        }
    }, [showModalJadwalTanding])

    return (
        <>
        {showModalJadwalTanding ? (
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
                                                    Tambah Jadwal Tanding {jk}
                                                </h3>
                                            </>
                                        )
                                    } else if (action === 'update') {
                                        return (
                                            <>    
                                                <h3 className="text-3xl font-semibold text-white">
                                                    Edit Jadwal Tanding {jk}
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
                                            <div className="relative w-full">
                                                <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-1'>
                                                    <select className='w-full bg-[#212437] focus:outline-none' value={gelanggang} onChange = {(e) => setGelanggang (e.target.value)} required>
                                                        <option></option>
                                                        {dataGelanggang.map((item, index)=>(
                                                            <option key={index+1} value={item.id}>{item?.gelanggang}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Partai</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="text"
                                            value={partai}
                                            onChange={(e) => setPartai(e.target.value)}
                                            required
                                            >        
                                        </input>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Kelas</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <input className='w-full bg-[#212437] rounded-md focus:outline-none border-2 border-slate-200'
                                            type="text"
                                            value={kelas}
                                            onChange={(e) => setKelas((e.target.value).toUpperCase())}
                                            required
                                            >        
                                        </input>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-3 w-full">
                                    <div className="w-2/6 flex justify-between">
                                        <span>Golongan</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <div className="relative w-full">
                                            <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-2'>
                                                <select className='w-full bg-[#212437] focus:outline-none' value={golongan} onChange = {(e) => setGolongan (e.target.value)} required>
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
                                        <span>Sudut Biru</span>
                                        <span>:</span>
                                    </div>
                                    <div className="w-4/6">
                                        <div className="relative w-full">
                                            <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-2'>
                                                <select className='w-full bg-[#212437] focus:outline-none' value={idBiru} onChange = {(e) => setIdBiru (e.target.value)} required>
                                                    <option></option>
                                                    {dataPesertaTanding.filter(a => a.jk == jk).filter (a => a.kelas == kelas).filter (a => a.golongan == golongan).map ((item, index) => (
                                                        <option key={index + 1} value={item.id}>{item.nama} - {item.kontingen}</option>
                                                    ))}
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
                                                <select className='w-full bg-[#212437] focus:outline-none' value={idMerah} onChange = {(e) => setIdMerah (e.target.value)} required>
                                                    <option></option>
                                                    {dataPesertaTanding.filter (a => a.jk == jk).filter (a => a.kelas == kelas).filter (a => a.golongan == golongan).map ((item, index) => (
                                                        <option key={index + 1} value={item.id}>{item.nama} - {item.kontingen}</option>
                                                    ))}
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
                                        onChange={(e) => setBabak((e.target.value).toUpperCase())}
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
                                onClick={ () => setShowModalJadwalTanding(false)}>
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

export default modalJadwalTanding