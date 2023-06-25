import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from '../../component/navbar/navbar'
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
    const [status, setStatus] = useState('proses')

    const headerConfig = () => {
        let token = localStorage.getItem("token")
        let header = {
          headers : { Authorization : `Bearer ${token}` }
        }
        return header
    }

    const getData = () => {
        axios.get (BASE_URL + `/api/tanding/jadwal/gel/` + gelanggang, headerConfig())
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

    // to dewan selesai
    const toDetailTanding = (item) => {
        localStorage.setItem ('jadwalTanding', JSON.stringify(item))
        localStorage.setItem('jadwal', item.id)

        router.push ('./dewanSelesai')
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('dewanTanding') === null) {
         router.push ('/dewan/login') 
        }
    }

    useEffect (() => {
        if (!router.isReady) return;
        getData () 
        // isLogged ()
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
                            <button onClick={() => router.back()} className='bg-red-500 rounded-xl col-span-1 flex justify-center items-center'>
                                <img className='w-10' src="/svg/back.svg" alt="" />
                            </button>
                            <h1 className='col-span-11 text-3xl bg-[#222954] py-3 rounded-xl font-semibold text-center'>Gelanggang {gelanggang}</h1>
                        </div>

                        {/* Wrapper proses and finish */}
                        <div className="space-y-5 rounded-lg">
                            {/* button proses dan finish */}
                            <div className="grid grid-cols-2 w-full gap-x-7">
                                <button onClick={() => setStatus('proses')} className={status === 'proses' ? "bg-[#39ac39] hover:bg-[#2f912f] text-center py-2 rounded-lg" : "bg-[#7ed47e] hover:bg-[#39ac39] text-center py-2 rounded-lg"}>
                                    <span className='text-2xl font-semibold'>Proses</span>
                                </button>
                                <button onClick={() => setStatus('selesai')} className={status === 'selesai' ? "bg-[#39ac39] hover:bg-[#2f912f] text-center py-2 rounded-lg" : "bg-[#7ed47e] hover:bg-[#39ac39] text-center py-2 rounded-lg"}>
                                    <span className='text-2xl font-semibold'>Selesai</span>
                                </button>
                            </div>
                        </div>

                        {(() => {
                            if(status === 'proses'){
                                return(
                                    <>
                                        {/* wrapper card pertandingan yang belum selesai */}
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
                                    </>
                                )
                            } else if (status === 'selesai'){
                                return (
                                    <>
                                        {/* wrapper card pertandingan yang sudah selesai */}
                                        {data.filter(a => a.selesai == true).sort((a, b) => (a.partai < b.partai)).map ((item, index) => (
                                        <div key={index + 1} className="border-2 border-[#222954] rounded-lg p-4 mb-5">
                                            {/* wrapper number partai, kelas and babak */}
                                            <div className="grid grid-cols-12 gap-x-2 text-center mb-3">
                                                {/* number partai */}
                                                <div className="bg-[#222954] rounded-lg text-xl font-extrabold py-2">{item.partai}</div>
                                                {/* kelas and babak */}
                                                <div className="bg-[#222954] rounded-lg col-span-8 flex justify-center items-center">
                                                    <h1 className='text-xl font-semibold'>{item.kelas} {item.jk} {item.golongan} - {item.babak}</h1>
                                                </div>
                                                {/* details */}
                                                <button onClick={() => toDetailTanding (item)} className="bg-[#39ac39] hover:bg-[#2f912f] rounded-lg col-span-3 flex justify-center items-center">
                                                    <h1 className='text-xl font-semibold'>Details</h1>
                                                </button>
                                            </div>

                                            {/* wrapper card details */}
                                            <div className="grid grid-cols-3 p-1 rounded-lg">
                                                {/* info pesilat biru */}
                                                <div className="flex flex-col space-y-1 justify-center items-center">
                                                    <span className='text-blue-600 text-2xl font-bold'>{item.biru?.nama}</span>
                                                    <span className='text-blue-600 text-lg font-medium'>{item.biru?.kontingen}</span>
                                                </div>
                                                {/* skor and winner */}
                                                <div className={item.id_pemenang == item.id_peserta_biru ?  "bg-blue-600 flex flex-col justify-center items-center rounded-xl py-2" : "bg-red-600 flex flex-col justify-center items-center rounded-xl py-2"}>
                                                    <span className='text-4xl font-bold'>({item.total_biru}) - ({item.total_merah})</span>
                                                    <span className='text-xl font-medium tracking-wide'>Dengan Kemenangan {item.keterangan}</span>
                                                </div>
                                                {/* info pesilat merah */}
                                                <div className="flex flex-col space-y-1 justify-center items-center">
                                                    <span className='text-red-600 text-2xl font-semibold'>{item.merah?.nama}</span>
                                                    <span className='text-red-600 text-lg font-medium'>{item.merah?.kontingen}</span>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </>
                                )
                            }
                        })()}

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