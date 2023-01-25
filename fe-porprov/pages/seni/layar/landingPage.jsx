import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'

const landingPage = () => {
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
          <div className="grid grid-cols-3 w-4/5  mx-auto py-16 gap-x-10">

            {/* wrapper card */}
            <div className="bg-[#51607A] flex flex-col text-center rounded-lg space-y-2">
              {/* Kategori */}
              <div className="flex flex-col py-3">
                <span className='text-3xl'>Kategori</span>
                <span className='text-4xl font-bold'>Tunggal</span>
              </div>
              {/* wrapper pool */}
              <div className="bg-white border-x-4 border-b-4 border-[#51607A] min-h-[29rem] rounded-lg space-y-6">
                {/* vshape */}
                <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                {/* pool */}
                <div className="flex flex-col px-5">
                  <Link href={'namaSeniTunggal'} className="bg-[#222954] rounded-lg p-3 mb-4">
                    <span className='uppercase text-xl font-semibold'>pool a - putra</span>
                  </Link>
                  
                </div>
              </div>
            </div>

            {/* wrapper card */}
            <div className="bg-[#51607A] flex flex-col text-center rounded-lg space-y-2">
              {/* Kategori */}
              <div className="flex flex-col py-3">
                <span className='text-3xl'>Kategori</span>
                <span className='text-4xl font-bold'>Ganda</span>
              </div>
              {/* wrapper pool */}
              <div className="bg-white border-x-4 border-b-4 border-[#51607A] min-h-[29rem] rounded-lg space-y-6">
                {/* vshape */}
                <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                {/* pool */}
                <div className="flex flex-col px-5">
                  <Link href={'namaSeniGanda'} className="bg-[#222954] rounded-lg p-3 mb-4">
                    <span className='uppercase text-xl font-semibold'>pool a - putra</span>
                  </Link>
                  
                </div>
              </div>
            </div>

            {/* wrapper card */}
            <div className="bg-[#51607A] flex flex-col text-center rounded-lg space-y-2">
              {/* Kategori */}
              <div className="flex flex-col py-3">
                <span className='text-3xl'>Kategori</span>
                <span className='text-4xl font-bold'>Regu</span>
              </div>
              {/* wrapper pool */}
              <div className="bg-white border-x-4 border-b-4 border-[#51607A] min-h-[29rem] rounded-lg space-y-6">
                {/* vshape */}
                <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                {/* pool */}
                <div className="flex flex-col px-5">
                  <Link href={'namaSeniRegu'} className="bg-[#222954] rounded-lg p-3 mb-4">
                    <span className='uppercase text-xl font-semibold'>pool a - putra</span>
                  </Link>
                  
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