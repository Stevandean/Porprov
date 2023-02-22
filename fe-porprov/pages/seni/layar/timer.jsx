import React, { use, useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import TimerLayar from '../components/timerLayar'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const timer = () => {

    const router = useRouter ()

    const [jadwal, setJadwal] = useState ([])
    const [peserta, setPeserta] = useState ([])

    const getPeserta = () => {
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        setPeserta (peserta)
    }

    const getJadwal = () => {
        const jadwal = JSON.parse (localStorage.getItem ('jadwalSeni'))
        setJadwal (jadwal)
    }

    useEffect (() => {
        getPeserta ()
        getJadwal ()
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
                    <div className="w-11/12 mx-auto py-10 space-y-6">

                        <div className="grid grid-cols-12 space-x-3">
                            {/* button back */}
                            <div className="flex space-x-3 w-full col-span-9">
                                <button onClick={() => router.back()} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                                    <img className='p-3' src="../../svg/back.svg" />
                                </button>
                                <div className={peserta.id == jadwal.id_biru ? "bg-blue-600 w-full flex justify-start items-center pl-5 py-2 rounded-lg" : "bg-red-600 w-full flex justify-start items-center pl-5 py-2 rounded-lg"}>
                                    <div className="mr-3">
                                        <h1 className='text-5xl font-bold'>{jadwal.partai}</h1>
                                    </div>
                                    <div className="">
                                        {(() => {
                                            if (peserta.kategori == 'tunggal') {
                                                return (
                                                    <h1 className='text-xl font-semibold'>{peserta.nama1}</h1>
                                                    )
                                            } else if (peserta.kategori == 'ganda') {
                                                return (
                                                    <>
                                                        <h1 className='text-xl font-semibold'>{peserta.nama1} - {peserta.nama2}</h1>
                                                    </>
                                                )
                                            } else if (peserta.kategori == 'regu') {
                                                return (
                                                    <>
                                                        <h1 className='text-xl font-semibold'>{peserta.nama1} - {peserta.nama2} - {peserta.nama3}</h1>
                                                    </>
                                                )
                                            } else if (peserta.kategori == 'solo_kreatif') {
                                                return (
                                                    <h1 className='text-xl font-semibold'>{peserta.nama1}</h1>
                                                )
                                            }
                                        })()}
                                        <h1 className='tracking-wider'>{peserta.kontingen}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#222954] py-2 px-8 rounded-lg flex flex-col jusitfy-center items-center col-span-3">
                                <span className='text-lg font-semibold'>{jadwal.babak}</span>
                                <span className='text-lg font-semibold'>{jadwal.kategori} - {jadwal.kelas}</span>
                            </div>
                        </div>

                        <div className="border-4 border-[#222954] flex justify-center items-center py-14 text-[200px] text-[#222954] font-bold">
                            {/* <h1 className='text-[200px] text-[#222954] font-bold'>00:00</h1> */}
                            {jadwal.id ? <TimerLayar id_jadwal={jadwal.id} id_peserta={peserta.id}/> : null}
                        </div>

                        <div className="flex justify-center items-center">
                            <Link href={'./detailSelesai'} className="bg-[#222954] rounded-lg w-full py-1.5">
                                <h1 className='text-xl font-semibold text-center'>Lihat Nilai</h1>
                            </Link>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>
        </>
    )
}

export default timer