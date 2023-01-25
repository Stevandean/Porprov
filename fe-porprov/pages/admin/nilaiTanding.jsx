import React from 'react'
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { useRouter } from 'next/router'

const nilaiTanding = () => {

  const location = useRouter();
  const {pathname} = location;
  const splitLoc = pathname.split('/admin/nilai')

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
                <span className='text-lg uppercase font-semibold'>Rekap {splitLoc}</span>
              </div>
              <div className="px-5 space-x-5">
                <button className='bg-red-700 px-3 py-2 rounded-lg'>Cetak PDF</button>
              </div>
            </div>

            <div className="bg-[#2C2F48] min-h-full rounded-lg">
              {/* Table */}
              <table className='w-full table-fixed'>
                <thead className='border-b-2'>
                  <tr>
                    <th className='py-4'>No</th>
                    <th>Gel</th>
                    <th>Partai</th>
                    <th className='w-[15%]'>Kelas</th>
                    <th className='w-[25%]'>Pemenang</th>
                    <th>Sudut</th>
                    <th>Point</th>
                    <th className='w-[10%]'>Kemenangan</th>
                    <th>Babak</th>
                    <th className='w-[10%]'>Aksi</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                    <td className='py-5'>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>
                    <div className="p-2 space-x-2">
                      <button className='w-10 h-10 p-2 bg-green-600 rounded-xl'>
                        <img src='../svg/pencil.svg'></img>
                      </button>
                      <button className='w-10 h-10 p-2 bg-blue-700 rounded-xl'>
                        <img src='../svg/info.svg'></img>
                      </button>
                    </div>
                    </td>
                  </tr>
                  <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                    <td className='py-5'>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>
                    <div className="p-2 space-x-2">
                      <button className='w-10 h-10 p-2 bg-green-600 rounded-xl'>
                        <img src='../svg/pencil.svg'></img>
                      </button>
                      <button className='w-10 h-10 p-2 bg-blue-700 rounded-xl'>
                        <img src='../svg/info.svg'></img>
                      </button>
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

export default nilaiTanding