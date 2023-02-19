import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Footer from './components/footer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const nilaiRegu = () => {

  const router = useRouter ()

  // ini state
  const [dataJadwalRegu, setDataJadwalRegu] = useState ([])

  const getJadwalRegu = () => {
    axios.get (BASE_URL + `/api/tgr/regu`)
    .then (res => {
      setDataJadwalRegu (res.data.data)
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const toNilaiRegu = (item) => {
    localStorage.setItem ('jadwalReguBiru', item.biru.id)
    localStorage.setItem ('jadwalReguMerah', item.merah.id)

    router.push ('./cetakRegu/' + item.id)
  }

  const isLogged = () => {
    if (localStorage.getItem ('token') === null || localStorage.getItem ('admin') === null) {
      router.push ('/admin/login')
    }
  }

  useEffect (() => {
    getJadwalRegu ()
    isLogged ()
  }, [])

  return (
    <>
    <div className="flex ">

      {/* side bar */}
      <Sidebar />
      {/* Akhir sidebar */}

      {/* awal konten utama */}
      {/* supaya konten dan header dapat di scroll dan tidak memengaruhi sidebar */}
      <div className="w-full overflow-y-auto h-screen"> 
      
        {/* header */}
        <Navbar />
        {/* akhir header */}

        {/* konten utama */}
        <div className="bg-[#1E213C] text-white min-h-full">

          {/* wrapper */}
          <div className="p-7 space-y-5">
            {/* Input Data */}
            <div className="bg-[#2C2F48] rounded-lg flex justify-between p-3">
              <div className="flex items-center px-2">
                <span className='text-lg uppercase font-semibold'>Rekap Nilai Regu</span>
              </div>
            </div>

            <div className="bg-[#2C2F48] min-h-full rounded-lg">
              {/* Table */}
              <table className='w-full table-fixed'>
                <thead className='border-b-2'>
                  <tr>
                    <th className='py-4'>NO</th>
                    <th>Partai</th>
                    <th className='w-[15%]'>Golongan</th>
                    <th className='w-[20%]'>Pemenang</th>
                    <th>Sudut</th>
                    <th>Skor</th>
                    <th>Babak</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  {dataJadwalRegu.filter (a => a.selesai == true).map ((item, index) => (
                    <tr key={index + 1} className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                      <td className='py-5'>{index + 1}</td>
                      <td>{item.partai}</td>
                      <td>{item.kelas}</td>
                      <td>{item.pemenang.nama1} - {item.pemenang.nama2} - {item.pemenang.nama3} ({item.pemenang.kontingen})</td>
                      {(() => {
                        if (item.id_pemenang == item.id_biru) {
                          return (
                            <>
                              <td>Sudut Biru</td>
                              <td>{item.skor_biru.skor_akhir}</td>
                            </>
                          )
                        } else if (item.id_pemenang == item.id_merah) {
                          return (
                            <>
                              <td>Sudut Merah</td>
                              <td>{item.skor_merah.skor_akhir}</td>
                            </>
                          )
                        }
                      })()}
                      <td>{item.babak}</td>
                      <td>
                      <button onClick={() => toNilaiRegu (item)} className="flex m-auto">
                        <div className='w-10 h-10 p-2 bg-blue-700 rounded-xl'>
                          <img src='../svg/info.svg'></img>
                        </div>
                      </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default nilaiRegu