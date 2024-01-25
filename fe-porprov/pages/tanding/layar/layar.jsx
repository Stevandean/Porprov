import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from '../../component/navbar/navbar'
import Footer from '../components/footer'
import TimerLayar from '../components/timerLayar'
import ModalLayar from '../components/modalLayar'
import { globalState } from '../../../context/context';
import socketIo from 'socket.io-client'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const socket = socketIo (BASE_URL)

const layar = () => {

    const router = useRouter()

    // ini state
    const {showModalLayar, setShowModalLayar} = useContext (globalState)
    const {infoVerif, setInfoVerif} = useContext (globalState)
    const [jadwal, setJadwal] = useState ([])

    const [jadwalTanding, setJadwalTanding] = useState ([])
    const [nilaiTanding, setNilaiTanding] = useState ([])
    const [totalPoin, setTotalPoin] = useState ([])
    const [visiblePmj1, setVisiblePmj1] = useState (false)
    const [visiblePmj2, setVisiblePmj2] = useState (false)
    const [visiblePmj3, setVisiblePmj3] = useState (false)
    const [visiblePbj1, setVisiblePbj1] = useState (false)
    const [visiblePbj2, setVisiblePbj2] = useState (false)
    const [visiblePbj3, setVisiblePbj3] = useState (false)
    const [visibleTmj1, setVisibleTmj1] = useState (false)
    const [visibleTmj2, setVisibleTmj2] = useState (false)
    const [visibleTmj3, setVisibleTmj3] = useState (false)
    const [visibleTbj1, setVisibleTbj1] = useState (false)
    const [visibleTbj2, setVisibleTbj2] = useState (false)
    const [visibleTbj3, setVisibleTbj3] = useState (false)
    const [peringatanBiru, setPeringatanBiru] = useState([])
    const [peringatanMerah, setPeringatanMerah] = useState([])


    // pukulan merah
    const onLightPmj1 = () => {
        
        setVisiblePmj1 (true)

        setTimeout (() => {
            setVisiblePmj1 (false)
        }, 3000)
    }
    const onLightPmj2 = () => {

        setVisiblePmj2 (true)

        setTimeout (() => {
            setVisiblePmj2 (false)
        }, 3000)
    }
    const onLightPmj3 = () => {

        setVisiblePmj3 (true)

        setTimeout (() => {
            setVisiblePmj3 (false)
        }, 3000)
    }

    // pukulan biru
    const onLightPbj1 = () => {
        
        setVisiblePbj1 (true)

        setTimeout (() => {
            setVisiblePbj1 (false)
        }, 3000)
    }
    const onLightPbj2 = () => {

        setVisiblePbj2 (true)

        setTimeout (() => {
            setVisiblePbj2 (false)
        }, 3000)
    }
    const onLightPbj3 = () => {

        setVisiblePbj3 (true)

        setTimeout (() => {
            setVisiblePbj3 (false)
        }, 3000)
    }

    // pukulan merah
    const onLightTmj1 = () => {
        
        setVisibleTmj1 (true)

        setTimeout (() => {
            setVisibleTmj1 (false)
        }, 3000)
    }
    const onLightTmj2 = () => {

        setVisibleTmj2 (true)

        setTimeout (() => {
            setVisibleTmj2 (false)
        }, 3000)
    }
    const onLightTmj3 = () => {

        setVisibleTmj3 (true)

        setTimeout (() => {
            setVisibleTmj3 (false)
        }, 3000)
    }

    // pukulan biru
    const onLightTbj1 = () => {
        
        setVisibleTbj1 (true)

        setTimeout (() => {
            setVisibleTbj1 (false)
        }, 3000)
    }
    const onLightTbj2 = () => {

        setVisibleTbj2 (true)

        setTimeout (() => {
            setVisibleTbj2 (false)
        }, 3000)
    }
    const onLightTbj3 = () => {

        setVisibleTbj3 (true)

        setTimeout (() => {
            setVisibleTbj3 (false)
        }, 3000)
    }

    const getJadwalTanding = () => {
        const jadwal = JSON.parse(localStorage.getItem ('jadwalTanding'))

        setJadwalTanding (jadwal)
    }

    const getNilaiTanding = async () => {
        const jadwal = JSON.parse(localStorage.getItem ('jadwalTanding'))

        await axios.get (BASE_URL + `/api/nilai/tanding/layar/` + jadwal.id)
        .then (res => {
            setNilaiTanding (res.data.data)
            console.log(res.data.data);
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        await axios.get (BASE_URL + `/api/tanding/peringatan/sudut/merah/` + jadwal.id)
        .then (res => {
            setPeringatanMerah (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        await axios.get (BASE_URL + `/api/tanding/peringatan/sudut/biru/` + jadwal.id)
        .then (res => {
            setPeringatanBiru (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getTotalPoin = () =>{
        const jadwal = JSON.parse(localStorage.getItem ('jadwalTanding'))

        axios.get (BASE_URL + `/api/tanding/jadwal/poin/` + jadwal.id)
        .then (res => {
            setTotalPoin (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
        // console.log(BASE_URL + `/api/tanding/poin/` + jadwal.id)
    }

    const showModal = () => {
        setShowModalLayar(true)
    }

    const cekVerif = async () => {
        let info = []
        const jadwal = JSON.parse(localStorage.getItem ('jadwalTanding'))
        let id_jadwal = jadwal.id
        await axios.get(BASE_URL + `/api/tanding/verif/${id_jadwal}`)
        .then (res => {
            console.log(res.data.data);
            info = res.data.data
            setInfoVerif(info.poin)
            // console.log(info.show);
            if(info == null){
                console.log('verif null');
            } else if (info != null){
                if(info.show == true){
                    setShowModalLayar(true)
                } else if (info.show === false){
                    setShowModalLayar(false)
                }
            }
        }).catch(err => {
            console.log(err.message);
        })
    }

    const closeModal = () =>{
        setShowModalLayar(false)
    }

    const refreshLayar = () =>{
        window.location.reload(false);
    }

    const ubah_data = () => socket.emit ('init_juri_tanding', localStorage.getItem ('jadwal'))

    useEffect (() => {
        const jadwal = JSON.parse(localStorage.getItem ('jadwalTanding'))
        socket.emit('join', jadwal.id)

        socket.on('naikBabak', refreshLayar)

        //socket modal verif
        socket.on('open_verif', cekVerif)
        socket.on('close_verif', closeModal)

        //socket nilai
        socket.emit('init_juri_tanding')
        socket.on("getJuri", getTotalPoin)
        // socket.on("getJuri", getNilaiTanding)

        socket.on("refreshLayar", getTotalPoin)
        socket.on("refreshLayar", getNilaiTanding)

        socket.on('change_nilai_juri', ubah_data)

        // socket indicator juri pukulan merah
        socket.on ('pmj1On', onLightPmj1)
        socket.on ('pmj2On', onLightPmj2)
        socket.on ('pmj3On', onLightPmj3)

        // socket indicator juri pukulan biru
        socket.on ('pbj1On', onLightPbj1)
        socket.on ('pbj2On', onLightPbj2)
        socket.on ('pbj3On', onLightPbj3)

        // socket indicator juri tendangan merah
        socket.on ('tmj1On', onLightTmj1)
        socket.on ('tmj2On', onLightTmj2)
        socket.on ('tmj3On', onLightTmj3)

        // socket indicator juri tendangan biru
        socket.on ('tbj1On', onLightTbj1)
        socket.on ('tbj2On', onLightTbj2)
        socket.on ('tbj3On', onLightTbj3)

        getTotalPoin()
        getJadwalTanding ()
        getNilaiTanding ()

        return () =>{
            socket.emit('leave', jadwal)
        }
    }, [])

    return (
        <>
            <div className="flex ">

                {/* awal konten utama */}
                <div className="w-full overflow-y-auto h-screen"> 
                
                    {/* header */}
                    <Navbar />
                    {/* akhir header */}

                    {/* konten utama */}
                    <div className="bg-white text-white min-h-full">
                        {/* wrapper keseluruhan */}
                        <div className="w-11/12 mx-auto py-10">

                            {/* wrapper pertandingan information and button back */}
                            <div className="grid grid-cols-12 gap-x-5 mb-5">
                                {/* button back */}
                                <button onClick={() => router.back ()} className='bg-red-500 rounded-xl col-span-1 flex items-center justify-center'>
                                    <img className='w-10' src="/svg/back.svg" alt="" />
                                </button>
                                {/* pertandingan information */}
                                <div className="col-span-11 flex flex-row justify-center items-center space-x-5 bg-[#222954] py-4 rounded-lg text-4xl font-bold">
                                    <h1>PARTAI {jadwalTanding.partai}</h1>
                                    <h1>-</h1>
                                    <h1>{jadwalTanding.kelas} {jadwalTanding.jk} {jadwalTanding.golongan}</h1>
                                    <h1>-</h1>
                                    <h1>{jadwalTanding.babak}</h1>
                                </div>
                            </div>
                            
                            {/* wrapper perserta information */}
                            <div className="grid grid-cols-3 gap-x-3 mb-8">
                                {/* pesilat biru information */}
                                <div className="flex justify-start items-center bg-blue-600 rounded-lg py-2 px-5">
                                    <h1 className='text-2xl font-bold'>{jadwalTanding.biru?.nama}<br></br>{jadwalTanding.biru?.kontingen}</h1>
                                </div>
                                {/* timer */}
                                <div className="text-[#222954] border-4 border-[#222954] rounded-lg flex justify-center items-center py-3">
                                    {(() => {
                                        if (nilaiTanding.length == 1) {
                                            if (jadwalTanding.id ) {
                                                return (
                                                    <TimerLayar id_jadwal={jadwalTanding.id} golongan={jadwalTanding.golongan} babak={'I'} />
                                                )
                                            }
                                        } else if (nilaiTanding.length == 2) {
                                                if (jadwalTanding.id) {
                                                return (
                                                    <TimerLayar id_jadwal={jadwalTanding.id} golongan={jadwalTanding.golongan} babak={'II'} />
                                                )
                                            }
                                        } else if (nilaiTanding.length == 3) {
                                            if (jadwalTanding.id) {
                                                return (
                                                    <TimerLayar id_jadwal={jadwalTanding.id} golongan={jadwalTanding.golongan} babak={'III'} />
                                                )
                                            }
                                        } else {
                                            console.log('gagal');
                                        }
                                    })()}
                                </div>
                                {/* pesilat merah information */}
                                <div className="flex justify-end items-center bg-red-600 rounded-lg py-2 px-5 text-end">
                                    <h1 className='text-2xl font-bold'>{jadwalTanding.merah?.nama}<br></br>{jadwalTanding.merah?.kontingen}</h1>
                                </div>
                            </div>

                            {/* wrapper hukuman and babak */}
                            <div className="grid grid-cols-11 gap-x-5 border-2 border-[#222954] p-4 rounded-lg mb-5">
                                {/* hukuman and babak biru */}
                                <div className="col-span-5 grid grid-cols-5 gap-x-3">
                                    {/* wrapper hukuman and total score */}
                                    <div className="grid grid-rows-3 gap-y-3 col-span-2">
                                        {/* binaan */}
                                        <div className="flex flex-rows justify-around gap-x-3">
                                            {(() => {
                                                if (nilaiTanding.length == 1) {
                                                    if (nilaiTanding[0].nilai_biru?.log_binaan[0]?.poin == '1x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[0].nilai_biru?.log_binaan[0]?.poin == '2x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                        </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 2) {
                                                    if (nilaiTanding[1].nilai_biru?.log_binaan[0]?.poin == '1x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[1].nilai_biru?.log_binaan[0]?.poin == '2x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                        </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 3) {
                                                    if (nilaiTanding[2].nilai_biru?.log_binaan[0]?.poin == '1x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[2].nilai_biru?.log_binaan[0]?.poin == '2x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                        </>
                                                        )
                                                    }
                                                }
                                            })()}
                                        </div>
                                        {/* teguran */}
                                        <div className="flex flex-rows justify-around gap-x-3">
                                            {(() => {
                                                if (nilaiTanding.length == 1) {
                                                    if (nilaiTanding[0].nilai_biru?.log_teguran.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[0].nilai_biru?.log_teguran.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 2) {
                                                    if (nilaiTanding[1].nilai_biru?.log_teguran.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[1].nilai_biru?.log_teguran.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 3) {
                                                    if (nilaiTanding[2].nilai_biru?.log_teguran.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[2].nilai_biru?.log_teguran.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                }
                                            })()}
                                        </div>
                                        {/* peringatan */}
                                        <div className="flex flex-rows justify-around gap-x-3">
                                            {(() => {
                                                if (nilaiTanding.length == 1) {
                                                    if (peringatanBiru.length === 3) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    if (peringatanBiru.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (peringatanBiru.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 2) {
                                                    if (peringatanBiru.length === true) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    if (peringatanBiru.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (peringatanBiru.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (peringatanBiru.length == 3) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 3) {
                                                    if (peringatanBiru.length == 3) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    if (peringatanBiru.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (peringatanBiru.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (peringatanBiru.length == 3) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                }
                                            })()}
                                        </div>
                                        {/* jatuhan */}
                                        <div className='gap-x-3 border-2 border-black rounded-lg py-1'>
                                            {(() => {
                                                if (nilaiTanding.length == 1) {
                                                    return (
                                                        <h1 className='text-black font-montserrat text-center text-2xl font-bold'>JATUHAN: {nilaiTanding[0]?.nilai_biru?.log_jatuhan.length}x</h1>
                                                    )
                                                } else if (nilaiTanding.length == 2) {
                                                    return (
                                                        <h1 className='text-black font-montserrat text-center text-2xl font-bold'>JATUHAN: {(nilaiTanding[0]?.nilai_biru?.log_jatuhan.length)+(nilaiTanding[1]?.nilai_biru?.log_jatuhan.length)}x</h1>
                                                    )
                                                } else if (nilaiTanding.length == 3) {
                                                    return (
                                                        <h1 className='text-black font-montserrat text-center text-2xl font-bold'>JATUHAN: {(nilaiTanding[0]?.nilai_biru?.log_jatuhan.length)+(nilaiTanding[1]?.nilai_biru?.log_jatuhan.length)+(nilaiTanding[2]?.nilai_biru?.log_jatuhan.length)}x</h1>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    </div>
                                    {/* wrapper score biru */}
                                    <div className="bg-gradient-to-b from-[#0029FF] to-[#001479] rounded-lg flex justify-center items-center col-span-3">
                                        {(() => {
                                            if (nilaiTanding.length == 1) {
                                                return (
                                                    <h1 className='text-[170px] font-bold h-full p-0 m-0 inline-block'>{totalPoin.total_biru}</h1>
                                                )
                                            } else if (nilaiTanding.length == 2) {
                                                return (
                                                    <h1 className='text-[170px] font-bold'>{totalPoin.total_biru}</h1> 
                                                )
                                            } else if (nilaiTanding.length == 3) {
                                                return (
                                                    <h1 className='text-[170px] font-bold'>{totalPoin.total_biru}</h1>
                                                )
                                            }
                                        })()}
                                    </div>

                                </div>
                                {/* wrapper babak indicator */}
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-black text-3xl font-bold uppercase mb-2">babak</h1>
                                    {/* babak indicator */}
                                    <div className="w-full space-y-1">
                                        <div className={nilaiTanding.length == 1 ? "bg-green-600 rounded-lg text-center py-2 w-full" : "border-2 border-green-600 text-green-600 rounded-lg text-center py-2 w-full"}>
                                            <h1 className='text-2xl font-semibold'>I</h1>
                                        </div>
                                        <div className={nilaiTanding.length == 2 ? "bg-green-600 rounded-lg text-center py-2 w-full" : "border-2 border-green-600 text-green-600 rounded-lg text-center py-2 w-full"}>
                                            <h1 className='text-2xl font-semibold'>II</h1>
                                        </div>
                                        <div className={nilaiTanding.length == 3 ? "bg-green-600 rounded-lg text-center py-2 w-full" : "border-2 border-green-600 text-green-600 rounded-lg text-center py-2 w-full"}>
                                            <h1 className='text-2xl font-semibold'>III</h1>
                                        </div>
                                    </div>
                                </div>
                                {/* hukuman and babak merah */}
                                <div className="col-span-5 grid grid-cols-3 gap-x-3">
                                    {/* wrapper score biru */}
                                    <div className="bg-gradient-to-b from-[#FF0000] to-[#7a0000] rounded-lg flex justify-center items-center col-span-2">
                                        {(() => {
                                            if (nilaiTanding.length == 1) {
                                                return (
                                                    <h1 className='text-[170px] font-bold'>{totalPoin.total_merah}</h1>
                                                )
                                            } else if (nilaiTanding.length == 2) {
                                                return (
                                                    <h1 className='text-[170px] font-bold'>{totalPoin.total_merah}</h1>
                                                )
                                            } else if (nilaiTanding.length == 3) {
                                                return (
                                                    <h1 className='text-[170px] font-bold'>{totalPoin.total_merah}</h1>
                                                )
                                            }
                                        })()}
                                    </div>
                                    {/* wrapper hukuman and total score */}
                                    <div className="grid grid-rows-3 gap-y-3">
                                        {/* binaan */}
                                        <div className="flex flex-rows justify-around gap-x-3">
                                            {(() => {
                                                if (nilaiTanding.length == 1) {
                                                    if (nilaiTanding[0].nilai_merah?.log_binaan[0]?.poin == '1x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[0].nilai_merah?.log_binaan[0]?.poin == '2x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                        </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 2) {
                                                    if (nilaiTanding[1].nilai_merah?.log_binaan[0]?.poin == '1x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[1].nilai_merah?.log_binaan[0]?.poin == '2x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                        </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 3) {
                                                    if (nilaiTanding[2].nilai_merah?.log_binaan[0]?.poin == '1x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[2].nilai_merah?.log_binaan[0]?.poin == '2x') {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan1.png" alt="" />
                                                                </div>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-12' src="/images/binaan2.png" alt="" />
                                                                </div>
                                                        </>
                                                        )
                                                    }
                                                }
                                            })()}
                                        </div>
                                        {/* teguran */}
                                        <div className="flex flex-rows justify-around gap-x-3">
                                            {(() => {
                                                if (nilaiTanding.length == 1) {
                                                    if (nilaiTanding[0].nilai_merah?.log_teguran.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[0].nilai_merah?.log_teguran.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 2) {
                                                    if (nilaiTanding[1].nilai_merah?.log_teguran.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[1].nilai_merah?.log_teguran.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 3) {
                                                    if (nilaiTanding[2].nilai_merah?.log_teguran.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[2].nilai_merah?.log_teguran.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran1.png" alt="" />
                                                                </div>
                                                                    
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/teguran2.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                }
                                            })()}
                                        </div>
                                        {/* peringatan */}
                                        <div className="flex flex-rows justify-around gap-x-3">
                                            {(() => {
                                                if (nilaiTanding.length == 1) {
                                                    if (peringatanMerah.length === 3) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                            
                                                        )
                                                    }
                                                    if (peringatanMerah.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (peringatanMerah.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 2) {
                                                    if (peringatanMerah.length === 3) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    if (peringatanMerah.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (peringatanMerah.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (nilaiTanding[1].nilai_merah?.dis == true) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                } else if (nilaiTanding.length == 3) {
                                                    if (peringatanMerah.length === 3) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    if (peringatanMerah.length == 1) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (peringatanMerah.length == 2) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else if (peringatanMerah.length == 3) {
                                                        return (
                                                            <>
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>

                                                                <div className="bg-[#fbff00] border-2 border-[#222954] rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    } else {
                                                        return (
                                                            <>
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan1.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan2.png" alt="" />
                                                                </div>
                                                                
                                                                <div className="border-[#222954] border-2 rounded-lg flex justify-center items-center w-full">
                                                                    <img className='w-5' src="/images/peringatan3.png" alt="" />
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                }
                                            })()}
                                        </div>
                                        {/* jatuhan */}
                                        <div className='gap-x-3 border-2 border-black rounded-lg py-1'>
                                        {(() => {
                                                if (nilaiTanding.length == 1) {
                                                    return (
                                                        <h1 className='text-black font-montserrat text-center text-2xl font-bold'>JATUHAN: {nilaiTanding[0]?.nilai_merah?.log_jatuhan.length}x</h1>
                                                    )
                                                } else if (nilaiTanding.length == 2) {
                                                    return (
                                                        <h1 className='text-black font-montserrat text-center text-2xl font-bold'>JATUHAN: {(nilaiTanding[0]?.nilai_merah?.log_jatuhan.length)+(nilaiTanding[1]?.nilai_merah?.log_jatuhan.length)}x</h1>
                                                    )
                                                } else if (nilaiTanding.length == 3) {
                                                    return (
                                                        <h1 className='text-black font-montserrat text-center text-2xl font-bold'>JATUHAN: {(nilaiTanding[0]?.nilai_merah?.log_jatuhan.length)+(nilaiTanding[1]?.nilai_merah?.log_jatuhan.length)+(nilaiTanding[2]?.nilai_merah?.log_jatuhan.length)}x</h1>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* wrapper pukulan indicator */}
                            <div className="grid grid-cols-7 gap-x-3 mb-3">
                                {/* wrapper juri indicator pukulan biru */}
                                <div className="col-span-3 grid grid-cols-3 gap-x-3">
                                    <div className={visiblePbj1 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J1</h1>
                                    </div>
                                    <div className={visiblePbj2 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J2</h1>
                                    </div>
                                    <div className={visiblePbj3 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J3</h1>
                                    </div>
                                </div>
                                {/* wrapper pukulan icon */}
                                <div className="border-2 border-[#222954] rounded-lg">
                                    <div className="flex justify-center items-center py-2 gap-x-3">
                                        <svg width="34px" height="34px" viewBox="0 0 64.00 64.00" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(-45)" stroke="#000000" strokeWidth="2.944">
                                            <path 
                                                d="M60.223 29.912V13.938c0-9.784-11.317-9.224-13.24-5.989C45.598.294 33.622.137 31.48 6.844C27.943.948 16.656 2.231 16.656 12.129c-3.165-4.363-13.907-4.418-13.907 5.26c0 0 .081 3.747-.002 4.992c-.369 5.54-1.483 11.106.011 22.21c.67 4.982 2.792 8.839 6.304 11.461c6.255 4.67 14.821 3.888 16.521 3.677A29.866 29.866 0 0 0 36.968 62c4.229 0 8.375-.922 12.038-2.759c6.182-3.1 10.487-8.529 12.122-15.289c1.536-6.345.923-10.721-.905-14.04M46.982 10.191c1.729-2.796 9.91-4.183 9.91 5.254v10.461c-2.169-2.118-9.065-6.395-9.91-6.932v-8.783m-14.414.601c0-8.299 11.633-7.613 11.633 1.231v5.501c-2.415-.944-4.327-.412-6.621.234c-1.377.389-2.967.832-5.012 1.05v-8.016m-14.271.687c0-7.894 11.174-6.878 11.174 2.059v5.397c-3.402-.552-6.082 1.613-6.908 4.393a7.31 7.31 0 0 0 .017 4.147c-2.284-.812-4.282-2.71-4.282-5.293V11.479zM4.378 17.362c0-7.254 11.36-7.334 11.36 2.087v7.59c0 6.911-11.36 8.157-11.36.062v-9.739m49.851 32.706c-7.942 9.235-18.616 9.321-29.211 6.394c0 0-10.969 2.502-16.604-3.196c-4.168-4.215-5.534-12.828-4.557-21.53c1.518 2.295 4.337 3.645 6.817 3.645c2.283 0 4.398-.933 5.957-2.626c1.233-1.342 2.047-3.108 2.424-5.183a7.805 7.805 0 0 0 4.71 2.197c1.897 2.999 5.905 3.723 7.72 4.028c-3.8 1.851-7.104 5.787-5.285 12.485c-.141-10.676 11.353-13.421 12.867-12.782c1.769.748 3.931 4.128 4.446 5.899c.201.689.253 2.856.253 2.856s.6-2.247.476-2.994c-.377-2.29-3.445-6.548-5.605-7.405c-1.402-.556-5.09.726-6.007.582c-8.465-1.321-9.424-6.796-8.839-8.763c.56-1.881 2.696-3.364 4.214-3.27c4.772.317 7.534-.446 9.923-1.12c2.764-.781 4.494-1.368 7.178.404c1.216.803 11.61 7.543 13.4 11.249c2.959 6.125-.354 14.573-4.277 19.13" fill="#000000">
                                            </path>
                                        </svg>
                                        <svg width="34px" height="34px" viewBox="0 0 64.00 64.00" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(-45)" stroke="#000000" strokeWidth="2.944">
                                            <path
                                                d="M60.223 29.912V13.938c0-9.784-11.317-9.224-13.24-5.989C45.598.294 33.622.137 31.48 6.844C27.943.948 16.656 2.231 16.656 12.129c-3.165-4.363-13.907-4.418-13.907 5.26c0 0 .081 3.747-.002 4.992c-.369 5.54-1.483 11.106.011 22.21c.67 4.982 2.792 8.839 6.304 11.461c6.255 4.67 14.821 3.888 16.521 3.677A29.866 29.866 0 0 0 36.968 62c4.229 0 8.375-.922 12.038-2.759c6.182-3.1 10.487-8.529 12.122-15.289c1.536-6.345.923-10.721-.905-14.04M46.982 10.191c1.729-2.796 9.91-4.183 9.91 5.254v10.461c-2.169-2.118-9.065-6.395-9.91-6.932v-8.783m-14.414.601c0-8.299 11.633-7.613 11.633 1.231v5.501c-2.415-.944-4.327-.412-6.621.234c-1.377.389-2.967.832-5.012 1.05v-8.016m-14.271.687c0-7.894 11.174-6.878 11.174 2.059v5.397c-3.402-.552-6.082 1.613-6.908 4.393a7.31 7.31 0 0 0 .017 4.147c-2.284-.812-4.282-2.71-4.282-5.293V11.479zM4.378 17.362c0-7.254 11.36-7.334 11.36 2.087v7.59c0 6.911-11.36 8.157-11.36.062v-9.739m49.851 32.706c-7.942 9.235-18.616 9.321-29.211 6.394c0 0-10.969 2.502-16.604-3.196c-4.168-4.215-5.534-12.828-4.557-21.53c1.518 2.295 4.337 3.645 6.817 3.645c2.283 0 4.398-.933 5.957-2.626c1.233-1.342 2.047-3.108 2.424-5.183a7.805 7.805 0 0 0 4.71 2.197c1.897 2.999 5.905 3.723 7.72 4.028c-3.8 1.851-7.104 5.787-5.285 12.485c-.141-10.676 11.353-13.421 12.867-12.782c1.769.748 3.931 4.128 4.446 5.899c.201.689.253 2.856.253 2.856s.6-2.247.476-2.994c-.377-2.29-3.445-6.548-5.605-7.405c-1.402-.556-5.09.726-6.007.582c-8.465-1.321-9.424-6.796-8.839-8.763c.56-1.881 2.696-3.364 4.214-3.27c4.772.317 7.534-.446 9.923-1.12c2.764-.781 4.494-1.368 7.178.404c1.216.803 11.61 7.543 13.4 11.249c2.959 6.125-.354 14.573-4.277 19.13" fill="#000000">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                {/* wrapper juri indicator pukulan merah */}
                                <div className="col-span-3 grid grid-cols-3 gap-x-3">
                                    <div className={visiblePmj1 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J1</h1>
                                    </div>
                                    <div className={visiblePmj2 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J2</h1>
                                    </div>
                                    <div className={visiblePmj3 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J3</h1>
                                    </div>
                                </div>
                            </div>
                            {/* wrapper pukulan indicator */}
                            <div className="grid grid-cols-7 gap-x-3">
                                {/* wrapper juri indicator tendangan biru */}
                                <div className="col-span-3 grid grid-cols-3 gap-x-3">
                                    <div className={visibleTbj1 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J1</h1>
                                    </div>
                                    <div className={visibleTbj2 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J2</h1>
                                    </div>
                                    <div className={visibleTbj3 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J3</h1>
                                    </div>
                                </div>
                                {/* wrapper tendangan icon */}
                                <div className="border-2 border-[#222954] rounded-lg">
                                    <div className="flex justify-center items-center py-2 gap-x-3">
                                        <svg fill="#000000" width="34px" height="34px" viewBox="0 0 536.138 536.138">
                                            <circle cx="69.582" cy="145.48" r="64.48"></circle>
                                                <path 
                                                    d="M523.083,8.66c-16.878-16.677-44.093-7-60.789,9.868L308.118,175.87l-55.663,6.741c-5.68,1.75-14.229,0.421-19.116-2.964 l-7.698-5.327l109.165-85.049c16.381-12.756,19.326-36.395,6.551-52.784c-12.747-16.381-36.386-19.307-52.775-6.561 L173.067,119.92c-7.124,5.556-11.542,13.196-13.397,21.362c-0.038,0.076-0.105,0.124-0.144,0.201c0,0-42.658,68.802-42.629,70.819 c-8.587,11.38-10.385,27.11-3.185,40.469l62.682,116.414c6.799,12.613,19.756,19.785,33.144,19.785 c6.024,0,12.135-1.444,17.805-4.504c18.284-9.85,25.121-32.656,15.281-50.949l-27.645-51.341l64.317,3.729v207.257 c0,23.725,9.677,42.975,33.411,42.975s33.421-19.25,33.421-42.975V240.665c0-0.593-0.152-1.147-0.172-1.74l164.59-171.838 C527.224,50.219,539.951,25.365,523.083,8.66z">
                                                </path>
                                        </svg>
                                    </div>
                                </div>
                                {/* wrapper juri indicator tendangan merah */}
                                <div className="col-span-3 grid grid-cols-3 gap-x-3">
                                    <div className={visibleTmj1 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J1</h1>
                                    </div>
                                    <div className={visibleTmj2 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J2</h1>
                                    </div>
                                    <div className={visibleTmj3 == true ?  "bg-[#fbff00] rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]" : "rounded-lg text-[#222954] flex justify-center items-center border-2 border-[#222954]"}>
                                        <h1 className='text-3xl font-semibold py-1.5 tracking-wider'>J3</h1>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <Footer />
                </div>
                {/* akhir konten utama */}

                <ModalLayar verif={infoVerif} id_jadwal={jadwalTanding.id} socket={socket}/>
            </div>
            </>
    )
}

export default layar