import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import socketIo from 'socket.io-client'
import { useRouter } from 'next/router'
import Navbar from '../component/navbar/navbar'
import Footer from '../seni/components/footer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Socket io
const socket = socketIo (BASE_URL)

const gelanggang = () => {
  
  const router = useRouter ()

  const location = useRouter()
  const {pathname} = location;
  const splitLoc = pathname.split ('/seni/dewan')

  const [gelanggang, setGelanggang] = useState ([])

  const headerConfig = () => {
    let token = localStorage.getItem("token")
    let header = {
      headers : { Authorization : `Bearer ${token}` }
    }
    return header
  }

  const getGelanggang = () => {
    let event = JSON.parse(localStorage.getItem('event'))
    let event_id = event.id
    axios.get (BASE_URL + `/api/gelanggang/event/${event_id}`, headerConfig())
    .then (res => {
      setGelanggang (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const KeJadwal = (selectedItem) => {
    let user = JSON.parse(localStorage.getItem('user'))
    let kategori = selectedItem.status

    if(kategori === 'seni'){
      if (user.role_id === 'dewan') {
        router.push('/seni/dewan/'+ selectedItem.gelanggang)
      }else if (user.role_id === 'juri') {
        router.push('/seni/juri/'+ selectedItem.gelanggang)
      }else if (user.role_id === 'timer') {
        router.push('/seni/timer/'+ selectedItem.gelanggang)
      }else if (user.role_id === 'layar') {
        router.push('/seni/layar/proses/'+ selectedItem.gelanggang)
      }
    }else if(kategori === 'tanding'){
      if (user.role_id === 'dewan') {
        router.push('/tanding/dewan/'+ selectedItem.gelanggang)
      }else if (user.role_id === 'juri') {
        router.push('/tanding/juri/' + selectedItem.gelanggang)
      }else if (user.role_id === 'timer') {
        router.push('/tanding/timer/' + selectedItem.gelanggang)
      }else if (user.role_id === 'layar') {
        router.push('/tanding/layar/' + selectedItem.gelanggang)
      }
    }
}

//   const isLogged = () => {
//     if (localStorage.getItem ('token') === null || localStorage.getItem ('dewan') === null) {
//      router.push ('/seni/dewan/login') 
//     }
//   }
  
  // untuk merefresh saat data berubah
  const ubah_data = () => socket.emit ('init_data')

  useEffect (() => {
    socket.emit('init_data')
    getGelanggang()
    socket.on ('change_data', ubah_data)
    // isLogged ()
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
            <div className="w-11/12 mx-auto py-10">

              {/* text daftar gelanggang */}
              <div className="bg-[#222954] py-3 rounded-xl mb-8">
                  <h1 className='text-3xl font-semibold text-center'>Daftar Gelanggang</h1>
              </div>

              {/* wrapper gelanggang card */}
              <div className="grid grid-cols-2 gap-x-10 mb-4">
                {/* card gelanggang */}
                {gelanggang.map ((item, index) => (
                  <div key={index + 1} className="flex flex-col justify-center items-center border-2 border-[#222954] py-4 rounded-xl space-y-2 mb-3">
                    <h1 className='text-2xl font-montserrat font-bold text-[#222954]'>Gelanggang {item.gelanggang}</h1>
                    <p className='text-xl font-montserrat text-[#222954] uppercase'>({item.status})</p>
                    <button onClick={() => KeJadwal(item)} href={'./dewan/proses/' + item.gelanggang} className='font-medium bg-[#39ac39] hover:bg-[#2f912f] w-40 rounded-xl py-2 text-center'>Detail</button>
                  </div>
                ))}
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

export default gelanggang