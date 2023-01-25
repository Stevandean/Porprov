import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import socketIo from 'socket.io-client'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detail = () => {

  // socket io
  const socket = socketIo (BASE_URL)

  // handling err
  const [msg, setMsg] = useState ('')

  // ini state
  const [data, setData] = useState ([])
  const [id, setId] = useState ('')

  // untuk ke dewan
  const toDewan = (selectedItem) => {

    setId (selectedItem.id)

    let form = {
      id_jadwal : selectedItem.id
    }

    axios.post (BASE_URL + "/api/hukum/tgr", form)
    .then ((res) => {
    })
    .catch ((err) => {
      console.log(err.response.data.message);
    })

    let peserta = []

    peserta.push (selectedItem)

    localStorage.setItem ('peserta', JSON.stringify(peserta))

    window.location = '/seni/dewan/dewanSeni'
  }

  // untuk ke monitor
  const toMonitor = (selectedItem) => {

    setId (selectedItem.id)

    let form = {
      id_jadwal : selectedItem.id
    }

    axios.post (BASE_URL + `/api/hukum/tgr/`, form)
    .then (res => {
    })
    .catch (err => {
      console.log(err.response.data.message);
    })

    let peserta = []

    peserta.push (selectedItem)

    localStorage.setItem ('peserta', JSON.stringify(peserta))

    window.location = '/seni/dewan/monitorSeni'
  
  }

  // state kematian
  const router = useRouter()
  const { proses } = router.query
  const { kategori } = router.query
  const { pool } = router.query
  const { kelas } = router.query

  const getData = () =>{
    axios.get(BASE_URL+ "/api/tgr/bykelas/" + kategori + "/" + pool + "/" + kelas)
    .then ((res) => {
      setData (res.data.data)
    })
    .catch((err) => {
      console.log(err.message);

      setMsg (err.response.data.message)
       console.log(msg);
    })
  }

  // untuk refresh
  const ubah_data = () => socket.emit ('init_data')

  useEffect (() => {

    if (!router.isReady) return;
      getData()

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
                  <Link href={'/seni/dewan/landingPage'} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                    <img className='p-3' src="../../../../../svg/back.svg" />
                  </Link>
                  {/* kategori & pool */}
                  <div className="flex flex-col text-center m-auto space-y-3">
                      <span className='text-4xl text-[#2C2F48] font-bold first-letter:uppercase'>{kategori}</span>
                      <span className='bg-[#51607A] rounded-lg py-3 px-5 text-xl tracking-widest	'>Pool {pool} - {kelas}</span>
                  </div>
              </div>

              {/* button proses & selesai */}
            <div className="border-2 border-[#222954] p-5 space-y-4 rounded-lg">
                <div className="grid grid-cols-2 gap-x-7">
                    <Link href={'/seni/dewan/proses/' + kategori + "/" + pool + "/" + kelas } className={proses ===  'proses' ? "bg-[#2C2F48] rounded-lg text-center py-1" : "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                        <span className='text-2xl font-semibold uppercase'>proses</span>
                    </Link>
                    <Link href={'/seni/dewan/selesai/' + kategori + "/" + pool + "/" + kelas } className={proses === 'selesai' ? "bg-[#2C2F48] rounded-lg text-center py-1": "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                        <span className='text-2xl font-semibold uppercase'>selesai</span>
                    </Link>
                </div>
                
                {(() => {

                  if (proses === 'proses') {
                    return (
                      <>
                        {/* table proses */}
                        <table className='w-full table-fixed'>
                            <thead className='text-lg text-[#2C2F48]'>
                                <tr>
                                    <th className='py-3'>No Undian</th>
                                    <th className='w-[30%]'>Nama</th>
                                    <th className='w-[30%]'>Kontingen</th>
                                    <th className='w-[20%]'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                              {data.filter(e => e.selesai == 0).map ((item) => (
                                <tr className='even:bg-[#4C4F6D] odd:bg-[#2C2F48]'>
                                    <td className='py-3'>{item.no_undian}</td>
                                    {(() => {
                                      if (kategori === 'tunggal') {
                                        return (
                                          <>
                                            <td>{item.nama1}</td>
                                          </>
                                        )
                                      } else if (kategori === 'ganda') {
                                        return (
                                          <>
                                            <td className='flex flex-col'>
                                              <span>{item.nama1}</span>
                                              <span>{item.nama2}</span>
                                            </td>
                                          </>
                                        )
                                      } else if (kategori === 'regu') {
                                        return (
                                          <>
                                            <td className='flex flex-col'>
                                              <span>{item.nama1}</span>
                                              <span>{item.nama2}</span>
                                              <span>{item.nama3}</span>
                                            </td>
                                          </>
                                        )
                                      }
                                    })()}
                                    <td>{item.kontingen}</td>
                                    <td>
                                        <div className="flex flex-row justify-center space-x-2">
                                            <button type='button' className="bg-[#253EA3] px-6 py-1 rounded-lg" onClick={() => toMonitor (item)}>
                                                <span>Monitor</span>
                                            </button>
                                            <button type='button' className="bg-[#253EA3] px-6 py-1 rounded-lg" onClick={() => toDewan (item)}>
                                                <span>Dewan</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                              ))}
                            </tbody>
                        </table>
                      </>
                    )
                  } else if (proses === 'selesai') {
                    return (
                      <>
                        {/* table Selesai */}
                        <table className='w-full table-fixed'>
                            <thead className='text-lg text-[#2C2F48]'>
                                <tr>
                                    <th className='py-3'>No Undian</th>
                                    <th className='w-[30%]'>Nama</th>
                                    <th className='w-[25%]'>Kontingen</th>
                                    <th>Waktu</th>
                                    <th>Nilai Akhir</th>
                                    <th className='w-[15%]'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                              {data.filter (e => e.selesai == 1).map ((item) => (
                                <tr className='even:bg-[#4C4F6D] odd:bg-[#2C2F48]'>
                                    <td className='py-3'>{item.no_undian}</td>
                                      {(() => {

                                        if (kategori === 'tunggal') {
                                          return (
                                            <>
                                              <td>{item.nama1}</td>
                                            </>
                                          )
                                        } else if (kategori === 'ganda') {
                                          return (
                                            <>
                                              <td className='flex flex-col'>
                                                <span>{item.nama1}</span>
                                                <span>{item.nama2}</span>
                                              </td>
                                            </>
                                          )
                                        } else if (kategori === 'regu') {
                                          return (
                                            <>
                                              <td className='flex flex-col'>
                                                <span>{item.nama1}</span>
                                                <span>{item.nama2}</span>
                                                <span>{item.nama3}</span>
                                              </td>
                                            </>
                                          )
                                        }

                                      })()}
                                    <td>{item.kontingen}</td>
                                    <td>{item.waktu}</td>
                                    <td>{item.nilai_akhir}</td>
                                    <td>
                                      <button className="bg-[#253EA3] px-6 py-1 rounded-lg"onClick={() => toMonitor(item)}>
                                          <span>Monitor</span>
                                      </button>
                                    </td>
                                </tr>
                              ))}
                            </tbody>
                        </table>

                      </>
                    )
                  }

                })()}

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