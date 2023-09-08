import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios'
import Navbar from '../../component/navbar/navbar'
import Footer from '../components/footer';
import socketIo from 'socket.io-client'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// socket io
const socket = socketIo (BASE_URL)

const detail = () => {

  // state kematian
  const router = useRouter()
  
  // ini state
  const [data, setData] = useState ([])
  const [jadwal, setJadwal] = useState ([])
  const [nilaiBiru, setNilaiBiru] = useState([])
  const [nilaiMerah, setNilaiMerah] = useState([])

  const headerConfig = () => {
    let token = localStorage.getItem("token")
    let header = {
    headers : { Authorization : `Bearer ${token}` }
    }
    return header
  }

  // untuk ke details selesai
  const toDetailSelesaiBiru = async (item) => {
    // untuk di kirim ke halaman detail selesai melalui local storage
    localStorage.setItem ('jadwalSeni', JSON.stringify(item))
    localStorage.setItem ('pesertaSeni', JSON.stringify (item.biru))

    let form = {
      id_jadwal : item.id,
      id_peserta : item.merah.id
    }

    if (item.kategori.toLowerCase() == 'tunggal') {
      router.push ('/seni/layar/timer')
    } else if (item.kategori.toLowerCase() == 'ganda') {
      router.push ('/seni/layar/timer')
    } else if (item.kategori.toLowerCase() == 'regu') {
        router.push ('/seni/layar/timer')
    } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
      router.push ('/seni/layar/timer')
    } else {
      console.log('gagal');
    }
  }
  
  const toDetailSelesaiMerah = async (item) => {
    // untuk di kirim ke halaman detail selesai melalui local storage
    localStorage.setItem ('jadwalSeni', JSON.stringify(item))
    localStorage.setItem ('pesertaSeni', JSON.stringify (item.merah))

    let form = {
      id_jadwal : item.id,
      id_peserta : item.merah.id
    }

    if (item.kategori.toLowerCase() == 'tunggal') {
      router.push ('/seni/layar/timer')
    } else if (item.kategori.toLowerCase() == 'ganda') {
      router.push ('/seni/layar/timer')
    } else if (item.kategori.toLowerCase() == 'regu') {
        router.push ('/seni/layar/timer')
    } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
      router.push ('/seni/layar/timer')
    } else {
      console.log('gagal');
    }
  }

  // const getNilaiBiru = async () =>{
  //   const jadwal = JSON.parse (localStorage.getItem ('jadwalSeni'))
  //   await axios.get(BASE_URL + `/api/seni/detail/${jadwal.id_nilai_biru}`)
  //   .then(res =>{
  //     setNilaiBiru(res.data.data)
  //     // console.log(res.data.data);
  //   })
  //   .catch(error=>{
  //     console.log(error.message)
  //     console.log(error.response.data.message);
  //   })    
  // }

  const getJadwal = async () => {
    const jadwal = JSON.parse (localStorage.getItem ('jadwalSeni'))
    await axios.get(BASE_URL + `/api/seni/jadwal/id/${jadwal.id}`, headerConfig())
    .then(res =>{
      setJadwal(res.data.data)
      // console.log(res.data.data);
    })
    .catch(error=>{
      console.log(error.message)
      console.log(error.response.data.message);
    })    
  }

  // untuk refresh
  // const ubah_data = () => socket.emit ('init_data')

  useEffect (() => {
    // socket.emit ('init_data')
    // // socket.on ('getData', getData)
    // socket.on ('change_data', ubah_data)
    // getData()
    // getNilaiBiru ()
    getJadwal ()
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
            <div className="w-11/12 mx-auto py-10 space-y-5">

              {/* wrapper kategori & pool */}
              <div className="flex w-full gap-x-5 h-14">
                {/* button back */}
                <button onClick={() => router.back()} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                  <img className='p-3' src="../../svg/back.svg" />
                </button>
                {/* kategori & pool */}
                <div className="flex flex-col text-center m-auto space-y-3 w-full">
                  <span className='bg-[#2C2F48] rounded-lg py-3 px-5 text-3xl tracking-widest font-montserrat font-bold'>Partai {jadwal.partai} - {jadwal.kategori}</span>
                </div>
              </div>

              <div className="border-2 border-[#222954] p-5 space-y-4 rounded-lg">

                <div className="text-center rounded-lg shadow-lg pb-5">
                  <div className="bg-[#2C2F48] py-2 rounded-t-lg">
                    <span className='text-xl font-montserrat font-bold'>Partai {jadwal.partai} - {jadwal.golongan} - {jadwal.babak}</span>
                  </div>
                  {/* wrapper card */}
                  <div className="grid grid-cols-2 gap-x-7 p-3">
                    {/* card pesilat biru */}
                    <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                      {/* nama pesilat biru */}
                      <div className="bg-blue-700 rounded-t-lg py-1 flex flex-col">
                        {(() => {
                          if (jadwal.kategori == 'TUNGGAL') {
                            return (
                              <span className='text-xl font-medium'>{jadwal.biru?.nama1}</span>
                              )
                          } else if (jadwal.kategori == 'GANDA') {
                            return (
                              <>
                                <span className='text-xl font-medium'>{jadwal.biru?.nama1}</span>
                                <span className='text-xl font-medium'>{jadwal.biru?.nama2}</span>
                              </>
                              )
                          } else if (jadwal.kategori == 'REGU') {
                            return (
                              <>
                                <span className='text-xl font-medium'>{jadwal.biru?.nama1}</span>
                                <span className='text-xl font-medium'>{jadwal.biru?.nama2}</span>
                                <span className='text-xl font-medium'>{jadwal.biru?.nama3}</span>
                              </>
                            )
                          } else if (jadwal.kategori == 'SOLO_KREATIF') {
                            return (
                              <span className='text-xl font-medium'>{jadwal.biru?.nama1}</span>
                            )
                          } else {
                            console.log('gagal');
                          }
                        })()}
                      </div>
                      {/* kontingen pesilat biru */}
                      <span className='font-medium texy-lg text-[#2C2F48]'>{jadwal.biru?.kontingen}</span>
                      {/* score & selesai button */}
                      <div className="px-7 pb-3">
                        <div className="grid grid-rows-2 mt-2 gap-x-7 gap-y-0.5 mb-5">
                          <div className="grid grid-cols-2">
                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Hukuman</span>
                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{jadwal.nilai_biru?.hukuman?.toFixed(2)}</span>
                          </div>
                          <div className="grid grid-cols-2">
                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Waktu</span>
                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{jadwal.nilai_biru?.waktu}</span>
                          </div>
                          <div className="grid grid-cols-2">
                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Standart Deviasi</span>
                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{jadwal.nilai_biru?.deviasi}</span>
                          </div>
                          <div className="grid grid-cols-2">
                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1 text-xl'>Skor Akhir</span>
                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg text-xl font-bold'>{jadwal.nilai_biru?.skor_akhir?.toFixed(2)}</span>
                          </div>
                        </div>
                        {/* detail nilai button */}
                        <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold mb-1.5' onClick={() => toDetailSelesaiBiru(jadwal)}>Detail Nilai</button>
                        {/* detail jurus button */}
                        {(() => {
                          if (jadwal.kategori == 'tunggal' || jadwal.kategori == 'regu') {
                            return ( 
                              <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold'onClick={() => toDetailJurusBiru (jadwal)}>Details Jurus</button>
                            )
                          }
                        })()}
                      </div>
                    </div>
                    {/* card pesilat merah */}
                    <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                      {/* nama pesilat merah */}
                      <div className="bg-red-700 rounded-t-lg py-1 flex flex-col">
                        {(() => {
                          if (jadwal.kategori === 'TUNGGAL') {
                            return (
                              <span className='text-xl font-medium'>{jadwal.merah.nama1}</span>                                        
                            )
                          } else if (jadwal.kategori === 'GANDA') {
                            return (
                              <>
                                <span className='text-xl font-medium'>{jadwal.merah.nama1}</span>                                        
                                <span className='text-xl font-medium'>{jadwal.merah.nama2}</span>                                        
                              </>
                            )
                          } else if (jadwal.kategori == 'REGU') {
                            return (
                              <>
                                <span className='text-xl font-medium'>{jadwal.biru.nama1}</span>
                                <span className='text-xl font-medium'>{jadwal.biru.nama2}</span>
                                <span className='text-xl font-medium'>{jadwal.biru.nama3}</span>
                              </>
                            )
                          } else if (jadwal.kategori === 'SOLO_KREATIF') {
                            return (
                              <span className='text-xl font-medium'>{jadwal.merah.nama1}</span>                                        
                            )
                          }
                        })()}
                      </div>
                      {/* kontingen pesilat merah */}
                      <span className='font-medium texy-lg text-[#2C2F48]'>{jadwal.merah?.kontingen}</span>
                      {/* score & selesai button */}
                      <div className="px-7 pb-3">
                        <div className="grid grid-rows-2 mt-2 gap-x-7 gap-y-0.5 mb-5">
                          <div className="grid grid-cols-2">
                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Hukuman</span>
                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{jadwal.nilai_merah?.hukuman?.toFixed(2)}</span>
                          </div>
                          <div className="grid grid-cols-2">
                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Waktu</span>
                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{jadwal.nilai_merah?.waktu}</span>
                          </div>
                          <div className="grid grid-cols-2">
                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Standart Deviasi</span>
                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{jadwal.nilai_merah?.deviasi}</span>
                          </div>
                          <div className="grid grid-cols-2">
                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold text-xl py-1'>Skor Akhir</span>
                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold text-xl'>{jadwal.nilai_merah?.skor_akhir.toFixed(2)}</span>
                          </div>
                        </div>
                        {/* detail nilai button */}
                        <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold mb-1'onClick={() => toDetailSelesaiMerah (jadwal)}>Detail Nilai</button>
                      </div>
                    </div>
                  </div>
                  {/* winner */}
                  <div className="flex flex-col px-3 space-y-1">
                    
                    {(() => {
                      if (jadwal.selesai == 1) {
                        if(jadwal.id_pemenang == jadwal.id_peserta_merah){
                          return(
                            <>
                            <span className='text-[#2C2F48] text-3xl font-bold'>Pemenang :</span>
                            <span className='bg-red-600 text-lg font-bold rounded-lg py-3'>Sudut Merah</span>
                            </>
                            )
                        } else if(jadwal.id_pemenang == jadwal.id_peserta_biru){
                          return(
                            <>
                            <span className='text-[#2C2F48] text-3xl font-bold'>Pemenang :</span>
                            <span className='bg-blue-700 text-lg font-bold rounded-lg py-3'>Sudut Biru</span>
                            </>
                            )
                          }
                        }
                    })()}
                    
                    
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

export default detail