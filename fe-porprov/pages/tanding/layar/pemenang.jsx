import React from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const pemenang = () => {
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

                        <h1 className='text-[#222954] text-4xl font-bold text-center'>Keputusan Pemenang</h1>
                        {/* wrapper peserta information */}
                        <div className="border-2 border-[#222954] rounded-lg grid grid-cols-2 py-3 px-6">
                            {/* sudut biru information */}
                            <div className="text-center">
                                <h1 className='text-blue-600 text-3xl font-semibold'>Nama Pesilat Biru</h1>
                                <h1 className='text-2xl font-semibold tracking-wider text-[#222954]'>Nama Pesilat Biru</h1>
                            </div>
                            {/* sudut merah information */}
                            <div className="text-center">
                                <h1 className='text-red-600 text-3xl font-semibold'>Nama Pesilat Biru</h1>
                                <h1 className='text-2xl font-semibold tracking-wider text-[#222954]'>Nama Pesilat Biru</h1>
                            </div>
                        </div>

                        {/* pertandingan information */}
                        <div className="border-2 border-[#222954] text-center py-3 px-6">
                            <h1 className='text-[#222954] text-3xl font-semibold mb-5'>Pertandingan ini di menangkan oleh Pesilat dari Sudut</h1>
                            {/* sudut pemenang */}
                            <div className="flex justify-center items-center mb-5">
                                <div className="text-2xl font-semibold bg-blue-600 rounded-lg w-2/6 py-3">Biru</div>
                            </div>
                            {/* kemenangan */}
                            <div className="mb-5">
                                <span className='text-[#222954] text-3xl font-semibold'>Dengan kemenagan <span className='font-extrabold tracking-wider'>Angka</span></span>

                            </div>
                            {/* wrapper total score */}
                            <div className="flex justify-center items-center">
                                <div className="grid grid-cols-3 gap-x-5 w-3/4">
                                    {/* total score biru */}
                                    <div className="bg-blue-600 text-center">
                                        <h1 className='text-6xl font-bold py-4'>33</h1>
                                    </div>
                                    <div className="text-center">
                                        <h1 className='text-[#222954] text-6xl font-bold py-4 -tracking-[0.2em]'>----</h1>
                                    </div>
                                    {/* total score merah */}
                                    <div className="bg-red-600 text-center">
                                        <h1 className='text-6xl font-bold py-4'>13</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* selesai button */}
                        <Link href={'./detail'} className="bg-green-600 hover:bg-green-700 rounded-lg py-3 text-3xl font-semibold tracking-wider flex justify-center items-center">Selesai</Link>

                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>
        </>

    )
}

export default pemenang