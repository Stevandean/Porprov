import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import socketIo from 'socket.io-client'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { globalState } from '../../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// socket io
const socket = socketIo (BASE_URL)

const landingPageputra = () => {
  
  const router = useRouter () 

  const [gelanggang, setGelanggang] = useState ([])

  const getGelanggang = () => {
    axios.get (BASE_URL + `/api/gelanggang`)
    .then (res => {
      setGelanggang (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const isLogged = () => {
    if (localStorage.getItem ('token') === null || localStorage.getItem ('juriSeni') === null) {
     router.push ('/seni/juri/login') 
    }
  }

  const ubah_data = () => socket.emit ('init_data')

  useEffect (() => {
    socket.emit ('init_data')
    socket.on ('change_data', ubah_data)
    isLogged ()
    getGelanggang ()
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
            <div className="w-11/12 mx-auto py-10">

              {/* text daftar gelanggang */}
              <div className="bg-[#222954] py-3 rounded-xl mb-8">
                <h1 className='text-3xl font-semibold text-center'>Daftar Gelanggang</h1>
              </div>

              {/* wrapper gelanggang card */}
              <div className="grid grid-cols-2 gap-x-10 mb-4">
                {/* card gelanggang */}
                {gelanggang.map ((item, index) => (
                  <div key={index + 1} className="flex flex-col justify-center items-center border-2 border-[#222954] py-4 rounded-xl space-y-4 mb-3">
                    <h1 className='text-2xl font-bold text-[#222954]'>Gelanggang {item.gelanggang}</h1>
                    <Link href={'./juri/' + item.gelanggang} className='font-medium bg-[#39ac39] hover:bg-[#2f912f] w-40 rounded-xl py-2 text-center'>Detail</Link>
                  </div>
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

export default landingPageputra