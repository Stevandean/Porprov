import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'
import { globalState } from '../../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const namaSeniTunggal = () => {

  const [dataSeniTunggal, setDataSeniTunggal] = useState ([])

  const getSeniTunggal = () => {
    axios.get (BASE_URL + '/api/tgr/tunggal')
    .then ((res) => {
        setDataSeniTunggal(res.data.data)
    })
    .catch (err => {
        console.log(err.message);
    })
  }

  useEffect (() => {
      getSeniTunggal()
      // console.log(id);
  },[])

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
          <div className="w-4/5 mx-auto py-10 space-y-5">

            {/* wrapper button back & pool */}
            <div className="flex">
                {/* button back */}
                <div className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                    <img className='p-3' src="../../svg/back.svg" />
                </div>
                {/* kategori & pool */}
                <div className="flex flex-col text-center m-auto space-y-3">
                    <span className='text-3xl text-[#222954] font-bold'>Tunggal</span>
                    <span className='bg-[#51607A] rounded-lg py-3 px-5 text-xl tracking-widest	'>Pool A - Putra</span>
                </div>
            </div>

            {/* wrapper list peserta */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-5">
              {dataSeniTunggal.map ((item, index) => (
                <Link href={"./" + item.id} className="bg-white border-2 border-[#222954] flex flex-row h-20 rounded-lg z-20">
                    {/* nomor */}
                    <div className="flex flex-row">
                        <div className="bg-[#222954] rounded-lg px-4 flex justify-center items-center z-10">
                            <span className='text-5xl'>{index + 1}</span>
                        </div>
                        <img className='-translate-x-10'  src="../../svg/Vector.svg" />
                    </div>
                    {/* nama & kontingen */}
                    <div className="flex flex-col m-auto text-center -translate-x-6 text-[#222954]">
                      <span className='text-2xl font-semibold'>{item.nama1}</span>
                      <span className='text-lg font-medium'>{item.kontingen}</span>
                    </div>
                </Link>
              ))}
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

export default namaSeniTunggal