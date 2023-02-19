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
  
  const handle = useFullScreenHandle ()
  const {isFullscreen, setIsFullscreen} = useContext (globalState)

  const router = useRouter ()
  const location = useRouter()
  const {pathname} = location
  const splitLoc = pathname.split ('/seni/juri')

  const [dataTunggal, setDataTunggal] = useState ([])
  const [dataGanda, setDataGanda] = useState ([])
  const [dataSoloKreatif, setDataSoloKreatif] = useState ([])
  const [dataRegu, setDataRegu] = useState ([])

  const getTunggal = () => {
    axios.get (BASE_URL + `/api/tgr/get/kelas/aktif/tunggal`)
    .then (res => {
      setDataTunggal (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const getGanda = () => {
    axios.get (BASE_URL + `/api/tgr/get/kelas/aktif/ganda`)
    .then (res => {
      setDataGanda (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const getRegu = () => {
    axios.get (BASE_URL + `/api/tgr/get/kelas/aktif/regu`)
    .then (res => {
      setDataRegu (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const getSoloKreatif = () => {
    axios.get (BASE_URL + `/api/tgr/get/kelas/aktif/solo_kreatif`)
    .then (res => {
      setDataSoloKreatif (res.data.data)
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
    socket.on ('getData', getTunggal)
    socket.on ('getData', getGanda)
    socket.on ('getData', getRegu)
    socket.on ('getData', getSoloKreatif)
    socket.on ('change_data', ubah_data)
    console.log(isFullscreen);
    isLogged ()
  }, [])

  useEffect (() => {
    if (isFullscreen) {
      console.log("rs")
      handleFullscreen.enter
    } else {
    }
  }, [isFullscreen])

  return (
    <>
    <div>
      <div className="flex ">

        {/* awal konten utama */}
        <div className="w-full overflow-y-auto h-screen"> 
        
          {/* header */}
          <Navbar />
          {/* akhir header */}

          {/* konten utama */}
          <div className="bg-white text-white min-h-full">
            {/* wrapper keseluruhan */}
            <div className="w-11/12 mx-auto lg:py-10 py-5 lg:space-y-6 space-y-3">

              {/* button putra putri */}
              <div className="grid grid-cols-2 space-x-3 lg:space-x-5">
                <Link href={'/seni/juri'} className={splitLoc[1] === '' ? "bg-[#222954] rounded-lg text-center py-1 flex justify-center items-center" : "border-2 border-[#222954] rounded-lg text-center py-1 text-[#2C2F48] flex justify-center items-center"}>
                  <span className='lg:text-3xl text-xl font-semibold'>Putra</span>
                </Link>
                <Link href={'/seni/juri/landingPageputri'} className={splitLoc[1] === 'landingPageputri' ? "bg-[#222954] rounded-lg text-center py-1 flex justify-center items-center" : "border-2 border-[#222954] rounded-lg text-center py-1 text-[#2C2F48] flex justify-center items-center"}>
                  <span className='lg:text-3xl text-xl font-semibold'>Putri</span>
                </Link>
              </div>

              {/* wrapper card kategori */}
              <FullScreen handle={handle} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5">
                {/* wrapper card tunggal */}
                <div className="bg-[#222954] lg:min-h-[34rem] min-h-[23rem] flex flex-col text-center rounded-lg space-y-1">
                  {/* Kategori */}
                  <div className="flex flex-col py-3">
                    <span className='lg:text-3xl text-xl'>Kategori</span>
                    <span className='lg:text-4xl text-2xl font-bold'>Tunggal</span>
                  </div>
                  {/* wrapper pool */}
                  <div className="bg-white border-x-4 border-b-4 border-[#222954] h-full rounded-lg lg:space-y-6 space-y-3">
                    {/* vshape */}
                    <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                    {/* pool */}
                    <div className="flex flex-col px-5">
                      {dataTunggal.filter(a => a.jk == 'PUTRA').map ((item, index) => (
                        <Link key= {index + 1} href={'/seni/juri/putra/tunggal/' + item.kelas} className="bg-[#222954] rounded-lg lg:py-3 py-1.5 mb-4">
                          <span className='uppercase lg:text-xl text-base font-semibold'>{item.kelas}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* wrapper card ganda */}
                <div className="bg-[#222954] lg:min-h-[34rem] min-h-[23rem] flex flex-col text-center rounded-lg space-y-1">
                  {/* Kategori */}
                  <div className="flex flex-col py-3">
                    <span className='lg:text-3xl text-xl'>Kategori</span>
                    <span className='lg:text-4xl text-2xl font-bold'>Ganda</span>
                  </div>
                  {/* wrapper pool */}
                  <div className="bg-white border-x-4 border-b-4 border-[#222954] h-full rounded-lg lg:space-y-6 space-y-3">
                    {/* vshape */}
                    <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                    {/* pool */}
                    <div className="flex flex-col px-5">
                      {dataGanda.filter(a => a.jk == 'PUTRA').map ((item, index) => (
                        <Link key= {index + 1} href={'/seni/juri/putra/ganda/' + item.kelas} className="bg-[#222954] rounded-lg lg:py-3 py-1.5 mb-4">
                          <span className='uppercase lg:text-xl text-base font-semibold'>{item.kelas}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* wrapper card regu */}
                <div className="bg-[#222954] lg:min-h-[34rem] min-h-[23rem] flex flex-col text-center rounded-lg space-y-1">
                  {/* Kategori */}
                  <div className="flex flex-col py-3">
                    <span className='lg:text-3xl text-xl'>Kategori</span>
                    <span className='lg:text-4xl text-2xl font-bold'>Regu</span>
                  </div>
                  {/* wrapper pool */}
                  <div className="bg-white border-x-4 border-b-4 border-[#222954] h-full rounded-lg space-y-6">
                    {/* vshape */}
                    <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                    {/* pool */}
                    <div className="flex flex-col px-5">
                      {dataRegu.filter(a => a.jk == 'PUTRA').map ((item, index) => (
                        <Link key= {index + 1} href={'/seni/juri/putra/regu/' + item.kelas} className="bg-[#222954] rounded-lg p-3 mb-4">
                          <span className='uppercase text-xl font-semibold'>{item.kelas}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* wrapper card solo kreatif */}
                <div className="bg-[#222954] lg:min-h-[34rem] min-h-[23rem] flex flex-col text-center rounded-lg space-y-1">
                  {/* Kategori */}
                  <div className="flex flex-col py-3">
                    <span className='lg:text-3xl text-xl'>Kategori</span>
                    <span className='lg:text-4xl text-2xl font-bold'>Solo Kreatif</span>
                  </div>
                  {/* wrapper pool */}
                  <div className="bg-white border-x-4 border-b-4 border-[#222954] h-full rounded-lg lg:space-y-6 space-y-3">
                    {/* vshape */}
                    <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                    {/* pool */}
                    <div className="flex flex-col px-5">
                      {dataSoloKreatif.filter(a => a.jk == 'PUTRA').map ((item, index) => (
                        <Link key= {index + 1} href={'/seni/juri/putra/solo_kreatif/' + item.kelas} className="bg-[#222954] rounded-lg sm:py-1.5 py-3 mb-4">
                          <span className='uppercase lg:text-xl text-base font-semibold'>{item.kelas}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </FullScreen>

            </div>
          </div>
          <Footer />
        </div>
        {/* akhir konten utama */}
      </div>
    </div>
    </>
  )
}

export default landingPageputra