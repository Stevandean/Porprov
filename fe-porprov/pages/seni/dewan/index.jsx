import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import socketIo from 'socket.io-client'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Socket io
const socket = socketIo (BASE_URL)

const landingPagePutra = () => {
  
  const router = useRouter ()

  const location = useRouter()
  const {pathname} = location;
  const splitLoc = pathname.split ('/seni/dewan')

  const [dataTunggal, setDataTunggal] = useState([])
  const [dataGanda, setDataGanda] = useState ([])
  const [dataSoloKreatif, setDataSoloKreatif] = useState ([])
  const [dataRegu, setDataRegu] = useState ([])
  const [gelanggang, setGelanggang] = useState ([])

  const getGelanggang = () => {
    axios.get (BASE_URL + `/api/gelanggang/`)
    .then (res => {
      setGelanggang (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const getTunggal = () => {
    axios.get (BASE_URL + `/api/tgr/get/kelas/tunggal`)
    .then (res => {
      setDataTunggal (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }
  
  const getGanda= () => {
    axios.get (BASE_URL + `/api/tgr/get/kelas/ganda`)
    .then (res => {
      setDataGanda (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const getRegu = () => {
    axios.get (BASE_URL + `/api/tgr/get/kelas/regu`)
    .then (res => {
      setDataRegu (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }
  
  const getSoloKreatif = () => {
    axios.get (BASE_URL + `/api/tgr/get/kelas/solo_kreatif`)
    .then (res => {
      setDataSoloKreatif (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const isLogged = () => {
    if (localStorage.getItem ('token') === null || localStorage.getItem ('dewan') === null) {
     router.push ('/seni/dewan/login') 
    }
  }
  
  // untuk merefresh saat data berubah
  const ubah_data = () => socket.emit ('init_data')

  useEffect (() => {
    socket.emit('init_data')
    getGelanggang()
    socket.on ('getData', getTunggal)
    socket.on ('getData', getGanda)
    socket.on ('getData', getRegu)
    socket.on ('getData', getSoloKreatif)
    socket.on ('change_data', ubah_data)
    isLogged ()
  }, [])

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
                {gelanggang.map (item => (
                  <div className="flex flex-col justify-center items-center border-2 border-[#222954] py-4 rounded-xl space-y-4 mb-3">
                    <h1 className='text-2xl font-bold text-[#222954]'>Gelanggang {item.gelanggang}</h1>
                    <Link href={'./dewan/proses/' + item.gelanggang} className='font-medium bg-[#39ac39] hover:bg-[#2f912f] w-40 rounded-xl py-2 text-center'>Detail</Link>
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

export default landingPagePutra