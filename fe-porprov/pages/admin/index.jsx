import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { useRouter } from 'next/router';
// import '../home.css'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const landingPage = () => {

  const router = useRouter ()

  // ini state
  const [dataTanding, setDataTanding] = useState ([])
  const [dataTgr, setDataTgr] = useState ([])

  const getJadwalTanding = () => {
    axios.get (BASE_URL + `/api/tanding`)
    .then (res => {
      setDataTanding (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const getJadwalTgr = () => {
    axios.get (BASE_URL + `/api/tgr`)
    .then (res => {
      setDataTgr (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const isLogged = () => {
    if (localStorage.getItem ('token') === null || localStorage.getItem ('admin') === null) {
      router.push ('/admin/login')
    }
  }

  useEffect (() => {
    getJadwalTanding ()
    getJadwalTgr ()
    isLogged ()
  }, [])

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
          <div className="flex flex-col w-full p-14 space-y-7">
            
            {/* Banner */}
            <div className="bg-gradient-to-r from-[#0906BE] to-[#8B55F4] h-44 rounded-lg"></div>
            
            {/* Progres */}
            <div className="grid grid-cols-2 gap-x-7">

              {/* Partai Tanding */}
              <div className="flex flex-col space-y-5">
                <div className="bg-gradient-to-r from-[#0906BE] to-[#8B55F4] py-3 text-center rounded-lg mb-1">
                  <span className='text-2xl uppercase font-semibold'>total partai tanding</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="flex flex-col py-3 text-center bg-gradient-to-r from-[#0906BE] to-[#8B55F4] rounded-lg">
                    <span className="text-2xl font-medium">Proses</span>
                    <span className="text-8xl">{dataTanding.filter (a => a.selesai == false).length}</span>
                  </div>
                  <div className="flex flex-col py-3 text-center bg-gradient-to-r from-[#0906BE] to-[#8B55F4] rounded-lg">
                    <span className="text-2xl font-medium">Selesai</span>
                    <span className="text-8xl">{dataTanding.filter (a => a.selesai == true).length}</span>
                  </div>
                </div>
              </div>
              {/* Akhir Partai Tanding */}

              {/* Partai TGR */}
              <div className="flex flex-col space-y-5">
                <div className="bg-gradient-to-r from-[#0906BE] to-[#8B55F4] py-3 text-center rounded-lg mb-1">
                  <span className='text-2xl uppercase font-semibold'>total partai tgr</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="flex flex-col py-3 text-center bg-gradient-to-r from-[#0906BE] to-[#8B55F4] rounded-lg">
                    <span className="text-2xl font-medium">Proses</span>
                    <span className="text-8xl">{dataTgr.filter (a => a.selesai == false).length}</span>
                  </div>
                  <div className="flex flex-col py-3 text-center bg-gradient-to-r from-[#0906BE] to-[#8B55F4] rounded-lg">
                    <span className="text-2xl font-medium">Selesai</span>
                    <span className="text-8xl">{dataTgr.filter (a => a.selesai == true).length}</span>
                  </div>
                </div>
              </div>
              {/* Akhir Partai TGR */}

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