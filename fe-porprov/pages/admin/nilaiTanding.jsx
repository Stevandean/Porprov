import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import axios from 'axios';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { reactToPrint } from 'react-to-print'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const nilaiTanding = () => {

  const router = useRouter ()

  // ini state
  const [dataJadwalTanding, setDataJadwalTanding] = useState ([])

  const getJadwalTanding = () => {
    axios.get (BASE_URL + `/api/tanding/jadwal`)
    .then (res => {
      setDataJadwalTanding (res.data.data)
      console.log(res.data.data);
    })
    .catch (err => {
      console.log(err.response.data.message);
    })
  }

  const isLogged = () => {
    if (localStorage.getItem ('token') === null || localStorage.getItem ('admin') === null) {
      router.push ('/admin/login')
    }
  }

  useEffect (() => {
    getJadwalTanding ()
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
                <span className='text-lg uppercase font-semibold'>Rekap Tanding</span>
              </div>
            </div>

            <div className="bg-[#2C2F48] min-h-full rounded-lg">
              {/* Table */}
              <table className='w-full table-fixed'>
                <thead className='border-b-2'>
                  <tr>
                    <th className='w-[5%] py-4'>No</th>
                    <th className='w-[5%]'>Gel</th>
                    <th className='w-[5%]'>Partai</th>
                    <th className='w-[10%]'>Kelas</th>
                    <th className='w-[20%]'>Pemenang</th>
                    <th>Sudut</th>
                    <th>Point</th>
                    <th className='w-[10%]'>Kemenangan</th>
                    <th>Babak</th>
                    <th className='w-[7%]'>Aksi</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  {dataJadwalTanding.filter(a => a.selesai == true).map((item, index) => (
                    <tr key={index + 1} className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                      <td className='py-5'>{index + 1}</td>
                      <td>{item.gelanggang.gelanggang}</td>
                      <td>{item.partai}</td>
                      <td>{item.kelas}</td>
                      <td>{item.pemenang?.nama} - {item.pemenang?.kontingen}</td>
                      {(() => {
                        if (item.pemenang?.id == item.id_peserta_biru) {
                          return (
                            <>
                              <td>Sudut Biru</td>
                              <td>({item.total_biru}) - ({item.total_merah})</td>
                            </>
                          )
                        } else if (item.pemenang?.id == item.id_peserta_merah) {
                          return (
                            <>
                              <td>Sudut Merah</td>
                              <td>({item.total_biru}) - ({item.total_merah})</td>
                            </>
                          )
                        }
                      })()}
                      <td>{item.keterangan}</td>
                      <td>{item.babak}</td>
                      <td>
                        <Link href={'./' + item.id} className="p-2 space-x-2 flex justify-center items-center">
                          <div className='w-10 h-10 p-2 bg-blue-700 rounded-xl'>
                            <img src='../svg/info.svg'></img>
                          </div>
                        </Link>
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

export default nilaiTanding