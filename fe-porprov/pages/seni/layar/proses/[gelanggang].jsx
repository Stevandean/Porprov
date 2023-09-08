import React, { use, useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detail = () => {

  // state kematian
  const router = useRouter()
  const { gelanggang } = router.query
  const [proses] = useState ('proses')
  
  // ini state
  const [data, setData] = useState ([])
  const [jadwal, setJadwal] = useState ([])
    
  //config header
  const headerConfig = () => {
    let token = localStorage.getItem("token")
    let header = {
    headers : { Authorization : `Bearer ${token}` }
    }
    return header
  }

  const getData = () => {
    axios.get (BASE_URL + "/api/seni/jadwal/gel/" + gelanggang, headerConfig())
    .then (res => {
        setData (res.data.data)
    }) 
    .catch (err => {
        console.log(err.response.data.message);
    })
    console.log (BASE_URL + "/api/tgr/");
}

  // const getJadwal = () => {
  //   axios.get (BASE_URL + `/api/tgr`)
  //   .then (res => {
  //     setJadwal (res.data.data)
  //   })
  //   .catch (err => {
  //     console.log(err.response.data.message);
  //   })
  // }

  const toDetailPartai = (item) => {
    localStorage.setItem ('jadwalSeni', JSON.stringify(item))
    router.push ('../detailPartai')
  }

  useEffect (() => {
    if (!router.isReady) return; 
    getData ()
    // getJadwal ()
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
            {/* wrapper gelanggang & button back */}
            <div className="flex w-full gap-x-5 h-14">
              {/* button back */}
                <Link href={'/seni/layar'} className="bg-red-700 rounded-lg w-14 h-full flex m-auto">
                  <img className='p-1.5' src="../../../../../../svg/back.svg" />
                </Link>
              {/* kategori & pool */}
              <div className="flex flex-col text-center m-auto space-y-3 w-full">
                <span className='bg-[#2C2F48] rounded-lg py-3 px-5 text-3xl tracking-widest'>GELANGGANG {gelanggang}</span>
              </div>
            </div>

            {/* button proses & selesai */}
            <div className="grid grid-cols-2 gap-x-7">
                <Link href={'/seni/layar/proses/' + gelanggang} className={proses ==  'proses' ? "bg-[#2C2F48] rounded-lg text-center py-1" : "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                    <span className='text-2xl font-semibold uppercase'>proses</span>
                </Link>
                <Link href={'/seni/layar/selesai/' + gelanggang} className={proses ==  'selesai' ? "bg-[#2C2F48] rounded-lg text-center py-1" : "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                    <span className='text-2xl font-semibold uppercase'>Selesai</span>
                </Link>
            </div>
            
            {/* // wrapper */}
            {data.filter (a => a.selesai == false).map ((item, index) => (
              <div key={index + 1} className="text-center rounded-lg shadow-lg border-2 border-[#2C2F48]">
                <div className="bg-[#2C2F48] py-2 rounded-t-lg">
                  <span className='text-xl font-semibold'>PARTAI {item.partai} - {item.kategori} - {item.jk} {item.kelas} - {item.babak}</span>
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
                        } else if (item.kategori.toLowerCase() == 'ganda') {
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
                        } else {
                          console.log('gagal');
                        }
                      })()}
                    </div>
                    {/* kontingen pesilat merah */}
                    <span className='font-medium texy-lg text-[#2C2F48]'>{item.biru.kontingen}</span>
                    {/* action button */}
                  </div>
                  {/* card pesilat merah */}
                  <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                    {/* nama pesilat merah */}
                    <div className="bg-red-700 rounded-t-lg py-1 flex flex-col">
                      {(() => {
                        if (item.kategori.toLowerCase() == 'tunggal') {
                          return (
                            <span className='text-xl font-medium'>{item.merah.nama1}</span>
                          )
                        } else if (item.kategori.toLowerCase() == 'ganda') {
                          return (
                            <>
                              <span className='text-xl font-medium'>{item.merah.nama1}</span>
                              <span className='text-xl font-medium'>{item.merah.nama2}</span>
                            </>
                          )
                        } else if (item.kategori.toLowerCase() == 'regu') {
                          return (
                            <>
                              <span className='text-xl font-medium'>{item.merah.nama1}</span>
                              <span className='text-xl font-medium'>{item.merah.nama2}</span>
                              <span className='text-xl font-medium'>{item.merah.nama3}</span>
                            </>
                            )
                        } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
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
                  </div>   
                </div>
                {/* action button */}
                <div className="px-3 pb-3">
                  <button className='bg-[#39ac39] hover:bg-[#2f912f] py-2 rounded-lg w-full' onClick={() => toDetailPartai(item)}>Layar</button>
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