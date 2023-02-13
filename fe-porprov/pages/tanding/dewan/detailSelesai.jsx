import React from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'

const detailSelesai = () => {

    const router = useRouter ()

    const location = useRouter ()
    const { pathname } = location
    const splitLoc = pathname.split ('/tanding/dewan/')

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

                        {/* text daftar gelanggang and back button */}
                        <div className="grid grid-cols-12 gap-x-5 mb-7">
                            {/* button back */}
                            <Link href={'./landingPage'} className='bg-red-500 rounded-xl col-span-1 flex justify-center'>
                                <img className='w-10' src="/svg/back.svg" alt="" />
                            </Link>
                            <h1 className='col-span-11 text-3xl bg-[#222954] py-3 rounded-xl font-semibold text-center'>Daftar Gelanggang</h1>
                        </div>

                        {/* Wrapper proses and finish */}
                        <div className="space-y-5 rounded-lg mb-7">
                            {/* button proses dan finish */}
                            <div className="grid grid-cols-2 w-full gap-x-7">
                                <button onClick={() => router.back ()} className={splitLoc[1] === 'detail' ? "bg-[#39ac39] hover:bg-[#2f912f] text-center py-2 rounded-lg" : "bg-[#7ed47e] hover:bg-[#39ac39] text-center py-2 rounded-lg"}>
                                    <span className='text-2xl font-semibold'>Proses</span>
                                </button>
                                <Link href={'./detailSelesai'} className={splitLoc[1] === 'detailSelesai' ? "bg-[#39ac39] hover:bg-[#2f912f] text-center py-2 rounded-lg" : "bg-[#7ed47e] hover:bg-[#39ac39] text-center py-2 rounded-lg"}>
                                    <span className='text-2xl font-semibold'>Selesai</span>
                                </Link>
                            </div>
                        </div>

                        {/* wrapper card pertandingan */}
                        <div className="border-2 border-[#222954] rounded-lg p-4 mb-5">
                            {/* wrapper number partai, kelas and babak */}
                            <div className="grid grid-cols-12 gap-x-2 text-center mb-3">
                                {/* number partai */}
                                <div className="bg-[#222954] rounded-lg py-2">1</div>
                                {/* kelas and babak */}
                                <div className="bg-[#222954] rounded-lg col-span-8 flex justify-center items-center">
                                    <h1 className='text-xl font-semibold'>Putra Penyisihan</h1>
                                </div>
                                {/* details */}
                                <Link href={'./dewanSelesai'} className="bg-[#39ac39] hover:bg-[#2f912f] rounded-lg col-span-3 flex justify-center items-center">
                                    <h1 className='text-xl font-semibold'>Details</h1>
                                </Link>
                            </div>

                            {/* wrapper card details */}
                            <div className="grid grid-cols-3 p-1 rounded-lg">
                                {/* info pesilat biru */}
                                <div className="flex flex-col space-y-1 justify-center items-center">
                                    <span className='text-blue-600 text-2xl font-semibold'>Nama Pesilat Biru</span>
                                    <span className='text-blue-600 text-lg font-medium'>Kontingen Pesilat Biru</span>
                                </div>
                                {/* skor and winner */}
                                <div className="bg-blue-600 flex flex-col justify-center items-center rounded-xl py-2">
                                    <span className='text-4xl font-bold'>24 - 13</span>
                                    <span className='text-xl font-medium tracking-wide'>Dengan Kemenangan Angka</span>
                                </div>
                                {/* info pesilat merah */}
                                <div className="flex flex-col space-y-1 justify-center items-center">
                                    <span className='text-red-600 text-2xl font-semibold'>Nama Pesilat Merah</span>
                                    <span className='text-red-600 text-lg font-medium'>Kontingen Pesilat Merah</span>
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

export default detailSelesai