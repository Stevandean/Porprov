import React from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const timer = () => {
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

                        {/* wrapper pertandingan information and button back */}
                        <div className="grid grid-cols-12 gap-x-5 mb-5">
                            {/* button back */}
                            <Link href={'./landingPage'} className='bg-red-500 rounded-xl col-span-1 flex justify-center'>
                                <img className='w-10' src="/svg/back.svg" alt="" />
                            </Link>
                            {/* pertandingan information */}
                            <div className="col-span-11 flex flex-row justify-center items-center space-x-5 bg-[#222954] py-4 rounded-lg text-2xl font-bold">
                                <h1>Partai 1</h1>
                                <h1>-</h1>
                                <h1>Putra A</h1>
                                <h1>-</h1>
                                <h1>Penyisihan</h1>
                            </div>
                        </div>

                        {/* wrapper perserta information */}
                        <div className="flex justify-start items-center mb-10">
                            {/* pesilat information */}
                            <div className="bg-red-600 rounded-lg py-2 px-5">
                                <h1 className='text-lg font-bold'>Nama Pesilat Merah<br></br>Kontingen Pesilat Merah</h1>
                            </div>
                        </div>
                        {/* wrapper timer */}
                        <div className="bg-[#222954] rounded-lg text-center mb-4">
                            <h1 className='text-2xl font-bold py-3'>Waktu</h1>
                        </div>
                        {/* wrapper button start and pause */}
                        <div className="grid grid-cols-3 gap-x-10 mb-8">
                            {/* button pause */}
                            <button className="bg-red-600 hover:bg-red-700 rounded-lg py-8 px-5 text-center">
                                <h1 className='text-4xl font-semibold'>Pause</h1>
                            </button>
                            {/* timer */}
                            <div className="flex justify-center items-center">
                                <h1 className='text-6xl text-[#222954] font-bold'>00:00</h1>
                            </div>
                            {/* button start */}
                            <button className="bg-green-600 hover:bg-green-700 rounded-lg py-8 px-5 text-center">
                                <h1 className='text-4xl font-semibold'>Pause</h1>
                            </button>
                        </div>
                        {/* babak */}
                        <div className="bg-[#222954] rounded-lg text-center mb-4">
                            <h1 className='text-2xl font-bold py-2'>babak</h1>
                        </div>
                        {/* wrapper button babak */}
                        <div className="grid grid-cols-3 gap-x-10 text-[#222954]">
                            <div className="border-4 border-yellow-300 rounded-lg px-5 py-8 text-center">
                                <h1 className='text-4xl font-bold uppercase'>babak I</h1>
                            </div>
                            <div className="border-4 border-yellow-300 rounded-lg px-5 py-8 text-center">
                                <h1 className='text-4xl font-bold uppercase'>babak II</h1>
                            </div>
                            <div className="border-4 border-yellow-300 rounded-lg px-5 py-8 text-center">
                                <h1 className='text-4xl font-bold uppercase'>babak III</h1>
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

export default timer