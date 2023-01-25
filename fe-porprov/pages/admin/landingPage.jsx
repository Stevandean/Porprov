import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { useRouter } from 'next/router';

const landingPage = () => {

  // const location = useRouter();
  // const {pathname} = location;
  // const splitLoc = pathname.split("/admin/")

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
          <div className="flex flex-col w-full p-14 space-y-7">
            
            {/* Banner */}
            <div className="bg-gradient-to-r from-[#0906BE] to-[#8B55F4] h-44 rounded-lg"></div>
            
            {/* Progres */}
            <div className="grid grid-cols-2 gap-x-7">

              {/* Partai Tanding */}
              <div className="flex flex-col space-y-5">
                <div className="bg-gradient-to-r from-[#0906BE] to-[#8B55F4] py-3 text-center rounded-lg mb-1">
                  <span className='text-2xl uppercase font-semibold'>total partai tanding</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="flex flex-col py-3 text-center bg-gradient-to-r from-[#0906BE] to-[#8B55F4] rounded-lg">
                    <span className="text-2xl font-medium">Proses</span>
                    <span className="text-8xl">18</span>
                  </div>
                  <div className="flex flex-col py-3 text-center bg-gradient-to-r from-[#0906BE] to-[#8B55F4] rounded-lg">
                    <span className="text-2xl font-medium">Selesai</span>
                    <span className="text-8xl">02</span>
                  </div>
                </div>
              </div>
              {/* Akhir Partai Tanding */}

              {/* Partai TGR */}
              <div className="flex flex-col space-y-5">
                <div className="bg-gradient-to-r from-[#0906BE] to-[#8B55F4] py-3 text-center rounded-lg mb-1">
                  <span className='text-2xl uppercase font-semibold'>total partai tgr</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="flex flex-col py-3 text-center bg-gradient-to-r from-[#0906BE] to-[#8B55F4] rounded-lg">
                    <span className="text-2xl font-medium">Proses</span>
                    <span className="text-8xl">18</span>
                  </div>
                  <div className="flex flex-col py-3 text-center bg-gradient-to-r from-[#0906BE] to-[#8B55F4] rounded-lg">
                    <span className="text-2xl font-medium">Selesai</span>
                    <span className="text-8xl">02</span>
                  </div>
                </div>
              </div>
              {/* Akhir Partai TGR */}

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

export default landingPage