import React, { useContext, useState, useEffect } from 'react'
import { globalState } from '../../../context/context'
import axios from 'axios'
import socketIo from 'socket.io-client'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Timer from '../components/timer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const socket = socketIo (BASE_URL)

const timer = () => {

  const {duration, setDuration} = useContext(globalState)  
  const {running, setRunning} = useContext(globalState)  
  const [aktif, setAktif] = useState (0)

  const start = () => {
    setDuration (1000)
    setRunning (true)
  }

  const selesai = () => {
    setRunning (false)

    const peserta = JSON.parse (localStorage.getItem ('peserta'))
    const jadwal = (localStorage.getItem ('jadwal'))

    let id_peserta = peserta.id
    let id_jadwal = jadwal
    
    // set waktu
    let minute = `${("0" + Math.floor((duration / 1000 / 60) % 60)).slice(-2)}`
    let second = `${("0" + Math.floor((duration / 1000) %60)) .slice(-2)}`
    let time = `${minute} : ${second}`

    let form = {
      waktu : time
    }

    axios.put (BASE_URL + `/api/tgr/selesai/${id_jadwal}/${id_peserta}`, form)
    .then (res => {
      console.log(res.data.message);
      console.log('test');
    })
    .catch (err => {
      console.log(err.message);
      console.log('gagal');
    })
  }

  const mulai = () => {
    const peserta = JSON.parse(localStorage.getItem('peserta'))
    const jadwal = (localStorage.getItem ('jadwal'))

    let id_jadwal = jadwal
    let id_peserta = peserta.id


    if (aktif == false) {
      let form = {
        aktif : 1
      }

      if (confirm ('Anda yakin untuk memulai pertandingan?') == 1) {
        axios.put (BASE_URL + `/api/tgr/${id_jadwal}`, form)
        .then (res => {
          socket.emit ('editData')
          console.log(res.data.message);
        })
        .catch (err => {
          console.log(err.message);
        })
      }
    } else if (aktif == true) {
      let form = {
        aktif : 0
      }

      if (confirm ('Anda yakin untuk mengakhiri pertandingan?') == 1) {
        axios.put (BASE_URL + `/api/tgr/${id_jadwal}`, form)
        .then (res => {
            socket.emit ('editData')
            console.log(res.data.message);
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
      }
    }
  }

  const getHukum = async () => {
    const peserta = JSON.parse(localStorage.getItem('peserta'))
    const jadwal = (localStorage.getItem ('jadwal'))

    let id_jadwal = jadwal
    let id_peserta = peserta.id

    await axios.get (BASE_URL + `/api/hukum/tgr/jadwal/${id_jadwal}/${id_peserta}`)
    .then ((res) => {
        setAktif (res.data.data.jadwal.aktif)
    })
    .catch ((err) => {
        console.log(err.message);
    })
  }

  const ubah_data = () => socket.emit ('init_data')


  useEffect(() => {
    return () => {
      socket.emit ('init_data')
      socket.on('getData', getHukum)
      socket.on ('change_data', ubah_data)

    }
  }, [])
  

  return (
    <>
    <div className="flex ">

      {/* awal konten utama */}
      <div className="w-full overflow-y-auto h-screen my-auto"> 
      
        {/* header */}
        <div className="lg:block hidden">
          <Navbar />
        </div>
        {/* akhir header */}

        {/* konten utama */}
        <div className="bg-white text-white min-h-full m-auto">
          {/* wrapper keseluruhan */}
          <div className="w-3/5 mx-auto lg:py-10 py-5 lg:space-y-10 space-y-5">
            {/* wrapper nama */}
            <div className="justify-center items-center flex border-2 border-black rounded-lg bg-blue-700">
              <span className='lg:text-4xl text-xl font-bold text-white tracking-widest py-2.5'>Partai 1 - Putra - Dewasa</span>
            </div>

            {/* wrapper timer and aktif button */}
            <div className="flex flex-col space-y-5 border-2 border-black p-5 rounded-lg">
              <div className="flex justify-center items-center rounded-lg">
                {(() => {
                  if (aktif == 1) {
                    return (
                      <button onClick={() => mulai()} className='lg:text-3xl text-lg font-semibold lg:py-4 py-2 bg-green-500'>Aktif</button>
                    )
                } else if (aktif == 0) {
                    return (
                      <button onClick={() => mulai()} className='lg:text-3xl text-lg font-semibold lg:py-4 py-2 bg-red-600 hover:bg-red-700'>Non Aktif</button>
                    )
                  }
                })()}
              </div>
              <div className="grid grid-cols-12">
                <button onClick={() => selesai()} className="col-span-2 bg-green-500 rounded-l-lg flex justify-center items-center">
                  <svg className='w-32' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_429_11249)">
                      <path d="M20 7.00018L10 17.0002L5 12.0002" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_429_11249">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <div className="col-span-8 flex justify-center items-center border-y-2 text-black border-black">
                  <Timer />
                </div>
                <button onClick={() => start()} className="col-span-2 bg-green-500 rounded-r-lg flex justify-center items-center">
                  <svg className='lg:w-16 w-10 py-3' viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2.08008L19 13.9013L2 25.7225V2.08008Z" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
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

export default timer