import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios'
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import socketIo from 'socket.io-client'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// socket io
const socket = socketIo (BASE_URL)

const detail = () => {

  // ini state
  const [data, setData] = useState ([])
  const [status, setStatus] = useState('selesai')

  // untuk ke details selesai
  const toDetailSelesaiBiru = async (item) => {
    // untuk di kirim ke halaman detail selesai melalui local storage
    localStorage.setItem ('id_jadwal', (item.id))
    localStorage.setItem ('pesertaSeni', JSON.stringify (item.biru))
    localStorage.setItem ('babak', JSON.stringify (item))

    let form = {
      id_jadwal : item.id,
      id_peserta : item.merah.id
    }

    if (kategori == 'tunggal') {
      axios.post (BASE_URL + `/api/tunggal/dewan`, form)
      .then (res => {
        router.push ('/seni/layar/timer')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (kategori == 'ganda') {
      axios.post (BASE_URL + `/api/ganda/dewan`, form)
      .then (res => {
        router.push ('/seni/layar/timer')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (kategori == 'regu') {
      axios.post (BASE_URL + `/api/regu/dewan`, form)
      .then (res => {
        router.push ('/seni/layar/timer')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (kategori == 'solo_kreatif') {
      axios.post (BASE_URL + `/api/solo_kreatif/dewan`, form)
      .then (res => {
        router.push ('/seni/layar/timer')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else {
      console.log('gagal');
    }
  }
  
  const toDetailSelesaiMerah = async (item) => {
    // untuk di kirim ke halaman detail selesai melalui local storage
    localStorage.setItem ('id_jadwal', (item.id))
    localStorage.setItem ('pesertaSeni', JSON.stringify (item.merah))
    localStorage.setItem ('babak', JSON.stringify (item))

    let form = {
      id_jadwal : item.id,
      id_peserta : item.merah.id
    }

    if (kategori == 'tunggal') {
      axios.post (BASE_URL + `/api/tunggal/dewan`, form)
      .then (res => {
        router.push ('/seni/layar/timer')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (kategori == 'ganda') {
      axios.post (BASE_URL + `/api/ganda/dewan`, form)
      .then (res => {
        router.push ('/seni/layar/timer')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (kategori == 'regu') {
      axios.post (BASE_URL + `/api/regu/dewan`, form)
      .then (res => {
        router.push ('/seni/layar/timer')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (kategori == 'solo_kreatif') {
      axios.post (BASE_URL + `/api/solo_kreatif/dewan`, form)
      .then (res => {
        router.push ('/seni/layar/timer')
      })
      .catch (err => {
        console.log(err.response.data.message);
      }) 
    }else {
      console.log('gagal');
    }
  }

  // state kematian
  const router = useRouter()
  const { kategori } = router.query
  const { kelas } = router.query
  const { jk } = router.query
  const { babak } = router.query

  const getData = () => {
    axios.get (BASE_URL+ "/api/tgr/bykelas/" + kategori + "/" + jk + "/" + kelas)
    .then ((res) => {
      setData (res.data.data)
    })
    .catch((err) => {
      console.log(err.message);

      setMsg (err.response.data.message)
    })
  }

  // untuk refresh
  const ubah_data = () => socket.emit ('init_data')

  useEffect (() => {
    if (!router.isReady) return;
    socket.emit ('init_data')
    socket.on ('getData', getData)
    socket.on ('change_data', ubah_data)
  }, [router.query.kategori, router.isReady])

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
              {/* wrapper kategori & pool */}
              <div className="flex">
                {/* button back */}
                {(() => {
                  if (jk == 'putra') {
                    return (
                      <Link href={'/seni/layar/'} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                        <img className='p-3' src="../../../../../../svg/back.svg" />
                      </Link>
                    )
                  } else if (jk == 'putri') {
                    return (
                      <Link href={'/seni/layar/landingPageputri'} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                        <img className='p-3' src="../../../../../../svg/back.svg" />
                      </Link>
                    )
                  }
                })()}
                {/* kategori & pool */}
                <div className="flex flex-col text-center m-auto space-y-3">
                  {(() => {
                    if (kategori == 'solo_kreatif') {
                      return (
                        <span className='text-4xl text-[#2C2F48] font-bold first-letter:uppercase'>Solo Kreatif</span>
                      )
                    } else {
                      return (
                        <span className='text-4xl text-[#2C2F48] font-bold first-letter:uppercase'>{kategori}</span>
                      )
                    }
                  })()}
                    <span className='bg-[#51607A] rounded-lg py-3 px-5 text-xl tracking-widest	'>{kelas}</span>
                </div>
              </div>

              {/* button proses & selesai */}
              <div className="grid grid-cols-2 gap-x-7">
                <Link href={'/seni/layar/proses/' + jk + "/" + kategori + "/" + kelas} className={status === 'proses' ? "bg-[#2C2F48] rounded-lg text-center py-1" : "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                  <span className='text-2xl font-semibold uppercase'>proses</span>
                </Link>
                <Link href={'/seni/layar/selesai/' + jk + "/" + kategori + "/" + kelas} className={status === 'selesai' ? "bg-[#2C2F48] rounded-lg text-center py-1": "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                  <span className='text-2xl font-semibold uppercase'>selesai</span>
                </Link>
              </div>

              <div className="border-2 border-[#222954] p-5 space-y-4 rounded-lg">
                {/* // wrapper */}
                <>
                  {data.filter(a => a.selesai == true).map (item => (
                    <div className="text-center rounded-lg shadow-lg">
                      <div className="bg-[#2C2F48] py-2 rounded-t-lg">
                        <span className='text-xl font-semibold'>Partai {item.partai} - {item.kelas} - {item.babak}</span>
                      </div>
                      {/* wrapper card */}
                      <div className="grid grid-cols-2 gap-x-7 p-3">
                        {/* card pesilat biru */}
                        <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                          {/* nama pesilat biru */}
                          <div className="bg-blue-700 rounded-t-lg py-1">
                            {(() => {
                              if (kategori.toLowerCase() == 'tunggal') {
                                return (
                                  <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                )
                              } else if (kategori.toLowerCase() == 'ganda') {
                                return (
                                  <span className='text-xl font-medium'>{item.biru.nama1} - {item.biru.nama2}</span>
                                )
                              } else if (kategori.toLowerCase() == 'regu') {
                                return (
                                  <span className='text-xl font-medium'>{item.biru.nama1} - {item.biru.nama2} - {item.biru.nama3}</span>
                                )
                              } else if (kategori.toLowerCase() == 'solo_kreatif') {
                                return (
                                  <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                )
                              } else {
                                console.log('gagal');
                              }
                            })()}
                          </div>
                          {/* kontingen pesilat biru */}
                          <span className='font-medium texy-lg text-[#2C2F48]'>{item.biru.kontingen}</span>
                          {/* action button */}
                          <div className="px-7 pb-3">
                            <div className="grid grid-rows-2 mt-2 gap-x-7 gap-y-0.5 mb-5">
                              <div className="grid grid-cols-2">
                                <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Hukuman</span>
                                <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.skor_biru?.total_hukum?.toFixed(2)}</span>
                              </div>
                              <div className="grid grid-cols-2">
                                <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Waktu</span>
                                <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.skor_biru?.waktu}</span>
                              </div>
                              <div className="grid grid-cols-2">
                                <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Standart Deviasi</span>
                                <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.skor_biru?.deviasi}</span>
                              </div>
                              <div className="grid grid-cols-2">
                                <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1 text-xl'>Skor Akhir</span>
                                <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg text-xl font-bold'>{item.skor_biru?.skor_akhir.toFixed(2)}</span>
                              </div>
                            </div>
                            {/* detail nilai button */}
                            <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold mb-1.5' onClick={() => toDetailSelesaiBiru(item)}>Layar</button>
                            {/* detail jurus button */}
                          </div>
                        </div>
                        {/* card pesilat merah */}
                        <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                          {/* nama pesilat merah */}
                          <div className="bg-red-700 rounded-t-lg py-1">
                            {(() => {
                              if (kategori.toLowerCase() === 'tunggal') {
                                return (
                                  <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                )
                              } else if (kategori.toLowerCase() === 'ganda') {
                                return (
                                  <span className='text-xl font-medium'>{item.merah.nama1} - {item.merah.nama2}</span>
                                )
                              } else if (kategori.toLowerCase() == 'regu') {
                                return (
                                  <span className='text-xl font-medium'>{item.merah.nama1} - {item.merah.nama2} - {item.merah.nama3}</span>
                                )
                              } else if (kategori.toLowerCase() == 'solo_kreatif') {
                                return (
                                  <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                )
                              }
                            })()}
                          </div>
                          {/* kontingen pesilat merah */}
                          <span className='font-medium texy-lg text-[#2C2F48]'>{item.merah.kontingen}</span>
                          {/* action button */}
                          <div className="px-7 pb-3">
                            <div className="grid grid-rows-2 mt-2 gap-x-7 gap-y-0.5 mb-5">
                              <div className="grid grid-cols-2">
                                <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Hukuman</span>
                                <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.skor_biru?.total_hukum?.toFixed(2)}</span>
                              </div>
                              <div className="grid grid-cols-2">
                                <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Waktu</span>
                                <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.skor_biru?.waktu}</span>
                              </div>
                              <div className="grid grid-cols-2">
                                <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Standart Deviasi</span>
                                <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.skor_biru?.deviasi}</span>
                              </div>
                              <div className="grid grid-cols-2">
                                <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1 text-xl'>Skor Akhir</span>
                                <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg text-xl font-bold'>{item.skor_biru?.skor_akhir.toFixed(2)}</span>
                              </div>
                            </div>
                            {/* detail nilai button */}
                            <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold mb-1.5' onClick={() => toDetailSelesaiMerah(item)}>Layar</button>
                            {/* detail jurus button */}
                          </div>
                        </div>   
                      </div>
                    </div>
                  ))}
                </>
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