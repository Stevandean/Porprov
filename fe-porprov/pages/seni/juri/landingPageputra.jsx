import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import socketIo from 'socket.io-client'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const landingPageputra = () => {

  // socket io
  const socket = socketIo (BASE_URL)

  const location = useRouter()
  const {pathname} = location
  const splitLoc = pathname.split ('/seni/juri/')

  const [dataTunggal, setDataTunggal] = useState ([])
  const [dataGanda, setDataGanda] = useState ([])
  const [dataRegu, setDataRegu] = useState ([])

  const getTunggal = () => {
    axios.get (BASE_URL + `/api/tgr/tunggal`)
    .then (res => {
      setDataTunggal (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const getGanda = () => {
    axios.get (BASE_URL + `/api/tgr/ganda`)
    .then (res => {
      setDataGanda (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const getRegu = () => {
    axios.get (BASE_URL + `/api/tgr/regu`)
    .then (res => {
      setDataRegu (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const ubah_data = () => socket.emit ('init_data')

  useEffect (() => {
    // socket.emit ('init_data')
    // socket.on ('getData', getTunggal)
    // socket.on ('getData', getGanda)
    // socket.on ('getData', getRegu)
    // socket.on ('change_data', ubah_data)
    return () => {
      getTunggal()
      getGanda()
      getRegu()
    }
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
          <div className="w-4/5 mx-auto py-10 space-y-6">

            {/* button putra putri */}
            <div className="grid grid-cols-2 space-x-5">
              <Link href={'./landingPageputra'} className={splitLoc[1] === 'landingPageputra' ? "bg-[#222954] rounded-lg text-center py-1" : "border-2 border-[#222954] rounded-lg text-center py-1 text-[#2C2F48]"}>
                <span className='text-2xl font-semibold'>Putra</span>
              </Link>
              <Link href={'./landingPageputri'} className={splitLoc[1] === 'LandingPageputri' ? "bg-[#222954] rounded-lg text-center py-1" : "border-2 border-[#222954] rounded-lg text-center py-1 text-[#2C2F48]"}>
                <span className='text-2xl font-semibold'>Putri</span>
              </Link>
            </div>

            <div className="grid sm:grid-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
              {/* wrapper card tunggal */}
              <div className="bg-[#222954] flex flex-col text-center rounded-lg space-y-2">
                {/* Kategori */}
                <div className="flex flex-col py-3">
                  <span className='text-3xl'>Kategori</span>
                  <span className='text-4xl font-bold'>Tunggal</span>
                </div>
                {/* wrapper pool */}
                <div className="bg-white border-x-4 border-b-4 border-[#222954] min-h-[29rem] rounded-lg space-y-6">
                  {/* vshape */}
                  <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                  {/* pool */}
                  <div className="flex flex-col px-5">
                    {dataTunggal.filter(a => a.jk == 'PUTRA').filter(a => a.aktif  == true).map (item => (
                      <Link href={'./putra/tunggal/' + item.kelas + "/" + item.babak} className="bg-[#222954] rounded-lg p-3 mb-4">
                        <span className='uppercase text-xl font-semibold'>{item.kelas} - {item.babak}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* wrapper card ganda */}
              <div className="bg-[#222954] flex flex-col text-center rounded-lg space-y-2">
                {/* Kategori */}
                <div className="flex flex-col py-3">
                  <span className='text-3xl'>Kategori</span>
                  <span className='text-4xl font-bold'>Ganda</span>
                </div>
                {/* wrapper pool */}
                <div className="bg-white border-x-4 border-b-4 border-[#222954] min-h-[29rem] rounded-lg space-y-6">
                  {/* vshape */}
                  <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                  {/* pool */}
                  <div className="flex flex-col px-5">
                    {dataGanda.filter(a => a.jk == 'PUTRA').filter(a => a.aktif == true).map (item => (
                      <Link href={'./putra/ganda/' + item.kelas + "/" + item.babak} className="bg-[#222954] rounded-lg p-3 mb-4">
                        <span className='uppercase text-xl font-semibold'>{item.kelas} - {item.babak}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* wrapper card regu */}
              <div className="bg-[#222954] flex flex-col text-center rounded-lg space-y-2">
                {/* Kategori */}
                <div className="flex flex-col py-3">
                  <span className='text-3xl'>Kategori</span>
                  <span className='text-4xl font-bold'>Regu</span>
                </div>
                {/* wrapper pool */}
                <div className="bg-white border-x-4 border-b-4 border-[#222954] min-h-[29rem] rounded-lg space-y-6">
                  {/* vshape */}
                  <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                  {/* pool */}
                  <div className="flex flex-col px-5">
                    {dataRegu.filter(a => a.jk == 'PUTRA').filter(a => a.aktif == true).map (item => (
                      <Link href={'./putra/regu/' + item.kelas + "/" + item.babak} className="bg-[#222954] rounded-lg p-3 mb-4">
                        <span className='uppercase text-xl font-semibold'>{item.kelas} - {item.babak}</span>
                      </Link>
                    ))}
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

export default landingPageputra