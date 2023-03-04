import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import axios from 'axios';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Timer from '../components/timer';
import socketIo from 'socket.io-client'
import { globalState } from '../../../context/context'
import { useRouter } from 'next/router';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const socket = socketIo (BASE_URL)

const timer = () => {

    const router = useRouter ()
    const [event, setEvent] = useState ([])

    const [active, setActive] = useState ([])
    const [jadwal, setJadwal] = useState ([])
    const [jadwalBiru, setJadwalBiru] = useState ([])
    const [jadwalMerah, setJadwalMerah] = useState ([])
    const {round, setRound} = useContext(globalState)
    const handle = useFullScreenHandle ()

    const getJadwal = () => {
        const jadwal = localStorage.getItem ('jadwal')
        const babak = localStorage.getItem ('babak')
        let id_jadwal = jadwal

        axios.get (BASE_URL + `/api/tanding/${id_jadwal}`)
        .then (res => {
            setJadwal (res.data.data)
            setJadwalBiru (res.data.data.biru)
            setJadwalMerah (res.data.data.merah)
        })
    }

    const setBabak = (e) => {
        const jadwal = localStorage.getItem ('jadwal')
        if (e == 'babak1') {
            if (confirm('Anda yakin memulai babak 1?') == 1) {
                let form = {
                    id_jadwal : jadwal
                }
                axios.post (BASE_URL + `/api/nilai/tanding/babak1`, form)
                .then (res => {
                    console.log(res.data.message);
                    setActive (e)
                    localStorage.setItem ('babak', 'I')
                    setRound("I")
                    socket.emit ('naikBabak')
                })
                .catch (err => {
                    console.log(err.response.data.message);
                })
            } else {
                console.log('batal selesai');
            }
        } else if (e == 'babak2') {
            if (confirm('Anda yakin memulai babak 2?') == 1) {
                // console.log('berhasil');
                let form = {
                    id_jadwal : jadwal
                }
                axios.post (BASE_URL + `/api/nilai/tanding/babak2`, form)
                .then (res => {
                    console.log(res.data.message);
                    setActive (e)
                    localStorage.setItem ('babak', 'II')
                    setRound("II")
                    socket.emit ('naikBabak')
                })
                .catch (err => {
                    console.log(err.response.data.message);
                })
            } else {
                console.log('batal selesai');
            }
        } else if (e == 'babak3') {
            if (confirm('Anda yakin memulai babak 3?') == 1) {
                // console.log('berhasil');
                let form = {
                    id_jadwal : jadwal
                }
                axios.post (BASE_URL + `/api/nilai/tanding/babak3`, form)
                .then (res => {
                    console.log(res.data.message);
                    setActive (e)
                    localStorage.setItem ('babak', 'III')
                    setRound("III")
                    socket.emit ('naikBabak')
                })
                .catch (err => {
                    console.log(err.response.data.message);
                })
            } else {
                console.log('batal selesai');
            }
        }
    }
    
    const getEvent = () => {
        axios.get (BASE_URL + `/api/event`)
        .then (res => {
        setEvent (res.data.data)
        })
        .catch (err => {
        console.log(err.response.data.message);
        })
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('timerTanding') === null) {
            router.push ('/tanding/timer/login')
        }
    }
    
    const ubah_data = () => socket.emit ('init_tanding_nilai')

    useEffect (() => {
        socket.emit ('init_nilai_tanding')
        socket.on ('getNilaiTanding', getJadwal)
        socket.on ('change_nilai_tanding', ubah_data)
        getEvent ()
        isLogged ()

        return () => {
            socket.off('getNilaiTanding')
            socket.off('change_nilai_tanding')
        }
    }, [])

    return (
        <>
        <div className="flex ">

            {/* awal konten utama */}
            <div className="w-full overflow-y-auto h-screen"> 
            
                {/* header */}
                <div className="bg-[#2C2F48] sticky top-0 h-20 z-40 flex">
                    {event.map((item, index) => (
                        <div key={index + 1} className="flex justify-between w-full text-white px-10">
                        <div className="flex space-x-3">
                            <button onClick={handle.enter} className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                            </svg>
                            </button> 
                            <img className='py-3'src={BASE_URL + "/api/event/image/" + item.logo} alt="Kabupaten Trenggalek" />
                        </div>
                        <span className='text-xl font-semibold my-auto uppercase text-center'>{item.nama}</span>
                        <div className="flex space-x-3">
                            <img className='py-3' src={BASE_URL + "/api/event/image/" + item.icon1} alt="IPSI" />
                            <img className='py-3' src={BASE_URL + "/api/event/image/" + item.icon2} alt="IPSI2" />
                        </div>
                        </div>          
                    ))}
                </div>
                {/* akhir header */}

                {/* konten utama */}
                <FullScreen handle={handle} className="bg-white text-white min-h-full overflow-y-auto">
                    {/* wrapper keseluruhan */}
                    <div className="w-11/12 mx-auto py-10">

                        {/* wrapper pertandingan information and button back */}
                        <div className="grid grid-cols-12 gap-x-5 mb-5">
                            {/* button back */}
                            <button onClick={() => router.back()} className='bg-red-500 rounded-xl col-span-1 flex items-center justify-center'>
                                <img className='w-10' src="/svg/back.svg" alt="" />
                            </button>
                            {/* pertandingan information */}
                            <div className="col-span-11 flex flex-row justify-center items-center space-x-5 bg-[#222954] py-4 rounded-lg text-2xl font-bold">
                                <h1>PARTAI {jadwal.partai}</h1>
                                <h1>-</h1>
                                <h1>{jadwal.kelas} {jadwal.jk} {jadwal.golongan}</h1>
                                <h1>-</h1>
                                <h1>{jadwal.babak}</h1>
                            </div>
                        </div>

                        {/* wrapper perserta information */}
                        <div className="grid grid-cols-2 mb-10">
                            {/* pesilat information merah */}
                            <div className="bg-blue-600 rounded-l-lg py-2 px-5 border-2 border-[#222954]">
                                <h1 className='text-lg font-bold'>{jadwalBiru.nama}<br></br>{jadwalBiru.kontingen}</h1>
                            </div>
                            {/* pesilat information merah */}
                            <div className="bg-red-600 rounded-r-lg py-2 px-5 border-2 border-[#222954]">
                                <h1 className='text-lg font-bold text-end'>{jadwalMerah.nama}<br></br>{jadwalMerah.kontingen}</h1>
                            </div>
                        </div>
                        {/* wrapper timer */}
                        <div className="bg-[#222954] rounded-lg text-center mb-4">
                            <h1 className='text-2xl font-bold py-3'>WAKTU</h1>
                        </div>
                        {/* wrapper button start and pause */}
                            {!round ?
                                null:
                                <Timer id_jadwal={jadwal.id} golongan={jadwal.golongan} babak={round}/> 
                            }
                        {/* babak */}
                        <div className="bg-[#222954] rounded-lg text-center mb-4">
                            <h1 className='text-2xl font-bold py-2'>BABAK</h1>
                        </div>
                        {/* wrapper button babak */}
                        <div className="grid grid-cols-3 gap-x-10 text-[#222954]">
                            <button onClick={() => setBabak ('babak1')} className={active === 'babak1' ? "bg-yellow-300 rounded-lg px-5 py-8 text-center" : "border-4 border-yellow-300 rounded-lg px-5 py-8 text-center"}>
                                <h1 className='text-4xl font-bold uppercase'>babak I</h1>
                            </button>
                            <button onClick={() => setBabak ('babak2')} className={active === 'babak2' ? "bg-yellow-300 rounded-lg px-5 py-8 text-center" : "border-4 border-yellow-300 rounded-lg px-5 py-8 text-center"}>
                                <h1 className='text-4xl font-bold uppercase'>babak II</h1>
                            </button>
                            <button onClick={() => setBabak ('babak3')} className={active === 'babak3' ? "bg-yellow-300 rounded-lg px-5 py-8 text-center" : "border-4 border-yellow-300 rounded-lg px-5 py-8 text-center"}>
                                <h1 className='text-4xl font-bold uppercase'>babak III</h1>
                            </button>
                        </div>
                    
                    </div>
                </FullScreen>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>
        </>

    )
}

export default timer