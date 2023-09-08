import React, { useEffect, useState } from 'react'
import socketIo from 'socket.io-client'
import axios from 'axios';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// socket io
const socket = socketIo.connect(BASE_URL)

const nilaiSeniRegu = () => {
    
    const router = useRouter ()
    const [event, setEvent] = useState ([])
    
    // state untuk ambil data dari local storage
    const [peserta, setPeserta] = useState ([])
    const [jadwal, setJadwal] = useState ([])
    const [dataJuri, setDataJuri] = useState ([])

    // ini state
    const [nilai,setNilai] = useState ([])
    const [count, setCount] = useState (0)
    const [jurus, setJurus] = useState (`${count}`)
    const [active, setActive] = useState (0)

    const getNilai = () => {
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse (localStorage.getItem ('jadwalSeni'))
        const juri = JSON.parse (localStorage.getItem ('user'))

        setJadwal (jadwal)
        setDataJuri (juri)
        setPeserta (peserta)
        console.log(peserta);
        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let id_juri = juri.id

        axios.get (BASE_URL + `/api/nilai/regu/juri/${id_jadwal}/${id_peserta}/${id_juri}`)
        .then (res => {
            setNilai (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const naikJurus = () => {
        setCount (count + 1)
        localStorage.setItem ('jurus', (count + 1))
        setJurus (localStorage.getItem ('jurus'))
    }

    const kurangNilai = () => {
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse(localStorage.getItem ('jadwalSeni'))
        const juri = JSON.parse (localStorage.getItem ('user'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let id_juri = juri.id
        
        if (count == 1) {
            let jurus1 = 0
                jurus1 = nilai.jurus1

            let form = {
                jurus1 : jurus1 + (-0.01)
            }

            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 2) {
            let jurus2 = 0
                jurus2 = nilai.jurus2

            let form = {
                jurus2 : jurus2 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 3) {
            let jurus3 = 0
                jurus3 = nilai.jurus3

            let form = {
                jurus3 : jurus3 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 4) {
            let jurus4 = 0
                jurus4 = nilai.jurus4

            let form = {
                jurus4 : jurus4 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 5) {
            let jurus5 = 0
                jurus5 = nilai.jurus5

            let form = {
                jurus5 : jurus5 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 6) {
            let jurus6 = 0
                jurus6 = nilai.jurus6
            
            let form = {
                jurus6 : jurus6 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 7) {
            let jurus7 = 0
                jurus7 = nilai.jurus7

            let form = {
                jurus7 : jurus7 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 8) {
            let jurus8 = 0
                jurus8 = nilai.jurus8
            
            let form = {
                jurus8 : jurus8 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 9) {
            let jurus9 = 0
                jurus9 = nilai.jurus9

            let form = {
                jurus9 : jurus9 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 10) {
            let jurus10 = 0
                jurus10 = nilai.jurus10

            let form = {
                jurus10 : jurus10 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 11) {
            let jurus11 = 0
                jurus11 = nilai.jurus11

            let form = {
                jurus11 : jurus11 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 12) {
            let jurus12 = 0
                jurus12 = nilai.jurus12

            let form = {
                jurus12 : jurus12 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/nilai/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('juriToDewanLayar', id_jadwal)
                getNilai()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else {
            console.log('gagal');
        }
    }

    const skorB = (b) => {
        setActive(b)
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse(localStorage.getItem ('jadwalSeni'))
        const juri = JSON.parse (localStorage.getItem ('user'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let id_juri = juri.id

        let form = {
            skor_b : b
        }

        axios.put (BASE_URL + `/api/nilai/regu/juri/${id_jadwal}/${id_peserta}/${id_juri}`, form)
        .then (res => {
            socket.emit ('juriToDewanLayar', id_jadwal)
            getNilai()
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const selesai = () => {
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse(localStorage.getItem ('jadwalSeni'))
        const juri = JSON.parse(localStorage.getItem ('user'))
        const nama = (localStorage.getItem ('nama'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let id_juri = juri.id
        let nama_juri= nama

        localStorage.removeItem("jurus");

        let form = {
            nama_juri : nama_juri
        }

        if (confirm ('Anda yakin mengakhiri pertandingan?') == 1) {
            axios.put (BASE_URL + `/api/nilai/regu/juri/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (
                router.back()
            )
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

    const cekJurus = () =>{
        if (localStorage.getItem('jurus')) {
            setCount (localStorage.getItem ('jurus'))
            // console.log(localStorage.getItem ('jurus'));
            // localStorage.setItem ('jurus', (count + 1))
            setCount (count + 1)
            setJurus (localStorage.getItem ('jurus'))
        }else {
            console.log("jurus kosong");                
        }
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
        // localStorage.setIte  m ('jurus', (count))
        const socket = socketIo (BASE_URL)
        socket.connect();
        // socket.emit ('init_data')
        // socket.on ('getData', getNilai)
        // socket.on ('change_data', ubah_data)
        getNilai()
        getEvent ()
        isLogged ()
        cekJurus()

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
                                    <span className='text-2xl font-bold'>{peserta.nama1} - {peserta.nama2} - {peserta.nama3}</span>
                                    <span className='text-lg font-normal'>{peserta.kontingen}</span>
                                </div>
                            </div>

                            {/* border table */}
                            <div className="border-2 border-[#222954] p-5 space-y-4 rounded-lg">
                                {/* wrapper */}
                                <div className="grid grid-row-3 gap-y-4">

                                    {/* skor A */}
                                    <div className="grid grid-row-3">
                                        {/* title */}
                                        <div className="bg-[#2C2F48] rounded-lg py-2 text-center">
                                            <span className='text-xl font-bold uppercase'>skor a</span>
                                        </div>
                                        {/* urutan jurus */}
                                        <div className="border-2 border-[#2C2F48] rounded-lg py-2 text-center">
                                            <span className='text-xl font-bold uppercase text-[#2C2F48]'>jurus {count}</span>
                                        </div>
                                        {/* wrapper penilaian jurus */}
                                        <div className="grid grid-cols-12 border-2 border-[#2C2F48] rounded-lg text-center">
                                            {/* pengurangan nilai */}
                                            <div className="col-span-2 border-r-2 border-[#2C2F48] p-2 flex justify-center items-center">
                                                <button onClick={() => kurangNilai()} className="bg-[#39ac39] hover:bg-[#2f912f] rounded-lg py-5 h-full w-full flex justify-center items-center">
                                                    <span className='text-5xl font-bold'>- 0,01</span>
                                                </button>
                                            </div>
                                            {/* deskripsi jurus */}
                                            <div className="col-span-8 p-2">
                                                <div className="text-[#2C2F48] rounded-lg flex flex-col font-semibold py-2">
                                                    <span>Kesalahan dalam urutan gerakan</span>
                                                    <span>Kesalahan dalam teknik</span>
                                                    <span>Gerakan yang hilang</span>
                                                    <span>Senjata terlepas dari dari tangan, tetapi tidak menyentuh matras</span>
                                                </div>
                                            </div>
                                            {/* jurus berikutnya */}
                                            <div className="col-span-2 border-l-2 border-[#2C2F48] p-2 flex justify-center items-center">
                                                {(() => {
                                                    if (count >= 12) {
                                                        return (
                                                            <button disabled onClick={() => kurangNilai()} className="bg-[#39ac39] hover:bg-[#2f912f] rounded-lg py-5 h-full w-full flex justify-center items-center">
                                                                <span className='text-xl font-bold'>Naik Jurus </span>
                                                            </button>
                                                        )
                                                    } else if (count < 12) {
                                                        return (
                                                            <button onClick={() => naikJurus()} className="bg-[#39ac39] hover:bg-[#2f912f] rounded-lg py-5 h-full w-full flex justify-center items-center">
                                                                <span className='text-xl font-bold'>Naik Jurus</span>
                                                            </button>
                                                        )
                                                    }
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-row-3 gap-y-2">
                                        {/* akurasi skor A */}
                                        <div className="grid grid-cols-12 gap-x-2">
                                            <div className="col-span-10 bg-[#2C2F48] rounded-lg text-center py-2">
                                                <span className='text-xl font-bold'>Total Skor A</span>
                                            </div>
                                            <div className="col-span-2 border-2 border-[#2C2F48] rounded-lg text-center flex items-center justify-center">
                                                <span className='text-xl font-bold text-[#2C2F48]'>{nilai.skor_a?.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        {/* skor B */}
                                        <div className="grid grid-cols-12 gap-x-2">
                                            <div className="col-span-10 grid grid-rows-2 rounded-lg text-center border-2 border-[#2C2F48]">
                                                <div className="bg-[#2C2F48] flex justify-center items-center">
                                                    <span className='text-xl font-bold'>Stamina dan Kemantapan</span>
                                                </div>
                                                {/* button nilai */}
                                                <div className="grid grid-cols-10 gap-x-2 p-2">
                                                    <button className={active == 0.01 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.01)}>
                                                        0,01
                                                    </button>
                                                    <button className={active == 0.02 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.02)}>
                                                        0,02
                                                    </button>
                                                    <button className={active == 0.03 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.03)}>
                                                        0,03
                                                    </button>
                                                    <button className={active == 0.04 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.04)}>
                                                        0,04
                                                    </button>
                                                    <button className={active == 0.05 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.05)}>
                                                        0,05
                                                    </button>
                                                    <button className={active == 0.06 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.06)}>
                                                        0,06
                                                    </button>
                                                    <button className={active == 0.07 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.07)}>
                                                        0,07
                                                    </button>
                                                    <button className={active == 0.08 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.08)}>
                                                        0,08
                                                    </button>
                                                    <button className={active == 0.09 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.09)}>
                                                        0,09
                                                    </button>
                                                    <button className={active == 0.10 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.10)}>
                                                        0,10
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-span-2 border-2 border-[#2C2F48] rounded-lg text-center flex items-center justify-center">
                                                <span className='text-xl font-bold text-[#2C2F48]'>{nilai.skor_b?.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        {/* Total Skor */}
                                        <div className="grid grid-cols-12 gap-x-2">
                                            <div className="col-span-10 bg-[#2C2F48] rounded-lg text-center py-2">
                                                <span className='text-xl font-bold'>Total Skor</span>
                                            </div>
                                            <div className="col-span-2 border-2 border-[#2C2F48] rounded-lg text-center flex items-center justify-center bg-[#2C2F48]">
                                                <span className='text-xl font-bold'>{nilai.total_skor?.toFixed (2)}</span>
                                            </div>
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

export default nilaiSeniRegu