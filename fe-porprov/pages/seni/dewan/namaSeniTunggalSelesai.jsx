import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'
import { useRouter } from 'next/router'

const namaSeniTunggalSelesai = () => {

    const location = useRouter
    const {pathname} = location()
    const splitLoc = pathname.split('/seni/dewan/')

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

            <div className="flex">
                {/* button back */}
                <div className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                    <img className='p-3' src="../../svg/back.svg" />
                </div>
                {/* kategori & pool */}
                <div className="flex flex-col text-center m-auto space-y-3">
                    <span className='text-4xl text-[#2C2F48] font-bold'>Tunggal</span>
                    <span className='bg-[#51607A] rounded-lg py-3 px-5 text-xl tracking-widest	'>Pool A - Putra</span>
                </div>
            </div>

            <div className="border-2 border-[#222954] p-5 space-y-7 rounded-lg">
                {/* button proses & selesai */}
                <div className="grid grid-cols-2 gap-x-7">
                    <Link href= 'namaSeniTunggal' className={splitLoc[1] === "namaSeniTunggal" ? "bg-[#2C2F48] rounded-lg text-center py-1" : "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                        <span className='text-2xl font-semibold uppercase'>proses</span>
                    </Link>
                    <Link href= 'namaSeniTunggalSelesai' className={splitLoc[1] === "namaSeniTunggalSelesai" ? "bg-[#2C2F48] rounded-lg text-center py-1": "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                        <span className='text-2xl font-semibold uppercase'>selesai</span>
                    </Link>
                </div>
                
                {/* table */}
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
                        <tr className='even:bg-[#4C4F6D] odd:bg-[#2C2F48]'>
                            <td className='py-3'>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>
                                <div className="flex flex-row justify-center space-x-2">
                                    <Link href={"monitorSeniTunggal"} className="bg-[#253EA3] px-6 py-1 rounded-lg">
                                        <span>Monitor</span>
                                    </Link>
                                </div>
                            </td>
                        </tr>
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

export default namaSeniTunggalSelesai