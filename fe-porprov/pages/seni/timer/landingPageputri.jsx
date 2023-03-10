import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const landingPagePutri = () => {

    const router = useRouter ()

    const location = useRouter()
    const {pathname} = location;
    const splitLoc = pathname.split('/seni/timer')

    const [dataTunggal, setDataTunggal] = useState ([])
    const [dataGanda, setDataGanda] = useState ([])
    const [dataSoloKreatif, setDataSoloKreatif] = useState ([])
    const [dataRegu, setDataRegu] = useState ([])

    const getTunggal = () => {
        axios.get (BASE_URL + `/api/tgr/get/kelas/tunggal`)
        .then (res => {
            setDataTunggal (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getGanda = () => {
        axios.get (BASE_URL + `/api/tgr/get/kelas/ganda`)
        .then (res => {
            setDataGanda (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }
    
    const getRegu = () => {
        axios.get (BASE_URL + `/api/tgr/get/kelas/regu`)
        .then (res => {
            setDataRegu (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }
    
    const getSoloKreatif = () => {
        axios.get (BASE_URL + `/api/tgr/get/kelas/solo_kreatif`)
        .then (res => {
            setDataSoloKreatif (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('timerSeni') === null) {
         router.push ('/seni/timer/login') 
        }
    }

    useEffect (() => {
        getTunggal ()
        getGanda ()
        getRegu ()
        getSoloKreatif ()
        isLogged ()
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

                    {/* button putra putri */}
                    <div className="grid grid-cols-2 space-x-5">
                        <Link href={'/seni/timer'} className={splitLoc[1] === '' ? "bg-[#222954] rounded-lg text-center py-1" : "border-2 border-[#222954] rounded-lg text-center py-1 text-[#2C2F48]"}>
                            <span className='text-2xl font-semibold'>Putra</span>
                        </Link>
                        <Link href={'/seni/timer/landingPageputri'} className={splitLoc[1] === '/landingPageputri' ? "bg-[#222954] rounded-lg text-center py-1" : "border-2 border-[#222954] rounded-lg text-center py-1 text-[#2C2F48]"}>
                            <span className='text-2xl font-semibold'>Putri</span>
                        </Link>
                    </div>

                    {/* wrapper card kategori */}
                    <div className="grid sm:grid-grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5">
                        {/* wrapper card Tunggal */}
                        <div className="bg-[#222954] flex flex-col text-center rounded-lg space-y-2">
                            {/* Kategori */}
                            <div className="flex flex-col py-3">
                                <span className='text-3xl'>Kategori</span>
                                <span className='text-4xl font-bold'>Tunggal</span>
                            </div>
                            {/* wrapper pool */}
                                <div className="bg-white border-x-4 border-b-4 border-[#222954] min-h-[29rem] rounded-lg space-y-6">
                                {/* vshape */}
                                <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                                {/* pool */}
                                <div className="flex flex-col px-5">
                                    {dataTunggal.filter(a => a.jk == 'PUTRI').map ((item, index) => (
                                    <Link key={index + 1} href={'/seni/timer/putri/tunggal/' + item.kelas} className="bg-[#222954] rounded-lg p-3 mb-4">
                                        <span className='uppercase text-xl font-semibold'>{item.kelas}</span>
                                    </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* wrapper card Ganda */}
                        <div className="bg-[#222954] flex flex-col text-center rounded-lg space-y-2">
                            {/* Kategori */}
                            <div className="flex flex-col py-3">
                                <span className='text-3xl'>Kategori</span>
                                <span className='text-4xl font-bold'>Ganda</span>
                            </div>
                            {/* wrapper pool */}
                            <div className="bg-white border-x-4 border-b-4 border-[#222954] min-h-[29rem] rounded-lg space-y-6">
                                {/* vshape */}
                                <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                                {/* pool */}
                                <div className="flex flex-col px-5">
                                    {dataGanda.filter(a => a.jk == 'PUTRI').map ((item, index) => (
                                    <Link key={index + 1} href={'/seni/timer/putri/ganda/' + item.kelas} className="bg-[#222954] rounded-lg p-3 mb-4">
                                        <span className='uppercase text-xl font-semibold'>{item.kelas}</span>
                                    </Link>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                        {/* wrapper card Regu */}
                        <div className="bg-[#222954] flex flex-col text-center rounded-lg space-y-2">
                            {/* Kategori */}
                            <div className="flex flex-col py-3">
                                <span className='text-3xl'>Kategori</span>
                                <span className='text-4xl font-bold'>Regu</span>
                            </div>
                            {/* wrapper pool */}
                            <div className="bg-white border-x-4 border-b-4 border-[#222954] min-h-[29rem] rounded-lg space-y-6">
                                {/* vshape */}
                                <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                                {/* pool */}
                                <div className="flex flex-col px-5">
                                    {dataRegu.filter(a => a.jk == 'PUTRI').map ((item, index) => (
                                    <Link key={index + 1} href={'/seni/timer/putri/regu/' + item.kelas} className="bg-[#222954] rounded-lg p-3 mb-4">
                                        <span className='uppercase text-xl font-semibold'>{item.kelas}</span>
                                    </Link>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                        {/* wrapper card solo kreatif */}
                        <div className="bg-[#222954] flex flex-col text-center rounded-lg space-y-2">
                            {/* Kategori */}
                            <div className="flex flex-col py-3">
                                <span className='text-3xl'>Kategori</span>
                                <span className='text-4xl font-bold'>Solo Kreatif</span>
                            </div>
                            {/* wrapper pool */}
                            <div className="bg-white border-x-4 border-b-4 border-[#222954] min-h-[29rem] rounded-lg space-y-6">
                                {/* vshape */}
                                <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                                {/* pool */}
                                <div className="flex flex-col px-5">
                                {dataSoloKreatif.filter(a => a.jk == 'PUTRA').map ((item, index) => (
                                    <Link key={index + 1} href={'/seni/timer/putra/solo_kreatif/' + item.kelas} className="bg-[#222954] rounded-lg p-3 mb-4">
                                    <span className='uppercase text-xl font-semibold'>{item.kelas}</span>
                                    </Link>
                                ))}
                                </div>
                            </div>
                        </div>
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

export default landingPagePutri