import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import axios from 'axios'
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

    // to timer
    const toTimer = (item) => {
        localStorage.setItem ('jadwal', item.id)
        router.push ('./timer')
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
                    <div className="w-9/12 mx-auto py-10 space-y-8">

                        {/* text daftar gelanggang and back button */}
                        <div className="grid grid-cols-12 gap-x-5">
                            {/* button back */}
                            <Link href={'./landingPage'} className='bg-red-500 rounded-xl col-span-1 flex justify-center'>
                                <img className='w-10' src="/svg/back.svg" alt="" />
                            </Link>
                            <h1 className='col-span-11 text-3xl bg-[#222954] py-3 rounded-xl font-semibold text-center'>Daftar Gelanggang</h1>
                        </div>

                        {/* table */}
                        <table className='w-full table-fixed'>
                            <thead>
                                <tr className='bg-[#222954] border-2 border-[#222954] text-white'>
                                    <th className='py-3 w-[8%]'>Partai</th>
                                    <th>Kelas</th>
                                    <th>Kategori</th>
                                    <th className='w-[25%]'>Sudut biru</th>
                                    <th className='w-[25%]'>Sudut merah</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map (item => (
                                    <tr className='text-center text-[#222954]'>
                                        <td className='border-2 border-[#222954] py-3'>{item.partai}</td>
                                        <td className='border-2 border-[#222954]'>{item.kelas} {item.jk}</td>
                                        <td className='border-2 border-[#222954]'>{item.golongan}</td>
                                        <td className='border-2 border-[#222954]'>{item.biru.nama} ({item.biru.kontingen})</td>
                                        <td className='border-2 border-[#222954]'>{item.merah.nama} ({item.merah.kontingen})</td>
                                        <td className='border-2 border-[#222954]'>
                                            <button onClick={() => toTimer (item)} className='bg-[#39ac39] hover:bg-[#2f912f] py-1.5 px-4 rounded-lg text-white'>Timer</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

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