import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import socketIo from 'socket.io-client'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const landingPageputri = () => {

  // socket io
  const socket = socketIo (BASE_URL)

  const location = useRouter()
  const {pathname} = location
  const splitLoc = pathname.split ('/seni/juri/')

  const [dataTunggal, setDataTunggal] = useState ([])
  const [dataGanda, setDataGanda] = useState ([])
  const [dataSoloKreatif, setDataSoloKreatif] = useState ([])
  const [dataRegu, setDataRegu] = useState ([])

  const getTunggal = () => {
    axios.get (BASE_URL + `/api/tgr/get/kelas/tunggal`)
    .then (res => {
      setDataTunggal (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const getGanda = () => {
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
      getSoloKreatif()
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
            <div className="w-11/12 mx-auto py-10 space-y-6">

              {/* button putra putri */}
              <div className="grid grid-cols-2 space-x-5">
                <Link href={'./landingPageputra'} className={splitLoc[1] === 'landingPageputra' ? "bg-[#222954] rounded-lg text-center py-1" : "border-2 border-[#222954] rounded-lg text-center py-1 text-[#2C2F48]"}>
                  <span className='lg:text-3xl text-xl font-semibold'>Putra</span>
                </Link>
                <Link href={'./landingPageputri'} className={splitLoc[1] === 'landingPageputri' ? "bg-[#222954] rounded-lg text-center py-1" : "border-2 border-[#222954] rounded-lg text-center py-1 text-[#2C2F48]"}>
                  <span className='lg:text-3xl text-xl font-semibold'>Putri</span>
                </Link>
              </div>

              {/* wrapper card kategori */}
              <div className="grid sm:grid-grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5">
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
                      {dataTunggal.filter(a => a.jk == 'PUTRI').filter(a => a.aktif == true).map (item => (
                        <Link href={'./putri/tunggal/'  + item.kelas + "/" + item.babak} className="bg-[#222954] rounded-lg lg:py-3 py-1.5 mb-4">
                          <span className='uppercase lg:text-xl text-base font-semibold'>{item.kelas} - {item.babak}</span>
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
                      {dataGanda.filter(a => a.jk == 'PUTRI').filter(a => a.aktif == true).map (item => (
                        <Link href={'./putri/ganda/' + item.kelas + "/" + item.babak} className="bg-[#222954] rounded-lg lg:py-3 lg-1.5 mb-4">
                          <span className='uppercase lg:text-xl text-base font-semibold'>{item.kelas} - {item.babak}</span>
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
                      {dataSoloKreatif.filter(a => a.jk == 'PUTRI').filter(a => a.aktif == true).map (item => (
                        <Link href={'./putri/solo_kreatif/' + item.kelas + "/" + item.babak} className="bg-[#222954] rounded-lg lg:py-3 py-1.5 mb-4">
                          <span className='uppercase lg:text-xl text-base font-semibold'>{item.kelas} - {item.babak}</span>
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
                  <div className="bg-white border-x-4 border-b-4 border-[#222954] h-full rounded-lg lg:space-y-6 space-y-3">
                    {/* vshape */}
                    <img className='w-full -mt-6' src="../../svg/vshape.svg" />
                    {/* pool */}
                    <div className="flex flex-col px-5">
                      {dataRegu.filter(a => a.jk == 'PUTRI').filter(a => a.aktif == true).map (item => (
                        <Link href={'./putri/regu/' + item.kelas + "/" + item.babak} className="bg-[#222954] rounded-lg lg:py-3 py-1.5 mb-4">
                          <span className='uppercase lg:text-xl text-base font-semibold'>{item.kelas} - {item.babak}</span>
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

export default landingPageputri