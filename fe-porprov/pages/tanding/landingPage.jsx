import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Link from 'next/link'
import { useRouter } from 'next/router'

const landingPage = () => {

    const location = useRouter();
    const {pathname} = location;
    const splitLoc = pathname.split('/dewan/')

  return (
    <>
    <div className="flex ">

      {/* awal konten utama */}
      <div className="w-full overflow-y-auto h-screen"> 
      
        {/* header */}
        <Navbar />
        {/* akhir header */}

        {/* konten utama */}
        <div className="bg-[#1E213C] text-white min-h-full">
            <div className="flex flex-col w-3/4 mx-auto py-10 space-y-5">

                {/* Wrapper proses and jumlah pertandingan */}
                <div className="bg-[#2C2F48] space-y-5 p-5 rounded-lg">
                    {/* button proses dan selesai */}
                    <div className="grid grid-cols-2 w-full gap-x-7">
                        <Link href={'./landingPage'} className={splitLoc[1] === 'landingPage' ? "bg-black bg-opacity-50 text-center py-2 rounded-lg" : "bg-[#1E213C] text-center py-2 rounded-lg"}>
                            <span className='text-2xl font-semibold'>Proses</span>
                        </Link>
                        <Link href={'./landingPageSelesai'} className={splitLoc[1] === 'landingPageSelesai' ? "bg-black bg-opacity-50 text-center py-2 rounded-lg" : "bg-[#1E213C] text-center py-2 rounded-lg"}>
                            <span className='text-2xl font-semibold'>Selesai</span>
                        </Link>
                    </div>

                    {/* display jumlah pertandingan */}
                    <div className="grid grid-cols-3 w-full gap-x-4 text-center">
                        <div className="bg-[#1E213C] py-2 rounded-lg">
                            <span className='text-xl font-semibold'>Total : 10 Partai</span>
                        </div>
                        <div className="bg-[#1E213C] py-2 rounded-lg">
                            <span className='text-xl font-semibold'>Proses : 08 Partai</span>
                        </div>
                        <div className="bg-[#1E213C] py-2 rounded-lg">
                            <span className='text-xl font-semibold'>Selesai : 02 Partai</span>
                        </div>
                    </div>
                </div>


                {/* wrapper menu */}
                <div className=" bg-[#2C2F48] rounded-lg">
                    
                    {/* wrapper info petarung dan button */}
                    <div className="grid grid-rows-2 p-5 rounded-lg gap-y-5">
                        {/* Pool dan button menu */}
                        <div className="grid grid-cols-12 gap-x-3 text-center items-center">
                            <div className="col-span-1 bg-[#1E213C] rounded-lg h-full flex justify-center items-center">
                                <span className='text-xl font-semibold'>1</span>
                            </div>
                            <div className="col-span-7 bg-[#1E213C] rounded-lg h-full flex items-center justify-center">
                                <span className='text-2xl font-semibold'>A Putra - Penyisihan</span>
                            </div>
                            <div className="col-span-4 space-x-3 h-full flex align-center justify-center">
                                <button className='bg-[#ffc516] px-3 rounded-lg font-medium text-lg'>Timer</button>
                                <button className='bg-[#ffc516] px-3 rounded-lg font-medium text-lg'>Layar</button>
                                <button className='bg-[#ffc516] px-3 rounded-lg font-medium text-lg'>Monitor</button>
                                <button className='bg-[#ffc516] px-3 rounded-lg font-medium text-lg'>Dewan</button>
                            </div>
                        </div>

                        {/* wrapper info petarung */}
                        <div className="grid grid-cols-2 gap-x-3">
                            {/* info sudut biru */}
                            <div className=" bg-[#1d1ad0] rounded-lg text-center py-2 flex flex-col space-y-2">
                                <span className='font-medium'>Nama Pesilat Biru</span>
                                <span className='text-gray-300'>Kontingen Biru</span>
                            </div>
                            {/* info sudut merah */}
                            <div className=" bg-[#cd0000] rounded-lg text-center py-2 flex flex-col space-y-2">
                                <span className='font-medium'>Nama Pesilat Merah</span>
                                <span className='text-gray-300'>Kontingen Merah</span>
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

export default landingPage