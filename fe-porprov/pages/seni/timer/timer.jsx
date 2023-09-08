import React, { useContext, useState, useEffect } from 'react'
import { globalState } from '../../../context/context'
import axios from 'axios'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Timer from '../components/timer'
import { useRouter } from 'next/router'
import socketIo from 'socket.io-client'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const socket = socketIo(BASE_URL)

const timer = () => {

  const router = useRouter ()
  const [event, setEvent] = useState ([])

  const {duration, setDuration} = useContext(globalState)  
  const {running, setRunning} = useContext(globalState)  
  const [aktif, setAktif] = useState (0)
  const [peserta, setPeserta] = useState ([])
  const [jadwal, setJadwal] = useState ([])

  const mulai = () => {
    const peserta = JSON.parse(localStorage.getItem('pesertaSeni'))
    const jadwal = JSON.parse(localStorage.getItem('jadwalSeni'))

    let id_jadwal = jadwal.id
    let id_peserta = peserta.id


    if (aktif == false) {
      let form = {
        aktif : 1
      }

      if (confirm ('Anda yakin untuk memulai pertandingan?') == 1) {
        axios.put (BASE_URL + `/api/seni/jadwal/${id_jadwal}`, form)
        .then (res => {
          console.log(res.data.message);
          console.log('berhasil');
          socket.emit ('editData')
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
        axios.put (BASE_URL + `/api/seni/jadwal/${id_jadwal}`, form)
        .then (res => {
            console.log(res.data.message);
            socket.emit ('editData')
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
      }
    }
  }

  const getHukum = async () => {
    const peserta = JSON.parse(localStorage.getItem('pesertaSeni'))
    const jadwal = JSON.parse(localStorage.getItem ('jadwalSeni'))

    setPeserta (peserta)
    setJadwal (jadwal)
    // setPeserta (JSON.parse(localStorage.getItem('pesertaSeni'))) 
    // setJadwal (JSON.parse(localStorage.getItem('jadwalSeni')))

    let id_jadwal = jadwal.id
    let id_peserta = peserta.id

    await axios.get (BASE_URL + `/api/seni/hukum/jadwal/${id_jadwal}/${id_peserta}`)
    .then ((res) => {
      setAktif (res.data.data.jadwal.aktif)
    })
    .catch ((err) => {
      console.log(err.message);
    })
    console.log(BASE_URL + `/api/seni/hukum/jadwal/${id_jadwal}/${id_peserta}`);
  }
      
  const getEvent = () => {
    let event = JSON.parse(localStorage.getItem('event'))
    let event_id = event.id
    axios.get (BASE_URL + `/api/event/${event_id}`)
    .then (res => {
    setEvent (res.data.data)
    })
    .catch (err => {
    console.log(err.response.data.message);
    })
}

  const handle = useFullScreenHandle ()

  const isLogged = () => {
    if (localStorage.getItem ('token') === null || localStorage.getItem ('user') === null) {
    router.push ('/seni/timer/login') 
    }
  }

  useEffect(() => {
    const jadwal = JSON.parse(localStorage.getItem ('jadwalSeni'))
    const user = JSON.parse(localStorage.getItem('user'))
    let data ={
        user: user.username,
        id_jadwal: jadwal.id
    }
    socket.emit('joinSeni', data)

    return () => {
        socket.off('joinSeni', data)
        socket.close()
    }
  }, [])

  const ubah_data = () => socket.emit ('init_data')

  useEffect(() => {

    socket.emit ('init_data')
    socket.on('getData', getHukum)
    socket.on ('change_data', ubah_data)
    getEvent ()
    getHukum ()
    isLogged ()
  }, [])

  return (
    <>
    <div className="flex ">

      {/* awal konten utama */}
      <div className="w-full overflow-y-auto h-screen my-auto"> 
      
        {/* header */}
        <div className="bg-[#2C2F48] sticky top-0 h-20 z-40 flex">
          <div className="flex justify-between w-full text-white px-10">
              <div className="flex space-x-3">
              <button onClick={handle.enter} className="flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                  </svg>
              </button> 
                  <img className='py-3'src={BASE_URL + "/api/event/image/" + event.logo} alt="Kabupaten Trenggalek" />
              </div>
              <span className='text-xl font-semibold my-auto uppercase text-center'>{event.nama}</span>
              <div className="flex space-x-3">
                  <img className='py-3' src={BASE_URL + "/api/event/image/" + event.icon1} alt="IPSI" />
                  <img className='py-3' src={BASE_URL + "/api/event/image/" + event.icon2} alt="IPSI2" />
              </div>
          </div> 
        </div>
        {/* akhir header */}

        {/* konten utama */}
        <FullScreen handle={handle} className="bg-white text-white min-h-full m-auto overflow-y-auto">
          {/* wrapper keseluruhan */}
          <div className="w-11/12 mx-auto lg:py-10 py-5 ">

            {/* wrapper sudut */}
            <div className="items-center flex justify-between rounded-lg gap-x-3 mb-2 lg:mb-5">
              {/* button back */}
              <button onClick={() => router.back()} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                <img className='p-3' src="../../svg/back.svg" />
              </button>
              <span className={jadwal.id_peserta_biru == peserta.id ? 'lg:text-4xl text-xl font-bold text-white py-2.5 bg-blue-600 w-full rounded-lg text-center' : 'lg:text-4xl text-xl font-bold text-white py-2.5 bg-red-600 w-full rounded-lg text-center'}>{'PARTAI '+ (jadwal.partai)} - {peserta.jk} - {peserta.golongan}</span>
              <div className=""></div>
            </div>

            {/* wrapper peserta */}
              <div className={jadwal.id_peserta_biru == peserta.id ? 'w-full flex flex-col justify-center items-center bg-blue-600 rounded-lg mb-7 py-3' : 'w-full flex flex-col justify-center items-center text-red-600 rounded-lg mb-7 py-3'}>
                {(() => {
                  if (peserta.kategori == 'tunggal') {
                    return (
                        <h1 className='text-2xl font-bold'>{peserta.nama1}</h1>
                      )
                  } else if (peserta.kategori == 'ganda') {
                    return (
                      <>
                        <h1 className='text-2xl font-bold'>{peserta.nama1} - {peserta.nama2}</h1>
                      </>
                    )
                  } else if (peserta.kategori == 'regu') {
                    return (
                      <>
                        <h1 className='text-2xl font-bold'>{peserta.nama1} - {peserta.nama2} - {peserta.nama3}</h1>
                      </>
                    )
                  } else if (peserta.kategori == 'solo_kreatif') {
                    return (
                      <h1 className='text-xl font-semibold'>{peserta.nama1}</h1>
                    )
                  }
                })()}
                <h1 className='tracking-wider lg:text-xl'>{peserta.kontingen}</h1>
              </div>
            {/* <div className="flex flex-col space-y-5 border-2 border-black py-2 rounded-lg mb-4 lg:mb-10 text-center">
            </div> */}

            {/* wrapper timer and aktif button */}
              {jadwal.id ? <Timer id_jadwal={jadwal.id} id_peserta={peserta.id} socket={socket}/> : null}
          </div>
        </FullScreen>
        <div className="hidden lg:block">
          <Footer />
        </div>
      </div>
      {/* akhir konten utama */}
    </div>
    </>

  )
}

export default timer