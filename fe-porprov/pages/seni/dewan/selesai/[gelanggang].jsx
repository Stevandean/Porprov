import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import socketIo from 'socket.io-client'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// socket io
const socket = socketIo (BASE_URL)

const detail = () => {

  // state kematian
  const router = useRouter()
  const { gelanggang } = router.query
  const [proses] = useState ('selesai')
  
  // ini state
  const [data, setData] = useState ([])
  const [jadwal, setJadwal] = useState ([])

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
      axios.post (BASE_URL + `/api/tunggal/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/detailSelesai')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() == 'ganda') {
      axios.post (BASE_URL + `/api/ganda/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/detailSelesai')
      })
      .catch (err => {
        console.log('gagal');
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() == 'regu') {
      axios.post (BASE_URL + `/api/regu/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/detailSelesai')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
      axios.post (BASE_URL + `/api/solo_kreatif/dewan`)
      .then (res => {
        router.push ('/seni/dewan/detailSelesai')
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
    localStorage.setItem ('jadwalSeni', JSON.stringify(item))
    localStorage.setItem ('pesertaSeni', JSON.stringify (item.merah))

    let form = {
      id_jadwal : item.id,
      id_peserta : item.merah.id
    }

    if (item.kategori.toLowerCase() === 'tunggal') {
      axios.post (BASE_URL + `/api/tunggal/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/detailSelesai')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() === 'ganda') {
      axios.post (BASE_URL + `/api/ganda/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/detailSelesai')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() === 'regu') {
      axios.post (BASE_URL + `/api/regu/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/detailSelesai')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() === 'solo_kreatif') {
      axios.post (BASE_URL + `/api/solo_kreatif/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/detailSelesai')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else {
      console.log('gagal');
    }
  }

  // untuk ke details jurus
  const toDetailJurusBiru = async (item) => {
    // untuk dikirim ke halaman details jurus melalui local storage
    localStorage.setItem ('pesertaSeni', JSON.stringify(item.biru))
    localStorage.setItem ('jadwalSeni', JSON.stringify(item))

    router.push ('/seni/dewan/detailJurus')
  }

  const toDetailJurusMerah = async (item) => {
    // untuk dikirim ke halaman details jurus melalui local storage
    localStorage.setItem ('pesertaSeni', JSON.stringify(item.merah))
    localStorage.setItem ('jadwalSeni', JSON.stringify(item))

    router.push ('/seni/dewan/detailJurus')
  }

  const getData = () => {
    axios.get (BASE_URL+ "/api/tgr/gel/" + gelanggang)
    .then ((res) => {
      setData (res.data.data)
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

  const getJadwal = () => {
    axios.get (BASE_URL + `/api/tgr`)
    .then (res => {
      setJadwal (res.data.data)

    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  // untuk refresh
  const ubah_data = () => socket.emit ('init_data')

  useEffect (() => {
    if (!router.isReady) return;
    socket.emit ('init_data')
    socket.on ('getData', getData)
    socket.on ('change_data', ubah_data)
    getData()
    getJadwal ()
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
            <div className="w-11/12 mx-auto py-10 space-y-5">

              {/* wrapper kategori & pool */}
              <div className="flex w-full gap-x-5 h-14">
                {/* button back */}
                  <Link href={'/seni/dewan'} className="bg-red-700 rounded-lg w-14 h-full flex m-auto">
                    <img className='p-1.5' src="../../../../../../svg/back.svg" />
                  </Link>
                {/* kategori & pool */}
                <div className="flex flex-col text-center m-auto space-y-3 w-full">
                  <span className='bg-[#2C2F48] rounded-lg py-3 px-5 text-3xl tracking-widest'>GELANGGANG {gelanggang}</span>
                </div>
              </div>

                {/* button proses & selesai */}
                <div className="grid grid-cols-2 gap-x-7">
                    <Link href={'/seni/dewan/proses/' + gelanggang} className={proses ===  'proses' ? "bg-[#2C2F48] rounded-lg text-center py-1" : "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                        <span className='text-2xl font-semibold uppercase'>proses</span>
                    </Link>
                    <Link href={'/seni/dewan/selesai/' + gelanggang} className={proses === 'selesai' ? "bg-[#2C2F48] rounded-lg text-center py-1": "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                        <span className='text-2xl font-semibold uppercase'>selesai</span>
                    </Link>
                </div>

                {data.filter(a => a.selesai == true).map ((item, index) => (
                  <div key={index + 1} className="text-center rounded-lg shadow-lg pb-5">
                    <div className="bg-[#2C2F48] py-2 rounded-t-lg">
                      <span className='text-xl font-semibold'>Partai {item.partai} - {item.kelas} - {item.babak}</span>
                    </div>
                    {/* wrapper card */}
                    <div className="grid grid-cols-2 gap-x-7 p-3">
                      {/* card pesilat biru */}
                      <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                        {/* nama pesilat biru */}
                        <div className="bg-blue-700 rounded-t-lg py-1 flex flex-col">
                          {(() => {
                            if (item.kategori.toLowerCase() == 'tunggal') {
                              return (
                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                )
                            } else if (item.kategori.toLowerCase () == 'ganda') {
                              return (
                                <>
                                  <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                  <span className='text-xl font-medium'>{item.biru.nama2}</span>
                                </>
                                )
                            } else if (item.kategori.toLowerCase() == 'regu') {
                              return (
                                <>
                                  <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                  <span className='text-xl font-medium'>{item.biru.nama2}</span>
                                  <span className='text-xl font-medium'>{item.biru.nama3}</span>
                                </>
                              )
                            } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
                              return (
                                  <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                )
                            } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
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
                        {/* score & selesai button */}
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
                          <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold mb-1.5' onClick={() => toDetailSelesaiBiru(item)}>Detail Nilai</button>
                          {/* detail jurus button */}
                          {(() => {
                            if (item.kategori.toLowerCase() == 'tunggal' || item.kategori.toLowerCase() == 'regu') {
                              return ( 
                                <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold'onClick={() => toDetailJurusBiru (item)}>Details Jurus</button>
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
                            if (item.kategori.toLowerCase() === 'tunggal') {
                              return (
                                <span className='text-xl font-medium'>{item.merah.nama1}</span>                                        
                              )
                            } else if (item.kategori.toLowerCase() === 'ganda') {
                              return (
                                <>
                                  <span className='text-xl font-medium'>{item.merah.nama1}</span>                                        
                                  <span className='text-xl font-medium'>{item.merah.nama2}</span>                                        
                                </>
                              )
                            } else if (item.kategori.toLowerCase() == 'regu') {
                              return (
                                <>
                                  <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                  <span className='text-xl font-medium'>{item.biru.nama2}</span>
                                  <span className='text-xl font-medium'>{item.biru.nama3}</span>
                                </>
                              )
                            } else if (item.kategori.toLowerCase() === 'solo_kreatif') {
                              return (
                                <span className='text-xl font-medium'>{item.merah.nama1}</span>                                        
                              )
                            }
                          })()}
                        </div>
                        {/* kontingen pesilat merah */}
                        <span className='font-medium texy-lg text-[#2C2F48]'>{item.merah.kontingen}</span>
                        {/* score & selesai button */}
                        <div className="px-7 pb-3">
                          <div className="grid grid-rows-2 mt-2 gap-x-7 gap-y-0.5 mb-5">
                            <div className="grid grid-cols-2">
                              <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Hukuman</span>
                              <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.skor_merah?.total_hukum?.toFixed(2)}</span>
                            </div>
                            <div className="grid grid-cols-2">
                              <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Waktu</span>
                              <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.skor_mereah?.waktu}</span>
                            </div>
                            <div className="grid grid-cols-2">
                              <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Standart Deviasi</span>
                              <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.skor_merah?.deviasi}</span>
                            </div>
                            <div className="grid grid-cols-2">
                              <span className='bg-[#2C2F48] rounded-l-lg font-semibold text-xl py-1'>Skor Akhir</span>
                              <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold text-xl'>{item.skor_merah?.skor_akhir.toFixed(2)}</span>
                            </div>
                          </div>
                          {/* detail nilai button */}
                          <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold mb-1'onClick={() => toDetailSelesaiMerah (item)}>Detail Nilai</button>
                          {/* detail jurus button */}
                          {(() => {
                            if (item.kategori.toLowerCase() == 'tunggal' || item.kategori.toLowerCase() == 'regu') {
                              return ( 
                                <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold'onClick={() => toDetailJurusMerah (item)}>Details Jurus</button>
                              )
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                    {/* winner */}
                    <div className="flex flex-col px-3 space-y-1">
                      <span className='text-[#2C2F48] text-3xl font-bold'>Pemenang :</span>
                      {(() => {
                        if(item.id_pemenang == item.id_merah){
                          return(
                            <span className='bg-red-600 text-lg font-bold rounded-lg py-3'>SUDUT MERAH</span>
                          )
                        } else if(item.id_pemenang == item.id_biru){
                          return(
                            <span className='bg-blue-700 text-lg font-bold rounded-lg py-3'>SUDUT BIRU</span>
                          )
                        }
                      })()}
                    </div>
                  </div>
                ))}
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