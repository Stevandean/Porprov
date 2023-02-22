import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detail = () => {

  // ini state
  const [data, setData] = useState ([])

  const toTimerBiru = (item) => {
    // untuk dikirim ke halaman timer melalui local storage
    localStorage.setItem ('jadwalSeni', JSON.stringify(item))
    localStorage.setItem ('pesertaSeni', JSON.stringify(item.biru))

    let form = {
      id_jadwal : item.id,
      id_peserta : item.biru.id 
    }

    if (kategori.toLowerCase() === 'tunggal') {   
      axios.post (BASE_URL + "/api/tunggal/dewan", form)
      .then ((res) => {
        router.push ('/seni/timer/timer')
        console.log(res.data.message);    
      })
      .catch ((err) => {
        console.log(err.response.data.message);
      })
    } else if (kategori.toLowerCase() === 'ganda') {
      axios.post (BASE_URL + `/api/ganda/dewan`, form)
      .then (res => {
        router.push ('/seni/timer/timer')
        console.log(res.data.message);
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (kategori.toLowerCase() === 'regu') {
      axios.post (BASE_URL + `/api/regu/dewan`, form)
      .then (res => {
        router.push ('/seni/timer/timer')
        console.log(res.data.message);
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (kategori.toLowerCase() === 'solo_kreatif') {
      axios.post (BASE_URL + `/api/solo_kreatif/dewan`, form)
      .then (res => {
        router.push ('/seni/timer/timer')
        console.log('berhasil');
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else {
      console.log('gagal');
    }
  }

  const toTimerMerah = (item) => {
    // untuk dikirim ke halaman timer melalui local storage
    localStorage.setItem ('jadwalSeni',JSON.stringify (item))
    localStorage.setItem ('pesertaSeni', JSON.stringify(item.merah))

    let form = {
      id_jadwal : item.id,
      id_peserta : item.merah.id 
    }

    if (kategori.toLowerCase() === 'tunggal') {   
      axios.post (BASE_URL + "/api/tunggal/dewan", form)
      .then ((res) => {
        router.push ('/seni/timer/timer')
        console.log(res.data.message);    
      })
      .catch ((err) => {
        console.log(err.response.data.message);
      })
    } else if (kategori.toLowerCase() === 'ganda') {
      axios.post (BASE_URL + `/api/ganda/dewan`, form)
      .then (res => {
        router.push ('/seni/timer/timer')
        console.log(res.data.message);
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (kategori.toLowerCase() === 'regu') {
      axios.post (BASE_URL + `/api/regu/dewan`, form)
      .then (res => {
        router.push ('/seni/timer/timer')
        console.log(res.data.message);
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (kategori.toLowerCase() === 'solo_kreatif') {
      axios.post (BASE_URL + `/api/solo_kreatif/dewan`, form)
      .then (res => {
        router.push ('/seni/timer/timer')
        console.log('berhasil');
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else {
      console.log('gagal');
    }
  }

  // state kematian
  const router = useRouter ()
  const { jk } = router.query
  const { kategori } = router.query
  const { kelas } = router.query
  const getData = () => {
    axios.get (BASE_URL + `/api/tgr/bykelas/` + kategori + "/" + jk + "/" + kelas )
    .then (res => {
      setData (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  useEffect (() => {
    if (!router.isReady) return;
    getData ()
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
                      <Link href={'/seni/timer'} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                        <img className='p-3' src="../../../../../../svg/back.svg" />
                      </Link>
                    )
                  } else if (jk == 'putri') {
                    return (
                      <Link href={'/seni/timer/landingPageputri'} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
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

              <div className="border-2 border-[#222954] p-5 space-y-4 rounded-lg">
                {/* wrapper */}
                <>
                  {data.filter(a => a.selesai == false).map ((item, index) => (
                    <div key={index + 1} className="text-center rounded-lg shadow-lg">
                      <div className="bg-[#2C2F48] py-2 rounded-t-lg">
                        <span className='text-xl font-semibold'>Partai {item.partai} - {item.kelas} - {item.babak}</span>
                      </div>
                      {/* wrapper card */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 p-3">
                        {/* card pesilat biru */}
                        <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg mb-4 lg:mb-0">
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
                            <button className='bg-[#39ac39] hover:bg-[#2f912f] py-2 rounded-lg w-full' onClick={() => toTimerBiru(item)}>Timer</button>
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
                                  <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                )
                              } else {
                                console.log('gagal');
                              }
                            })()}
                          </div>
                          {/* kontingen pesilat merah */}
                          <span className='font-medium texy-lg text-[#2C2F48]'>{item.merah.kontingen}</span>
                          {/* action button */}
                          <div className="px-7 pb-3">
                            <button className='bg-[#39ac39] hover:bg-[#2f912f]bg-[#2C2F48] py-2 rounded-lg w-full' onClick={() => toTimerMerah(item)}>Timer</button>
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