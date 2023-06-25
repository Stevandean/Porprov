import React, { useEffect, useState } from 'react'
import socketIo from 'socket.io-client'
import axios from 'axios';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// socket io
const socket = socketIo (BASE_URL)   

const nilaiSeniSoloKreatif = () => {
    
    const router = useRouter ()
    const [event, setEvent] = useState ([])

    // state untuk ambil data dari local storage
    const [peserta, setPeserta] = useState ([])
    const [jadwal, setJadwal] = useState ([])
    const [dataJuri, setDataJuri] = useState ([])

    // ini state
    const [nilai, setNilai] = useState ([])
    const [activeT, setActiveT] = useState (0)
    const [activeF, setActiveF] = useState (0)
    const [activeS, setActiveS] = useState (0)
    
    const getNilai = () => {
        const peserta = JSON.parse(localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse(localStorage.getItem ('jadwalSeni'))
        const juri = JSON.parse (localStorage.getItem ('user'))
        
        setJadwal (jadwal)
        setDataJuri (juri)
        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let id_juri = juri.id

        axios.get (BASE_URL + `/api/nilai/solo_kreatif/juri/${id_jadwal}/${id_peserta}/${id_juri}`)
        .then (res => {
            setNilai (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
        console.log(BASE_URL + `/api/nilai/solo_kreatif/juri/${id_jadwal}/${id_peserta}/${id_juri}`);

    }

    const technique = (t) => {
        setActiveT(t)
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse(localStorage.getItem ('jadwalSeni'))
        const juri = JSON.parse (localStorage.getItem ('user'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let id_juri = juri.id

        let form = {
            technique : t
        }

        axios.put (BASE_URL + `/api/nilai/solo_kreatif/juri/${id_jadwal}/${id_peserta}/${id_juri}`, form)
        .then (res => {
            socket.emit ('juriToDewanLayar', id_jadwal)
            getNilai()
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const firmness = (f) => {
        setActiveF(f)
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse(localStorage.getItem ('jadwalSeni'))
        const juri = JSON.parse (localStorage.getItem ('user'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let id_juri = juri.id

        let form = {
            firmness : f
        }

        axios.put (BASE_URL + `/api/nilai/solo_kreatif/juri/${id_jadwal}/${id_peserta}/${id_juri}`, form)
        .then (res => {
            socket.emit ('juriToDewanLayar', id_jadwal)
            getNilai()
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const soulfulness = (s) => {
        setActiveS (s)
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse (localStorage.getItem ('jadwalSeni'))
        const juri = JSON.parse (localStorage.getItem ('user'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let id_juri = juri.id

        let form = {
            soulfulness : s
        }

        axios.put (BASE_URL + `/api/nilai/solo_kreatif/juri/${id_jadwal}/${id_peserta}/${id_juri}`, form)
        .then (res => {
            socket.emit ('juriToDewanLayar', id_jadwal)
            getNilai()
        })
        .catch (err => {
            console.log(err.response.data.response);
        })
    }

    const selesai = () => {
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse (localStorage.getItem ('jadwalSeni'))
        const juri = JSON.parse (localStorage.getItem ('user'))
        const nama = (localStorage.getItem ('nama'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let id_juri = juri.id
        let nama_juri = nama

        let form = {
            nama_juri : nama_juri
        }

        if (confirm ('Anda yakin mengakhiri pertandingan?') == 1) {
            axios.put (BASE_URL + `/api/nilai/solo_kreatif/juri/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                router.back()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else {
            console.log('batal selesai');
        }
    }

    const getEvent = () => {
        let event = JSON.parse(localStorage.getItem('event'))
        let event_id = event.id
        axios.get (BASE_URL + `/api/event/${event_id}`)
        .then (res => {
        setEvent (res.data.data)
        })
        .catch (err => {
        console.log(err.response.data.message);
        })
    }

    const handle = useFullScreenHandle ()

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('user') === null) {
         router.push ('/seni/juri/login') 
        }
    }

    const ubah_data = () => socket.emit ('init_data')

    useEffect (() => {
        setPeserta (JSON.parse (localStorage.getItem ('pesertaSeni')))   
        // const socket = socketIo (BASE_URL)
        // socket.connect();
        // socket.emit ('init_data')
        // socket.on ('getData', getNilai)
        // socket.on ('change_data', ubah_data)
        getNilai()
        getEvent ()
        isLogged ()

        return () =>{
            socket.disconnect();
        }
    }, [])
    return (
        <>
            <div className="flex ">

                {/* awal konten utama */}
                <div className="w-full overflow-y-auto h-screen"> 

                    {/* header */}
                    <div className="bg-[#2C2F48] sticky top-0 h-20 z-40 flex">
                        <div className="flex justify-between w-full text-white px-10">
                            <div className="flex space-x-3">
                            <button onClick={handle.enter} className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize">
                                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                                </svg>
                            </button> 
                                <img className='py-3'src={BASE_URL + "/api/event/image/" + event.logo} alt="Kabupaten Trenggalek" />
                            </div>
                            <span className='text-xl font-semibold my-auto uppercase text-center'>{event.nama}</span>
                            <div className="flex space-x-3">
                                <img className='py-3' src={BASE_URL + "/api/event/image/" + event.icon1} alt="IPSI" />
                                <img className='py-3' src={BASE_URL + "/api/event/image/" + event.icon2} alt="IPSI2" />
                            </div>
                        </div>          
                    </div>
                    {/* akhir header */} 
 
                    {/* konten utama */}
                    <FullScreen handle={handle} className="bg-white text-white min-h-full overflow-y-auto">
                        
                        {/* wrapper keseluruhan */}
                        <div className="w-[95%] lg:w-4/5 mx-auto py-10 space-y-5">

                            <div className="grid grid-cols-6 gap-x-2 text-center mb-3 lg:mb-5">
                                <div className="bg-[#222954] rounded-lg">
                                    <h1 className='text-xl font-semibold py-1.5'>PARTAI {jadwal.partai}</h1>
                                </div>
                                <div className="bg-[#222954] rounded-lg col-span-2">
                                    <h1 className='text-xl font-semibold py-1.5'>{jadwal.kelas} {jadwal.jk} {jadwal.golongan}</h1>
                                </div>
                                <div className="bg-[#222954] rounded-lg col-span-2">
                                    <h1 className='text-xl font-semibold py-1.5'>{jadwal.babak}</h1>
                                </div>
                                <div className="bg-[#222954] rounded-lg">
                                    {(() => {
                                        if (dataJuri.username == 'juri1') {
                                            return (
                                                <h1 className='text-xl font-semibold py-1.5'>JURI 1</h1>
                                            )
                                        } else if (dataJuri.username == 'juri2') {
                                            return (
                                                <h1 className='text-xl font-semibold py-1.5'>JURI 2</h1>
                                            )
                                        } else if (dataJuri.username == 'juri3') {
                                            return (
                                                <h1 className='text-xl font-semibold py-1.5'>JURI 3</h1>
                                            )
                                        } else if (dataJuri.username == 'juri4') {
                                            return (
                                                <h1 className='text-xl font-semibold py-1.5'>JURI 4</h1>
                                            )
                                        } else if (dataJuri.username == 'juri5') {
                                            return (
                                                <h1 className='text-xl font-semibold py-1.5'>JURI 5</h1>
                                            )
                                        } else if (dataJuri.username == 'juri6') {
                                            return (
                                                <h1 className='text-xl font-semibold py-1.5'>JURI 6</h1>
                                            )
                                        } else if (dataJuri.username == 'juri7') {
                                            return (
                                                <h1 className='text-xl font-semibold py-1.5'>JURI 7</h1>
                                            )
                                        } else if (dataJuri.username == 'juri8') {
                                            return (
                                                <h1 className='text-xl font-semibold py-1.5'>JURI 8</h1>
                                            )
                                        } else if (dataJuri.username == 'juri9') {
                                            return (
                                                <h1 className='text-xl font-semibold py-1.5'>JURI 9</h1>
                                            )
                                        } else if (dataJuri.username == 'juri10') {
                                            return (
                                                <h1 className='text-xl font-semibold py-1.5'>JURI 10</h1>
                                            )
                                        }
                                    })()}
                                </div>
                            </div>
                            
                            {/* info pesilat */}
                            <div className={jadwal.id_peserta_biru == peserta.id ? "flex flex-row items-center py-2 px-4 bg-blue-600 rounded-lg text-white" : "flex flex-row items-center space-x-3 p-2 bg-red-600 rounded-lg text-white"}>
                                <div className="flex flex-col">
                                    <span className='text-2xl font-bold uppercase'>{peserta.nama1}</span>
                                    <span className='text-lg font-normal'>{peserta.kontingen}</span>
                                </div>
                            </div>

                            {/* border table */}
                            <div className="border-2 border-[#222954] p-5 rounded-lg">
                                {/* wrapper  */}
                                <div className="flex flex-col space-y-4">

                                    {/* Table button Skor */}
                                    <table className='w-full table-fixed'>
                                        <thead className='bg-[#222954] border-2 border-[#222954]'>
                                            <tr>
                                                <th colSpan={2} className="py-3">Krite</th>
                                                <th colSpan={10}>Skor</th>
                                            </tr>
                                        </thead>
                                        {/* Technique */}
                                        <tbody className='text-center border-2 border-[#222954]'>
                                            <tr>
                                                {/* technique */}
                                                <td colSpan={2} rowSpan={3} className="border-r-2 border-[#222954]">
                                                    <div className="flex flex-col text-[#222954]">
                                                        <span className='text-lg lg:text-2xl font-bold uppercase'>Teknik</span>
                                                        <span className='tracking-widest font-medium'>(0,01 - 0,30)</span>
                                                    </div>
                                                </td>
                                                {/* button nilai */}
                                                <td colSpan={10} className="px-3 py-1 space-y-2">
                                                    <div className="grid grid-cols-10 gap-x-2">
                                                        <button onClick={() => technique (0.01)} className={activeT == 0.01 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,01</span>
                                                        </button>
                                                        <button onClick={() => technique (0.02)} className={activeT == 0.02 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,02</span>
                                                        </button>
                                                        <button onClick={() => technique (0.03)} className={activeT == 0.03 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,03</span>
                                                        </button>
                                                        <button onClick={() => technique (0.04)} className={activeT == 0.04 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,04</span>
                                                        </button>
                                                        <button onClick={() => technique (0.05)} className={activeT == 0.05 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,05</span>
                                                        </button>
                                                        <button onClick={() => technique (0.06)} className={activeT == 0.06 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,06</span>
                                                        </button>
                                                        <button onClick={() => technique (0.07)} className={activeT == 0.07 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,07</span>
                                                        </button>
                                                        <button onClick={() => technique (0.08)} className={activeT == 0.08 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,08</span>
                                                        </button>
                                                        <button onClick={() => technique (0.09)} className={activeT == 0.09 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,09</span>
                                                        </button>
                                                        <button onClick={() => technique (0.10)} className={activeT == 0.10 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,10</span>
                                                        </button>
                                                    </div>
                                                    <div className="grid grid-cols-10 gap-x-2">
                                                        <button onClick={() => technique (0.11)} className={activeT == 0.11 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,11</span>
                                                        </button>
                                                        <button onClick={() => technique (0.12)} className={activeT == 0.12 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,11</span>
                                                        </button>
                                                        <button onClick={() => technique (0.13)} className={activeT == 0.13 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,13</span>
                                                        </button>
                                                        <button onClick={() => technique (0.14)} className={activeT == 0.14 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,14</span>
                                                        </button>
                                                        <button onClick={() => technique (0.15)} className={activeT == 0.15 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,15</span>
                                                        </button>
                                                        <button onClick={() => technique (0.16)} className={activeT == 0.16 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,16</span>
                                                        </button>
                                                        <button onClick={() => technique (0.17)} className={activeT == 0.17 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,17</span>
                                                        </button>
                                                        <button onClick={() => technique (0.18)} className={activeT == 0.18 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,18</span>
                                                        </button>
                                                        <button onClick={() => technique (0.19)} className={activeT == 0.19 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,19</span>
                                                        </button>
                                                        <button onClick={() => technique (0.20)} className={activeT == 0.20 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,20</span>
                                                        </button>
                                                    </div>
                                                    <div className="grid grid-cols-10 gap-x-2">
                                                        <button onClick={() => technique (0.21)} className={activeT == 0.21 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,21</span>
                                                        </button>
                                                        <button onClick={() => technique (0.22)} className={activeT == 0.22 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,22</span>
                                                        </button>
                                                        <button onClick={() => technique (0.23)} className={activeT == 0.23 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,23</span>
                                                        </button>
                                                        <button onClick={() => technique (0.24)} className={activeT == 0.24 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,24</span>
                                                        </button>
                                                        <button onClick={() => technique (0.25)} className={activeT == 0.25 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,25</span>
                                                        </button>
                                                        <button onClick={() => technique (0.26)} className={activeT == 0.26 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,26</span>
                                                        </button>
                                                        <button onClick={() => technique (0.27)} className={activeT == 0.27 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,27</span>
                                                        </button>
                                                        <button onClick={() => technique (0.28)} className={activeT == 0.28 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,28</span>
                                                        </button>
                                                        <button onClick={() => technique (0.29)} className={activeT == 0.29 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,29</span>
                                                        </button>
                                                        <button onClick={() => technique (0.30)} className={activeT == 0.30 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,30</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* firmness */}
                                        <tbody className='text-center border-2 border-[#222954]'>
                                            <tr>
                                                {/* firmness */}
                                                <td colSpan={2} rowSpan={3} className="border-r-2 border-[#222954]">
                                                    <div className="flex flex-col text-[#222954]">
                                                        <span className='text-lg lg:text-2xl font-bold uppercase'>Kemantapan</span>
                                                        <span className='tracking-widest font-medium'>(0,01 - 0,30)</span>
                                                    </div>
                                                </td>
                                                {/* button nilai */}
                                                <td colSpan={10} className="px-3 py-1 space-y-2">
                                                    <div className="grid grid-cols-10 gap-x-2">
                                                        <button onClick={() => firmness (0.01)} className={activeF == 0.01 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,01</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.02)} className={activeF == 0.02 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,02</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.03)} className={activeF == 0.03 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,03</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.04)} className={activeF == 0.04 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,04</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.05)} className={activeF == 0.05 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,05</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.06)} className={activeF == 0.06 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,06</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.07)} className={activeF == 0.07 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,07</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.08)} className={activeF == 0.08 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,08</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.09)} className={activeF == 0.09 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,09</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.10)} className={activeF == 0.10 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,10</span>
                                                        </button>
                                                    </div>
                                                    <div className="grid grid-cols-10 gap-x-2">
                                                        <button onClick={() => firmness (0.11)} className={activeF == 0.11 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,11</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.12)} className={activeF == 0.12 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,12</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.13)} className={activeF == 0.13 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,13</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.14)} className={activeF == 0.14 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,14</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.15)} className={activeF == 0.15 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,15</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.16)} className={activeF == 0.16 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,16</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.17)} className={activeF == 0.17 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,17</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.18)} className={activeF == 0.18 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,18</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.19)} className={activeF == 0.19 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,19</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.20)} className={activeF == 0.20 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,20</span>
                                                        </button>
                                                    </div>
                                                    <div className="grid grid-cols-10 gap-x-2">
                                                        <button onClick={() => firmness (0.21)} className={activeF == 0.21 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,21</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.22)} className={activeF == 0.22 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,22</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.23)} className={activeF == 0.23 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,23</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.24)} className={activeF == 0.24 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,24</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.25)} className={activeF == 0.25 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,25</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.26)} className={activeF == 0.26 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,26</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.27)} className={activeF == 0.27 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,27</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.28)} className={activeF == 0.28 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,28</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.29)} className={activeF == 0.29 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,29</span>
                                                        </button>
                                                        <button onClick={() => firmness (0.30)} className={activeF == 0.30 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,30</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* Soulfulness */}
                                        <tbody className='text-center border-2 border-[#222954]'>
                                            <tr>
                                                {/* soulfulness */}
                                                <td colSpan={2} rowSpan={3} className="border-r-2 border-[#222954]">
                                                    <div className="flex flex-col text-[#222954]">
                                                        <span className='text-lg lg:text-2xl font-bold uppercase'>Ekspresi</span>
                                                        <span className='tracking-widest font-medium'>(0,01 - 0,30)</span>
                                                    </div>
                                                </td>
                                                {/* button nilai */}
                                                <td colSpan={10} className="px-3 py-1 space-y-2">
                                                    <div className="grid grid-cols-10 gap-x-2">
                                                        <button onClick={() => soulfulness (0.01)} className={activeS == 0.01 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,01</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.02)} className={activeS == 0.02 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,02</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.03)} className={activeS == 0.03 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,03</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.04)} className={activeS == 0.04 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,04</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.05)} className={activeS == 0.05 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,05</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.06)} className={activeS == 0.06 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,06</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.07)} className={activeS == 0.07 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,07</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.08)} className={activeS == 0.08 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,08</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.09)} className={activeS == 0.09 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,09</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.10)} className={activeS == 0.10 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,10</span>
                                                        </button>
                                                    </div>
                                                    <div className="grid grid-cols-10 gap-x-2">
                                                        <button onClick={() => soulfulness (0.11)} className={activeS == 0.11 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,11</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.12)} className={activeS == 0.12 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,12</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.13)} className={activeS == 0.13 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,13</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.14)} className={activeS == 0.14 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,14</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.15)} className={activeS == 0.15 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,15</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.16)} className={activeS == 0.16 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,16</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.17)} className={activeS == 0.17 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,17</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.18)} className={activeS == 0.18 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,18</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.19)} className={activeS == 0.19 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,19</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.20)} className={activeS == 0.20 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,20</span>
                                                        </button>
                                                    </div>
                                                    <div className="grid grid-cols-10 gap-x-2">
                                                        <button onClick={() => soulfulness (0.21)} className={activeS == 0.21 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,21</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.22)} className={activeS == 0.22 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,22</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.23)} className={activeS == 0.23 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,23</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.24)} className={activeS == 0.24 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,24</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.25)} className={activeS == 0.25 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,25</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.26)} className={activeS == 0.26 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,26</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.27)} className={activeS == 0.27 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,27</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.28)} className={activeS == 0.28 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,28</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.29)} className={activeS == 0.29 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,29</span>
                                                        </button>
                                                        <button onClick={() => soulfulness (0.30)} className={activeS == 0.30 ? "bg-green-500 rounded-lg py-1" : "bg-gray-400 rounded-lg py-1"}>
                                                            <span>0,30</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {/* display score */}
                                    <div className="grid grid-cols-4 gap-x-4">
                                        {/* technique */}
                                        <div className="grid grid-rows-2 text-center ">
                                            <div className="bg-[#222954] py-1 flex justify-center items-center">
                                                <span className='text-xl font-bold upprercase'>Teknik</span>
                                            </div>
                                            <div className="text-[#222954] py-1 text-2xl font-bold border-2 border-[#222954]">{nilai.technique?.toFixed(2)}</div>
                                        </div>
                                        {/* firmness */}
                                        <div className="grid grid-rows-2 text-center ">
                                            <div className="bg-[#222954] py-1 flex justify-center items-center">
                                                <span className='text-xl font-bold upprercase'>Kemantapan</span>
                                            </div>
                                            <div className="text-[#222954] py-1 text-2xl font-bold border-2 border-[#222954]">{nilai.firmness?.toFixed(2)}</div>
                                        </div>
                                        {/* soulfulness */}
                                        <div className="grid grid-rows-2 text-center ">
                                            <div className="bg-[#222954] py-1 flex justify-center items-center">
                                                <span className='text-xl font-bold upprercase'>Ekspresi</span>
                                            </div>
                                            <div className="text-[#222954] py-1 text-2xl font-bold border-2 border-[#222954]">{nilai.soulfulness?.toFixed(2)}</div>
                                        </div>
                                        {/* total */}
                                        <div className="grid grid-rows-2 text-center ">
                                            <div className="bg-[#222954] py-1 flex justify-center items-center">
                                                <span className='text-xl font-bold upprercase'>Total</span>
                                            </div>
                                            <div className="text-[#222954] py-1 text-2xl font-bold border-2 border-[#222954]">{nilai.total?.toFixed(2)}</div>
                                        </div>
                                    </div>

                                    {/* totol score */}
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-10 bg-[#222954] py-2 text-center">
                                            <span className='text-2xl font-bold'>Total Skor</span>
                                        </div>
                                        <div className="col-span-2 border-2 border-[#222954] flex justify-center items-center">
                                            <span className='text-2xl font-bold text-[#222954]'>{nilai.total_skor?.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Selesai */}
                                    <button onClick={() => selesai()} className="bg-yellow-500 text-center text-2xl font-bold py-2 rounded-lg">
                                        <span>Selesai</span>
                                    </button>

                                </div>
                            </div>

                        </div>
                    </FullScreen>
                    <div className="hidden lg:block">
                        <Footer />
                    </div>
                </div>
                {/* akhir konten utama */}
            </div>
        </>

    )
}

export default nilaiSeniSoloKreatif