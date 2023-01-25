import React from 'react'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useRouter } from 'next/router'
import Link from 'next/link'

const nilaiTgr = () => {

    const location = useRouter()
    const {pathname} = location;
    const splitLoc = pathname.split('/admin/nilai')

  return (
    <>
    <div className="flex ">

      {/* side bar */}
      <Sidebar />
      {/* Akhir sidebar */}

      {/* awal konten utama */}
      {/* supaya konten dan header dapat di scroll dan tidak memengaruhi sidebar */}
      <div className="w-full overflow-y-auto h-screen"> 
      
        {/* header */}
        <Navbar />
        {/* akhir header */}

        {/* konten utama */}
        <div className="bg-[#1E213C] text-white min-h-full">

          {/* wrapper */}
          <div className="p-7 space-y-5">
            {/* Input Data */}
            <div className="bg-[#2C2F48] rounded-lg flex justify-between p-3">
              <div className="flex items-center px-2">
                <span className='text-lg uppercase font-semibold'>Rekap {splitLoc}</span>
              </div>
              <div className="px-5 space-x-5">
                <button className='bg-red-700 px-3 py-2 rounded-lg'>Cetak PDF</button>
              </div>
            </div>

            <div className="bg-[#2C2F48] min-h-full rounded-lg py-5 px-10">
              {/* Table */}
              <div className="flex flex-col space-y-5">
                <Link href="detailNilaiTgr" className='bg-[#4C4F6D] rounded-lg py-2 flex justify-center text-lg font-medium uppercase'>
                    pool a - putra remaja
                </Link>
                <Link href="tanding" className='bg-[#4C4F6D] rounded-lg py-2 flex justify-center text-lg font-medium uppercase'>
                    pool a - putri remaja
                </Link>
                <Link href="tanding" className='bg-[#4C4F6D] rounded-lg py-2 flex justify-center text-lg font-medium uppercase'>
                    pool b - putra remaja
                </Link>
                <Link href="tanding" className='bg-[#4C4F6D] rounded-lg py-2 flex justify-center text-lg font-medium uppercase'>
                    pool b - putri remaja
                </Link>
                <Link href="tanding" className='bg-[#4C4F6D] rounded-lg py-2 flex justify-center text-lg font-medium uppercase'>
                    pool final - putra remaja
                </Link>
                <Link href="tanding" className='bg-[#4C4F6D] rounded-lg py-2 flex justify-center text-lg font-medium uppercase'>
                    pool final - putri remaja
                </Link>
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

export default nilaiTgr