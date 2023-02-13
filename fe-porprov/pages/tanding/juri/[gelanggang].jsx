import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'
import { useRouter } from 'next/router';
import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detail = () => {

    // state kematian
    const router = useRouter ()
    const { gelanggang } = router.query

    // ini state
    const [data, setData] = useState ([])

    const getData = () => {
        axios.get (BASE_URL + `/api/tanding/gel/` + gelanggang)
        .then (res => {
            setData (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    // to juri proses
    const toJuriProses = (item) => {
        localStorage.setItem ('jadwal', item.id)
        router.push ('./nilai')
    }

    useEffect (() => {
        if (!router.isReady) return;
        getData () 
    }, [router.query.gelanggang, router.isReady])

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
                    <div className="w-9/12 mx-auto py-10">

                        {/* wrapper pertandingan information */}
                        <div className="grid grid-cols-2 gap-x-3 mb-8">
                            <div className="bg-[#222954] rounded-lg py-2 text-center">
                                <h1 className='text-xl font-bold'>Gelanggang 1</h1>
                            </div>
                            <div className="bg-[#222954] rounded-lg py-2 text-center">
                                <h1 className='text-xl font-bold'>Juri 1</h1>
                            </div>
                        </div>

                        {/* wrapper card pertandingan */}
                        {data.map (item => (
                            <div className="border-2 border-[#222954] rounded-lg text-[#222954] text-center py-4 mb-5">
                                <h1 className='text-3xl font-bold'>Partai {item.partai}</h1>
                                <h1 className='text-lg font-semibold tracking-wider mb-3'>{item.kelas} {item.golongan} - {item.babak}</h1>
                                {/* wrapper pesilat information */}
                                <div className="grid grid-cols-2 gap-x-4 mb-5">
                                    {/* sudut biru information */}
                                    <div className="text-blue-600">
                                        <h1 className='text-2xl font-semibold'>{item.biru.nama}</h1>
                                        <h1 className='text-lg font-semibold tracking-wider'>{item.biru.kontingen}</h1>
                                    </div>
                                    {/* sudut merah information */}
                                    <div className="text-red-600">
                                        <h1 className='text-2xl font-semibold'>{item.merah.nama}</h1>
                                        <h1 className='text-lg font-semibold tracking-wider'>{item.merah.kontingen}</h1>
                                    </div>
                                </div>
                                {/* button nilai pertandingan */}
                                <div className="flex justify-center">
                                    <button onClick={() => toJuriProses (item)} className="w-[70%] py-2 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-medium text-white">Nilai Pertandingan</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>
        </>

    )
}

export default detail