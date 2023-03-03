import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detail = () => {

    const location = useRouter ()
    const {pathname} = location
    const splitLoc = pathname.split ('/tanding/dewan/')
    
    // state kematian
    const router = useRouter ()
    const { gelanggang } = router.query

    // ini state
    const [data, setData] = useState ([])
    const [active] = useState ('proses')

    const getData = () => {
        axios.get (BASE_URL + `/api/tanding/gel/` + gelanggang)
        .then (res => {
            setData (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    // to dewan proses
    const toDewanProses = (item) => {
        localStorage.setItem('jadwal', item.id)
        localStorage.setItem ('peserta', JSON.stringify (item))
        router.push ('./dewan')
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('dewanTanding') === null) {
         router.push ('/dewan/login') 
        }
    }

    useEffect (() => {
        if (!router.isReady) return;
        getData () 
        isLogged ()
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
                    <div className="w-11/12 mx-auto py-10 space-y-8">

                        {/* text daftar gelanggang and back button */}
                        <div className="grid grid-cols-12 gap-x-5">
                            {/* button back */}
                            <Link href={'/tanding/dewan'} className='bg-red-500 rounded-xl col-span-1 flex justify-center'>
                                <img className='w-10' src="/svg/back.svg" alt="" />
                            </Link>
                            <h1 className='col-span-11 text-3xl bg-[#222954] py-3 rounded-xl font-semibold text-center'>Daftar Gelanggang</h1>
                        </div>

                        {/* Wrapper proses and finish */}
                        <div className="space-y-5 rounded-lg">
                            {/* button proses dan finish */}
                            <div className="grid grid-cols-2 w-full gap-x-7">
                                <Link href={'/tanding/dewan/' + gelanggang} className={active == 'proses' ? "bg-[#39ac39] hover:bg-[#2f912f] text-center py-2 rounded-lg" : "bg-[#7ed47e] hover:bg-[#39ac39] text-center py-2 rounded-lg"}>
                                    <span className='text-2xl font-semibold'>Proses</span>
                                </Link>
                                <Link href={'/tanding/dewan/detailSelesai'} className={active == 'selesai' ? "bg-[#39ac39] hover:bg-[#2f912f] text-center py-2 rounded-lg" : "bg-[#7ed47e] hover:bg-[#39ac39] text-center py-2 rounded-lg"}>
                                    <span className='text-2xl font-semibold'>Selesai</span>
                                </Link>
                            </div>
                        </div>

                        {/* table */}
                        <table className='w-full table-fixed'>
                            <thead>
                                <tr className='bg-[#222954] border-2 border-[#222954] text-white'>
                                    <th className='py-3 w-[8%]'>Partai</th>
                                    <th>Kelas</th>
                                    <th>Kategori</th>
                                    <th className='w-[25%] bg-blue-600'>Sudut Biru</th>
                                    <th className='w-[25%] bg-red-600'>Sudut Merah</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.filter(a => a.selesai == false).map ((item, index) => (
                                    <tr key={index + 1} className='text-center text-[#222954]'>
                                        <td className='border-2 border-[#222954] py-3'>{item.partai}</td>
                                        <td className='border-2 border-[#222954]'>{item.kelas} {item.jk}</td>
                                        <td className='border-2 border-[#222954]'>{item.golongan}</td>
                                        <td className='border-2 border-[#222954]'>{item.biru.nama} ({item.biru.kontingen})</td>
                                        <td className='border-2 border-[#222954]'>{item.merah.nama} ({item.merah.kontingen})</td>
                                        <td className='border-2 border-[#222954]'>
                                            <button onClick={() => toDewanProses (item)} className='bg-[#39ac39] hover:bg-[#2f912f] py-1.5 px-4 rounded-lg text-white'>Dewan</button>
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